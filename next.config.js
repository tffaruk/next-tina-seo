const path = require('path');

module.exports = {
  // Your Next.js configuration options go here
  // ...

  // Specify the entry point for your package
  entry: './src/index.js',

  // Specify the output directory and filename for your package
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'next-tina-seo.js',
    libraryTarget: 'commonjs2',
  },

  // Specify any external dependencies for your package
  // In this example, we're excluding the 'next' package
  // because it's already a dependency of our app and doesn't need to be included in our package
  externals: {
    'next': 'commonjs2 next',
  },

  // Specify any loaders or plugins you need to use
  // For example, if you need to use the 'babel-loader' to compile your code,
  // you would include it here
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
