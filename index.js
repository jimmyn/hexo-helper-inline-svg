'use strict';

var fs = require('fs');
var pathFn = require('path');

hexo.extend.helper.register('inline_svg', function (filename) {
  var path = pathFn.join(hexo.theme_dir, 'source', filename);
  return fs.readFileSync(path);
});
