'use strict';

const fp = require('./lib/fp.js');

let main = module.exports = () => {
  let list = fp.splice(process.argv, 2);
  list = fp.map(list, (word) => word.toUpperCase());
  let result = list.join(' ');
  console.log(result);
  return result;
};

main();
