/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "http",
            port: "8000",  // Specify the port separately if needed
            hostname: "localhost",  // Only the hostname
            pathname: "/media/**",  // This would match anything after /media/
          },
        ],
      },
};

export default nextConfig;
