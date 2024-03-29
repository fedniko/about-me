/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    // fiber: false, // Для старой версии node.js
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [`${process.env.NEXT_HOSTNAME}`, 'mc.yandex.ru', 'localhost'],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
