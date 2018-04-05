'use strict';

var fs = require('fs');
var pathFn = require('path');
var base64Img = require('base64-img');

hexo.extend.helper.register('inline_svg', function (filename, base64) {
  var path = pathFn.join(hexo.theme_dir, 'source', filename);
  if (base64) {
    return base64Img.base64Sync(path).replace('svg;', 'svg+xml;');
  }
  return fs.readFileSync(path);
});
