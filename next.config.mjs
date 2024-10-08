/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SPOTIFY_CLIENT_ID:process.env.SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET:process.env.SPOTIFY_CLIENT_SECRET,
        SPOTIFY_REFRESH_TOKEN:process.env.SPOTIFY_REFRESH_TOKEN,
        DJ_TOKEN:process.env.DJ_TOKEN
    }
};

export default nextConfig;
