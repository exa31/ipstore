/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5340', // Specify the port number
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;