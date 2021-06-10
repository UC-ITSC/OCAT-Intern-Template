/* eslint-disable sort-keys */
const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  mode: `development`,
  devtool: `eval-source-map`,
  entry: {
    app: `./client/index.jsx`,
  },
  output: {
    path: path.resolve(__dirname, `public`, `js`),
    filename: `[name].bundle.js`,
    publicPath: `/js/`,
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: `url-loader?limit=100000`,
      },
      {
        test: /\.scss?$/,
        loaders: [
          `style-loader`, `css-loader`, `sass-loader`,
        ],
      },
      {
        test: /\.css?$/,
        loaders: [
          `style-loader`, `css-loader`,
        ],
      },
      {
        test: /\.(js|jsx)?$/,
        include: [
          path.resolve(__dirname, `client`),
        ],
        exclude: [],
        use: [
          { loader: `babel-loader` },
          { loader: `imports-loader` },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: `jquery`,
      jQuery: `jquery`,
    }),
  ],
  resolve: {
    modules: [
      `node_modules`,
      `shared`,
    ],
    extensions: [ `.js`, `.jsx`, `.css` ],
  },
  profile: false,
  bail: true,
  cache: true,
};
