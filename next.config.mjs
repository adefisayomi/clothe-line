/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    FLUTTERWAVE_PUBLIC_KEY: "FLWPUBK_TEST-c039b1ba2ecc868a1eaff486681bbd5f-X",
    FLUTTERWAVE_SECRET_KEY: "FLWSECK_TEST-ce968e5a6f4556ab552dd3368b64f9a4-X",
    FLUTTERWAVE_ENCRYPTION_KEY: "FLWSECK_TEST7b79ab345091",
    FIREBASE_API_KEY: "AIzaSyCTdrX32ASEeEo4goCYD_SYepK_PvZiGPw",
    FIREBASE_APP_ID: "1:323117669192:web:24addff32125356988f17d",
    FIREBASE_MEASUREMENT_ID: "G-0VMR8LPZ3X"
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
