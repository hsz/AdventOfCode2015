var _  = require('underscore')
  , fs = require('fs')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8').split('');

  return {

    one: _.reduce(input, function (floor, v) {
      return floor + (+(v === '(') || -1);
    }, 0),

    two: _.findIndex(input, function (v) {
      return -1 === (this.floor += +(v === '(') || -1);
    }, {floor: 0}) + 1

  };

};
