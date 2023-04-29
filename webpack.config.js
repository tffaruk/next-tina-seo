const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-nextjs-package.js',
    library: 'MyNextJsPackage',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    next: 'next',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};