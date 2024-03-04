/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "github.com",
                protocol: "https",
            },
            {
                hostname: "media.licdn.com",
                protocol: "https",
            },
        ],
    },
};

export default nextConfig;
