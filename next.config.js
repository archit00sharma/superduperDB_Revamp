module.exports = {
  images: {
    deviceSizes: [320, 480, 768, 1024, 1280, 1440, 1600, 1920, 2560, 3840],
    domains: ['a-us.storyblok.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
