const plugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withOffline = require("next-offline");

// The NextJS config defined separately
// Gets passed to next-offline
const nextConfig = {
  webpack(config, { isServer }) {
    // Allow importing of shader files (e.g. `.glsl` -- filenames below)
    // @see: https://github.com/glslify/glslify-loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|ps)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },

  // Internationalized Routing
  // @see: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};

module.exports = plugins(
  [
    // Setup Offline Support
    // This requires the `public` folder with a `manifest.json`
    [
      withOffline,
      {
        // Optional offline config
      },
    ],
    withBundleAnalyzer,
  ],
  nextConfig
);
