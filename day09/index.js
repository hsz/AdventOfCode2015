'use strict';
var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var input  = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
        return v.replace(/ (to|=)/g, '').split(' ');
      })
    , on, fn = function (keys, key, sum) {
        keys = keys ? keys : _.unique(_.pluck(input, 0).concat(_.pluck(input, 1)));
        return keys.length ? _.flatten(_.map(keys, function (v, k) {
          return fn(keys.slice(0, k).concat(keys.slice(k + 1, keys.length)), v, (sum || 0) + +(_.find(input, function (o) {
              return _.intersection([o[0], o[1]], [key, v]).length === 2;
            }) || [])[2]);
        })) : sum;
      }
    ;

  return {

    one: _.min(on = fn()),

    two: _.max(on)

  };

};
