const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV;

const config = {
  devtool: isProd ? 'source-map' : '',

  context: path.resolve(__dirname, 'src'),

  entry: {
    main: './scripts/main.tsx',
    style: './styles/style.scss',
  },

  output: {
    filename: isProd ? '[name]-[hash].js' : '[name].js',
    chunkFilename: isProd ? '[name]-[hash].js' : '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ttf|otf|eot|svg|woff(2)?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProd ? '[name]-[hash].[ext]' : '[name].[ext]',
            },
          }
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),

    new MiniCssExtractPlugin({
      filename: isProd ? '[name].css' : '[name].[hash].css',
      chunkFilename: isProd ? '[id].css' : '[id].[hash].css',
    }),
  ],

  devServer: {
    compress: true,
    hot: true,
    index: 'index.html',
    inline: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      ignored: /node_modules/,
    }
  }
};

module.exports = config;
