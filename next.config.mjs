/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend-store-apple.vercel.app',
                port: '', // Specify the port number
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;