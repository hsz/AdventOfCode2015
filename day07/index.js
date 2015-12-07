var _  = require('underscore')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('\n').reduce(function (map, v) {
        v = _.object(['dest', 'b', 'op', 'a'], v.replace(/ /g, '').match(/(?:([a-z]+|\d+)?([A-Z]+))?([a-z]+|\d+)->([a-z]+)/).slice(1).reverse());
        return (map[v.dest] = v, map);
      }, {})
    , asmbl = function (map) {
        while (_.filter(map, function (x) {
          return _.isObject(x);
        }).length) {
          _.map(map, function (v) {
            if (_.isObject(v) && !_.isObject(map[v.a]) && !_.isObject(map[v.b])) {
              var a = map[v.a] === undefined ? v.a : map[v.a]
                , b = map[v.b] === undefined ? v.b : map[v.b];

              map[v.dest] = v.op === 'AND' ? a & b : (v.op === 'OR' ? a | b : (v.op === 'LSHIFT' ? a << b : (v.op === 'RSHIFT' ? a >> b : (v.op === 'NOT' ? 65535 - b : b))));
            }
          });
        }
        return map.a;
      }
    ;

  return {

    one: asmbl(_.clone(input)),

    two: asmbl(_.extend(_.clone(input), {b: asmbl(_.clone(input))}))

  };

};
