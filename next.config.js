// const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const nextTranslate = require('next-translate')

//const isProd = process.env.NODE_ENV === "production";


const i18n = {
 ...nextTranslate()
}

const nextJsConfig = {
  rewrites: async () => [
    {
      // this gets converted to /(en|fr|de)/(.*) so will not match the top-level
      // `/` or `/fr` routes like /:path* would
      source: '/(.*)',
      destination: '/another',
    },
  ],
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};


module.exports = withPlugins([
  [
    withCSS(),
    withLess(),
  ],
  nextJsConfig,
  i18n,
]);
