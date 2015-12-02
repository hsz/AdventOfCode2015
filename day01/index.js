var _ = require('underscore')
  , fs = require('fs')
  , path = require('path')
  ;

module.exports = function () {

  var input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('');

  var part = {

    one: _.reduce(input, function (floor, v) {
      return floor + (+(v === '(') || -1);
    }, 0),

    two: _.findIndex(input, function (v) {
      return -1 === (this.floor += +(v === '(') || -1) + 1;
    }, {floor: 0})

  };

  console.log('part one:', part.one);
  console.log('part two:', part.two);

};
