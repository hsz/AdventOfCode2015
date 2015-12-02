var _    = require('underscore')
  , fs   = require('fs')
  , path = require('path')
  ;

module.exports = function () {

  var input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8').split('\n').map(function (v) {
    return _.sortBy(v.split('x').map(_.partial(parseInt, _, 10)));
  });

  return {

    one: _.reduce(input, function (sum, v) {
      return sum + 3 * v[0] * v[1] + 2 * v[0] * v[2] + 2 * v[1] * v[2];
    }, 0),

    two: _.reduce(input, function (sum, v) {
      return sum + 2 * v[0] + 2 * v[1] + v[0] * v[1] * v[2];
    }, 0)

  };

};
