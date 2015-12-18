'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8')
    , fn    = function (n, input) {
        while (n-->0) input = input.match(/(\d)\1*/g).reduce(function(r, v) {
          return r + v.length + v[0];
        }, '');
        return input.length;
      }
    ;

  return {

    one: fn(40, input),

    two: fn(50, input)

  };

};
