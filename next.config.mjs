/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'cdn-pika-production-cdn-bucket.s3.eu-central-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
