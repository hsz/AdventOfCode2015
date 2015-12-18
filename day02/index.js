'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
    return _.sortBy(_.map(v.split('x'), _.parseInt));
  });

  return {

    one: _.reduce(input, function (sum, v) {
      return sum + 3 * v[0] * v[1] + 2 * v[0] * v[2] + 2 * v[1] * v[2];
    }, 0),

    two: _.reduce(input, function (sum, v) {
      return sum + 2 * v[0] + 2 * v[1] + v[0] * v[1] * v[2];
    }, 0)

  };

};
