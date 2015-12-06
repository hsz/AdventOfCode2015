var md5 = require('md5');

module.exports = function () {

  var i     = 0
    , input = 'bgvyzdsv'
    , z     = function (n) {
        while (!new RegExp('^0{' + n + '}').test(md5(input + ++i)));
        return i;
      };

  return {

    one: z(5),
    two: z(6)

  };

};
