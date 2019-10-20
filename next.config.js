const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === "css-loader" && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
  config.module.rules.push({
    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
    use: {
      loader: "url-loader",
      options: {
        limit: 100000,
        name: "[name].[ext]"
      }
    }
  });

  return config;
}

module.exports = withCss(
  withSass({
    webpack(config) {
      HACK_removeMinimizeOptionFromCssLoaders(config);
      return config;
    }
  })
);
