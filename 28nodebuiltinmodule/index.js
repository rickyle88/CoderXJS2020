// Node built-in module
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html

// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_readfilesync_path_options

var fs = require('fs');

var text = fs.readFileSync('./song.txt', {encoding: 'UTF8'});

console.log(text);

fs.writeFileSync('./song2.txt', 'I am coderx tokyo');

/////////////////////////////////////////
/**
 * 1. Require module `path` (built-in sẵn trong node)
 * 2. Sử dụng method extname để tìm extension (đuôi) của một đường dẫn (path) tới file nào đó.
 * Tra cứu: https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_extname_path
 */

// require module here!

var rq = require('path');

function getExtension(fileName) {
    // your code here!
    return path.extname(fileName);
  }