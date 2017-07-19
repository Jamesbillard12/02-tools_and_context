'use strict';

const expect = require('chai').expect;
const main = require('../index.js');

describe('main', () => {var oldArgv = process.argv;
  before(() => {
    process.argv = [
      'node path',
      'file path',
      'cat',
      'dog',
    ];
  });

  after(() => {
    process.argv = oldArgv;
  });

  it('should return \'CAT DOG\'', () => {
    let result = main();
    expect(result).to.be.a('string').to.have.string('CAT DOG');
  });
});
