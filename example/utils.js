function extend(dest, src) {
  for (var key in src) {
    dest[key] = src[key]
  }
}


exports.extend = extend