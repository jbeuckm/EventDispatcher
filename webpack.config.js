module.exports = {
  entry: "./src/index.js",
  output: {
    library: "event-dispatcher",
    libraryTarget: "umd"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
