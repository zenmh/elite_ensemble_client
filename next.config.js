/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.startech.com.bd",
      "www.custompc.com",
      "i.ytimg.com",
      "media.mmorpg.com",
      "www.siliconera.com",
      "geekawhat.com",
    ],
  },
};

module.exports = nextConfig;
