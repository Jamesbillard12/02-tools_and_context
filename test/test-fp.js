'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('fp', () => {
  describe('#map', () => {
    it('should throw array not provided error', () => {
      let mapArrErr = fp.map;
      expect(mapArrErr).to.throw(Error);
    })
    it('should return an array with doubled numbers', () => {
      let validMap = fp.map([1,2,3,4], (n) => { return n * 2 });
      expect(validMap).to.be.an('array').that.includes.members([2,4,6,8]);
    })
  })
  describe('#filter', () =>{
    it('should throw array not provided error', () => {
      let filterArrErr = fp.map;
      expect(filterArrErr).to.throw(Error);
    })
    it('should return an array that is missing the number 2', () => {
      let validFilter = filter([1, 2, 3, 4], function(n) { return n !== 2 });
      expect(validFilter)
    })
  })
})
