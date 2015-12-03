var _  = require('underscore')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('');

  return {

    one: _.reduce(input, function (sum, v) {
      v === '>' ? ++this.x : v === '<' ? --this.x : v === '^' ? ++this.y : --this.y;
      return !this.a[this.x + '~' + this.y] && (this.a[this.x + '~' + this.y] = true) * ++sum || sum;
    }, 1, {x: 0, y: 0, a: {'0~0': true}}),

    two: _.reduce(input, function (sum, v) {
      return null;
    }, 0)

  };

};
