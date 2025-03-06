"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";

import { Card, CardBody } from "@heroui/card";

import { title } from "@/components/primitives";

import { Mail, Github } from "lucide-react";

export default function Home() {
    const [textIndex, setTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const scrollingTexts = ["write code", "make music"];

    // Effect to cycle through texts with fade transitions
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Start fade out
            setIsVisible(false);

            // After fade out completes, change text and fade in
            setTimeout(() => {
                setTextIndex((prevIndex) => (prevIndex + 1) % scrollingTexts.length);
                setIsVisible(true);
            }, 1000); // Wait 1 second after fade out starts

        }, 6000); // Full cycle every 6 seconds

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-8 md:py-10">
            <div className="max-w-2xl mx-auto px-6 text-left">
                <h1 className={`${title({ size: "lg" })} mb-8`}>
                    Hi. I'm Ashe, and I{" "}
                    <span className="relative inline-block min-w-[180px]">
                        <span
                            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <span className="text-primary">{scrollingTexts[textIndex]}</span><span className="text-foreground">.</span>
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
                            <span role="img" aria-label="construction" className="text-small">
                                🚧
                            </span>
                            <p className="text-small">The rest of this website is still under construction. Pardon the dust!</p>
                        </div>
                    </CardBody>
                </Card>

                <div className="flex flex-wrap gap-4 mt-12">
                    <Button
                        as="a"
                        href="mailto:contact@itsvari.com"
                        variant="shadow"
                        color="primary"
                        radius="full"
                        startContent={<Mail size={18} />}
                    >
                        Email me
                    </Button>

                    <Button
                        as="a"
                        href="https://github.com/itsvari"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="shadow"
                        color="default"
                        radius="full"
                        startContent={<Github size={18} />}
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
}
