const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  images: {
    domains: ["press.hulu.com", "image.tmdb.org"],
  },
});
