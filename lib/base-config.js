var yeticss = require('yeticss')
var autoPrefixer = require('autoprefixer-core')
var HtmlPlugin = require('./html-plugin')

module.exports = function getBaseConfig (spec) {
  return {
    entry: [
      spec.entry
    ],
    output: spec.output,
    resolve: {
      extensions: [
        '',
        '.js',
        '.json',
        '.cjsx'
      ]
    },
    plugins: [
      new HtmlPlugin({
        html: spec.html
      })
    ],
    module: {
      loaders: [
        {
          test: /(\.js$)|(\.jsx$)/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader'
          ]
        },
        {
          test: /\.cjsx$/,
          loader: 'babel-loader!coffee-loader!cjsx-loader'
        },
        {
          test: /\.json$/,
          loaders: ['json']
        },
        {
          test: /\.(otf|eot|svg|ttf|woff)/,
          loader: 'url-loader?limit=10000'
        },
        {
          test: /\.jade$/,
          loaders: ['jade']
        }
      ]
    },
    stylus: {
      use: [yeticss()]
    },
    postcss: [autoPrefixer()]
  }
}
