'use strict';

const fp = require('../02-tools_and_context/lib/fp.js');


var toCapsTerminal = () => {
  let toCaps = fp.map(process.argv, (n) => {
    return n.toUpperCase()
  });
  toCaps.splice(0,2);
  console.log(toCaps);
};

toCapsTerminal()
