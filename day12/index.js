'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var input  = fs.readFileSync('input.txt', 'utf8')
    , nonRed = function (v) { return !_.isArray(v) && _.contains(v, 'red') ? 0 : (!_.isObject(v) ? v : _.flatten(_.map(v, nonRed))); }
    ;

  return {

    one: _.sum(input.match(/-?\d+/g)),

    two: _.sum(nonRed(JSON.parse(input)))

  };

};
