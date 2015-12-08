var fs = require('fs');

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8');

  return {

    one: (function () {
      return input.replace(/\n/g, '').length - input.replace(/\\(\\|"|x[0-f]{2})/g, '*').replace(/["\n]/g, '').length
    }()),

    two: (function () {
      return input.replace(/^|\n/g, '**').replace(/["\\]/g, '**').length - input.replace(/\n/g, '').length;
    }())

  };

};
