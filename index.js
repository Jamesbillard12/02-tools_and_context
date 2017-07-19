'use strict';

const fp = require('/Users/jamesrbillard/programs/code_fellows/code_401/lab-james/02-tools_and_context/lib/fp.js');


var toCapsTerminal = () => {
  let toCaps = fp.map(process.argv, (n) => {
    toCaps.splice(0,2);
    return n.toUpperCase()
  });
  console.log(`this is just dog ${toCaps}`);
};

toCapsTerminal()
