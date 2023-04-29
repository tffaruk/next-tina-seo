const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dist/NextTinaSeo.js",
    library: "NextTinaSeo",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    next: "next",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias:{'next/router': path.resolve(__dirname, 'node_modules/next/router'),}
  },
};
