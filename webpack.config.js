const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SOURCE_CODE = path.join(__dirname, 'src');
const OUTPUT_PATH = path.join(__dirname, 'dist');
const ENVIRONMENT = process.env.NODE_ENV;

module.exports = {
    mode: ENVIRONMENT,
    devServer: {
        contentBase: SOURCE_CODE,
        port: 7777,
        host: '0.0.0.0'
    },
    entry:  path.join(SOURCE_CODE, 'index.js'), 
    output: {
      path: OUTPUT_PATH,
      filename: 'main[hash].js'
    },
    plugins: [new HtmlWebpackPlugin({
          template:  path.join(SOURCE_CODE, 'index.html'),
          filename: 'index.html'
      })
    ],
    devtool: ENVIRONMENT === "development" ?  "source-map" : false,
    resolve: {
        extensions: [".js"]
    }
  };
