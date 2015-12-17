var _  = require('lodash')
  , fs = require('fs')
  ;

module.exports = function () {

  var tape  = { children: 3, cats: 7, samoyeds: 2, pomeranians: 3, akitas: 0, vizslas: 0, goldfish: 5, trees: 3, cars: 2, perfumes: 1 }
    , input = fs.readFileSync('input.txt', 'utf8').split('\n').map(function (v) {
        return _.object(v.match(/\b[a-z]+/g), _.rest(v.match(/\d+/g)).map(_.parseInt));
      })
    ;

  return {

    one: _.findIndex(input, function (v) {
      return _.eq(_.pick(tape, _.keys(v)), v);
    }) + 1,

    two: _.findIndex(input, function (v) {
      return _.eq(a = _.omit(v, ['cats', 'trees', 'pomeranians', 'goldfish']), _.pick(tape, _.keys(a)))
        && (!v.cats || v.cats > tape.cats) && (!v.trees || v.trees > tape.trees)
        && (!v.pomeranians || v.pomeranians < tape.pomeranians) && (!v.goldfish || v.goldfish < tape.goldfish);
    }) + 1

  };

};
