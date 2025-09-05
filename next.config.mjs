/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "kkmifsritqjabklifonk.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/bungalow-images/**",
            },
        ],
    },
};

export default nextConfig;
