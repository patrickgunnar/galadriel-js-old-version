const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your library
  output: {
    filename: 'galadriel.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    library: 'Galadriel', // Library name accessible in the browser
    libraryTarget: 'umd', // Universal Module Definition (UMD)
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'production', // or 'development' for non-minified output
  devtool: 'source-map', // Generate source maps
};
