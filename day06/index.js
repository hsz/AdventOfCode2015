'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
        return [v.indexOf('turn on') === 0 ? true : (v.indexOf('turn off') === 0 ? false : null)].concat(v.match(/\d+/g).map(function (n) {
          return +n;
        }));
      })
    , light = function (cb) {
        var grid = [];
        return _.reduce(input, function (sum, v) {
          for (var x = v[1]; x <= v[3]; x++) for (var k, y = v[2]; y <= v[4]; y++)
            ((grid[k = x * 1000 + y] = cb(v[0], grid[k] || 0)) < 0) && (grid[k] = 0);
          return _.chain(grid).filter().sum();
        }, []);
      }
    ;

  return {

    one: light(function (v, c) {
      return v === null ? !c : v;
    }),

    two: light(function (v, c) {
      return c + (v === null ? 2 : (+v || -1));
    })

  };

};
