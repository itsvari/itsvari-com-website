/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: [],
    },
};

module.exports = nextConfig;
