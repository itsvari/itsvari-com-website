"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Mail } from "lucide-react";
import { siGithub } from "simple-icons";

import { title } from "@/components/primitives";

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollingTexts = ["write code", "make music"];

  // Initial fade in effect
  useEffect(() => {
    // Short delay before initial fade in
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(initialTimeout);
  }, []); // Empty dependency array means this runs once on mount

  // Effect to cycle through texts with fade transitions
  useEffect(() => {
    // Skip setting up the interval until after initial render
    if (!isVisible) return;

    const intervalId = setInterval(() => {
      // Start fade out
      setIsVisible(false);

      // After fade out completes, change text and fade in
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % scrollingTexts.length);
        setIsVisible(true);
      }, 1000); // Wait 1 second after fade out starts
    }, 4000); // Full cycle every 4 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [isVisible]); // Depend on isVisible so interval starts after initial fade in

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-8 md:py-10">
      <div className="max-w-2xl mx-auto px-6 text-left">
        <h1 className={`${title({ size: "lg" })} mb-8`}>
          Hi. I&apos;m Ashe, and I{" "}
          <span className="relative inline-block min-w-[180px]">
            <span
              className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              <span className="text-primary">{scrollingTexts[textIndex]}</span>
              <span className="text-foreground">.</span>
            </span>
          </span>
        </h1>

        {/* Construction Notice Card */}
        <Card
          className="my-8 border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
          shadow="sm"
        >
          <CardBody>
            <div className="flex items-center gap-2">
              <span aria-label="construction" className="text-small" role="img">
                🚧
              </span>
              <p className="text-small">
                The rest of this website is still under construction. Pardon the
                dust!
              </p>
            </div>
          </CardBody>
        </Card>

        <div className="flex flex-wrap gap-4 mt-12">
          <Button
            as="a"
            color="primary"
            href="mailto:contact@itsvari.com"
            radius="full"
            startContent={<Mail size={18} />}
            variant="shadow"
          >
            Email me
          </Button>
          <Button
            as="a"
            color="default"
            href="https://github.com/itsvari"
            radius="full"
            rel="noopener noreferrer"
            startContent={
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d={siGithub.path} />
              </svg>
            }
            target="_blank"
            variant="shadow"
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
