module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/under-construction',
        permanent: true,
      }
    ]
  },
  images: {
    domains: [
      "images.unsplash.com",
      "images.ctfassets.net",
      "images.pexels.com",
    ],
  },
};
