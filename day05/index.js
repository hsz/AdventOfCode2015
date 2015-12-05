var _  = require('underscore')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('\n');

  return {

    one: _.reduce(input, function (sum, v) {
      return sum + (/(.)\1/.test(v) && /([aeiou].*){3}/.test(v) && !/ab|cd|pq|xy/.test(v));
    }, 0),

    two: _.reduce(input, function (sum, v) {
      return sum + (/(..).*\1/.test(v) && /(.)[^\1]\1/.test(v));
    }, 0)

  };

};
