require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
  entry: {
    //主体功能入口页
    main: path.join(__dirname, 'src', 'main.we?entry=true'),
    reading: path.join(__dirname, 'src', 'reading.we?entry=true'),
    post: path.join(__dirname, 'src', 'post.we?entry=true'),
    setting: path.join(__dirname, 'src', 'setting.we?entry=true'),

    //其他页面
    yywebview: path.join(__dirname, 'src', 'yywebview.we?entry=true'),
    list: path.join(__dirname, 'src', 'reading/list.we?entry=true'),
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader']
      }
    ]
  }
}
