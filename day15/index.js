'use strict';
var _  = require('lodash')
  , co = require('co')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
        return v.match(/-?\d+/g);
      })
    , n     = 100
    , comb  = function* (k, m, v, nm) {
        k--, nm = [], m = m || _.range(n + 1);
        for (let i of m) {
          if (k !== 1) for (let j = 0; j <= n - _.sum(i); ++j) nm.push([j].concat(i));
          else yield [n - _.sum(i)].concat(i);
        }
        k && (yield * comb(k, nm));
      }
    , fn    = function (calories) {
        var c, it = comb(_.size(input)), result = [];
        while (c = it.next(), !c.done) {
          var sums = [0, 0, 0, 0], cals = 0;
          _.map(input, function (v, k) {
            cals += +v[4] * c.value[k];
            for (let i = 0; i < 4; ++i) sums[i] += +v[i] * c.value[k];
          });
          if (calories && calories !== cals) continue;
          result.push(sums.reduce(function (s, v) { return s * (v < 0 ? 0 : v); }, 1));
        }
        return _.max(result);
      }
    ;

  return {

    one: fn(),

    two: fn(500)

  };

};
