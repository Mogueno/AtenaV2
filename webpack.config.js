const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'public/'),
    publicPath: 'http://localhost:3000/dist/',
    hot: true,
  },
};
