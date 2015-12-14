var _  = require('underscore')
  , fs = require('fs')
  ;

module.exports = function () {

  var keys  = []
    , input = fs.readFileSync('input.txt', 'utf8').split('\n').reduce(function (map, v) {
        _.contains(keys, (v = v.replace('.', '').split(' '))[0]) || keys.push(v[0]);
        return map[v[0] + v[10]] = (v[2] === 'lose') ? -v[3] : +v[3], map;
      }, {})
    , i     = function (a, b) { return (input[a + b] || 0) + input[b + a] || 0; }
    , sit   = function (keys) { return _.max(_.flatten(loop(keys[0], keys[0], keys.slice(1), 0))); }
    , loop  = function (from, start, keys, sum, d) {
        return _.map(keys, function (key) {
          return _.size(d = _.difference(keys, [key])) ? loop(key, start, d, sum + i(key, from)) : sum + i(key, from) + i(key, start);
        });
      }
    ;

  return {

    one: sit(keys),

    two: sit(['Me'].concat(keys))

  };

};
