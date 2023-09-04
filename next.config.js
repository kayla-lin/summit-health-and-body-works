/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "https://summit-health-and-body-works.vercel.app",
      "www.summithealthbody.com",
    ],
  },
};

module.exports = nextConfig;
