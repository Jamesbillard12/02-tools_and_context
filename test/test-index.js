'use strict';

const expect = require('expect');
const main = require('../index.js');

describe('testing main', () => {

  var oldArgv = process.argv;
  before(() => {
    process.argv = [
      'node path',
      'file path',
      'hello',
      'world',
    ];
  });

  after(() => {
    process.argv = oldArgv;
  });

  it('should return \'HELLO WORLD\'', () => {
    let result = main();
    expect(result).toBe('HELLO WORLD');
  });
});
