var _  = require('underscore')
  , fs = require('fs')
  ;

module.exports = function () {

  var time   = 2503
    , goDeer = function (v, t) { return (t / v[4] | 0) * v[1] * v[2] + _.min([t % v[4], v[2]]) * v[1]; }
    , input  = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
        return [(v = v.split(' '))[0], +v[3], +v[6], +v[13], +v[6] + +v[13]];
      })
    ;

  return {

    one: _.max(input.map(function (v) { return goDeer(v, time); })),

    two: _.max(_.range(1, time).reduce(function (o, t, z) {
      return (z = _.chain(input).map(function (v) { return goDeer(v, t); }))
        .each(function (v, k) { z.max().value() === v && (o[k] = (o[k] || 0) + 1); }), o;
    }, []))

  };

};
