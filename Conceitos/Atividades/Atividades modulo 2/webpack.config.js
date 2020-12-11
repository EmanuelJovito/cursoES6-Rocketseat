const path = require('path')

module.exports = {
    entry : ['@babel/polyfill',"./src/main.js"],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, '/public'),
      compress: true,
      port: 9000
    }
  }
