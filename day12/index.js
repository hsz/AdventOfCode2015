var _  = require('underscore')
  , fs = require('fs')
  ;

module.exports = function () {

  var input  = fs.readFileSync('input.txt', 'utf8')
    , sum    = function (s, v) { return s + (+v || 0); }
    , nonRed = function (v) { return !_.isArray(v) && _.contains(v, 'red') ? 0 : (!_.isObject(v) ? v : _.flatten(_.map(v, nonRed))); }
    ;

  return {

    one: _.reduce(input.match(/-?\d+/g), sum, 0),

    two: _.reduce(nonRed(JSON.parse(input)), sum, 0)

  };

};
