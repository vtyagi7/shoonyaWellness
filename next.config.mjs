/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.midjourney.com',
              port: '',
              pathname: '**/**',
            },
          ],
        domains: ["cdn.midjourney.com","images.pexels.com"],
    },
};

export default nextConfig;
