'use strict';

const fp = require('../02-tools_and_context/lib/fp.js');

var toCapsTerminal = (word) => {
  var words = word
  var toCaps = fp.map(process.argv = 5, (val, index) => {
    return val
  });
  toCaps.splice(0, 2, words);
  toCaps = fp.map(toCaps, (n) => {
    toCaps = n.toUpperCase();
    console.log(toCaps);
    return toCaps
  })
  console.log(toCaps);
};

toCapsTerminal('dog')
