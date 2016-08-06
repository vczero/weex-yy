require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'main.we?entry=true'),
    "tabbar-item": path.join(__dirname, 'src', 'tabbar-item.we?entry=true'),
    reading: path.join(__dirname, 'src', 'reading.we?entry=true'),
    post: path.join(__dirname, 'src', 'post.we?entry=true'),
    setting: path.join(__dirname, 'src', 'setting.we?entry=true'),
    home: path.join(__dirname, 'src', 'home.we?entry=true')
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
