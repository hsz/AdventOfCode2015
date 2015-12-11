var _     = require('underscore')
  , fs    = require('fs')
  , slang = require('slang')
  ;

module.exports = function () {

  var input = fs.readFileSync('input.txt', 'utf8')
    , abc   = new RegExp(_(24).times(function (n) { return String.fromCharCode(n + 97, n + 98, n + 99); }).join('|'))
    , fn    = function () {
        while (input = slang.successor(input), /[iol]/.test(input) || _.size(input.match(/(.)\1/g)) < 2 || !abc.test(input));
      }
    ;

  return {

    one: fn() || input,

    two: fn() || input

  };

};
