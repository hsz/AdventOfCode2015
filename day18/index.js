'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var I = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
        return v.split('').map(function (v) { return v == '#'; });
      })
    , on, n = _.size(I) - 1
    , fn    = function (I, steps, rule) {
        var x, y, i = function (x, y) { return !!(I[y] || [])[x]; }, NI = _.cloneDeep(I);
        for (y = 0; y <= n; ++y) for (x = 0; x <= n; ++x) {
          let c = _.sum([i(x-1,y-1), i(x-1,y), i(x-1,y+1), i(x,y-1), i(x,y+1), i(x+1,y-1), i(x+1,y), i(x+1,y+1)]);
          NI[y][x] = rule(c, I[y][x], (!x || x == n) && (!y || y == n));
        } return --steps ? fn(NI, steps, rule) : _.sum(_.flatten(NI));
      }
    ;

  return {

    one: fn(I, 100, on = function (c, v) {
      return (c == 3) || (c == 2 && v);
    }),

    two: fn((I[0][0] = I[0][n] = I[n][0] = I[n][n] = true, I), 100, function (c, v, cor) {
      return cor || on(c, v);
    })

  };

};
