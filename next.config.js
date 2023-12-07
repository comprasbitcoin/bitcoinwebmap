// @ts-check

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

const withNextIntl = require("next-intl/plugin")();

const config = {};

module.exports = withPWA(withNextIntl(config));

/** @type {import('next').NextConfig} 
const config = {};

module.exports = withNextIntl(config);*/
