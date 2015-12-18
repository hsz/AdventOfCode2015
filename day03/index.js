'use strict';
var _  = require('lodash')
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
      var r = this.r; this.r = !r;
      v === '>' ? ++this.x[r] : v === '<' ? --this.x[r] : v === '^' ? ++this.y[r] : --this.y[r];
      return !this.a[this.x[r] + '~' + this.y[r]] && (this.a[this.x[r] + '~' + this.y[r]] = true) * ++sum || sum;
    }, 1, {x: {true: 0, false: 0}, y: {true: 0, false: 0}, r: false, a: {'0~0': true}})

  };

};
