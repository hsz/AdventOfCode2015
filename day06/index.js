var _  = require('underscore')
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
          for (var x = v[1]; x <= v[3]; x++) {
            for (var y = v[2], k = x * 1000 + y; y <= v[4]; y++) {
              (grid[k] = cb(v, grid[k] || 0)) < 0 ? grid[k] = 0 : null;
            }
          }
          return _.chain(grid).filter().reduce(function (sum, v) {
            return sum + v;
          }, 0);
        }, []);
      }
    ;

  return {

    one: light(function (v, c) {
      return v[0] === null ? !c : v[0];
    }),

    two: light(function (v, c) {
      return c + (v[0] === null ? 2 : (+v[0] || -1));
    })

  };

};
