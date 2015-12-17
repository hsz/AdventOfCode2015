'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var eggnog = 150
    , input  = fs.readFileSync('input.txt', 'utf8').split('\n').map(_.parseInt)
    , data   = Array.from((function* conts(a, r, nr) {
        for (let k in a) (_.sum(nr = r.concat(a[k])) === eggnog) ? (yield nr) : (_.sum(nr) < eggnog) && (yield * conts(a.slice(+k + 1), nr));
      })(input, []))
    ;

  return {

    one: data.length,

    two: _.compact(_.reduce(data, function (o, v) { return o[_.size(v)] = (o[_.size(v)] || 0) + 1, o; }, []))[0]

  };

};
