var md5 = require('md5');

module.exports = function () {

  var i = 0, input = 'bgvyzdsv';

  return {

    one: (function () {
      while (!/^0{5}/.test(md5(input + ++i)));
      return i;
    }()),

    two: (function () {
      while (!/^0{6}/.test(md5(input + ++i)));
      return i;
    }())

  };

};
