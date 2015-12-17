'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var n     = 100
    , input = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) { return v.match(/-?\d+/g); })
    , comb  = function* (k, m, v, nm) {
        k--, nm = [], m = m || _.range(n + 1);
        for (let i of m) if (k !== 1) for (let j = 0; j <= n - _.sum(i); ++j) nm.push([j].concat(i)); else yield [n - _.sum(i)].concat(i);
        k && (yield * comb(k, nm));
      }
    , fn    = function* (cal) {
        for (const c of comb(_.size(input))) {
          var sums = [0, 0, 0, 0, 0];
          _.each(input, function (v, k) { for (let i = 0; i < 5; ++i) sums[i] += +v[i] * c[k]; });
          (!cal || cal == sums[4]) && (yield _.initial(sums).reduce(function (s, v) { return s * (v < 0 ? 0 : v); }, 1));
        }
      }
    ;

  return {

    one: _.max(Array.from(fn())),

    two: _.max(Array.from(fn(500)))

  };

};
