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
      let filterArrErr = fp.filter;
      expect(filterArrErr).to.throw(Error);
    })
    it('should return an array that is missing the number 2', () => {
      let validFilter = fp.filter([1, 2, 3, 4], (n) => { return n !== 2 });
      expect(validFilter).to.be.an('array').to.not.have.members([2]);
    })
  })
  describe('#concat', () => {
    it('should throw an intial array not provided error', () => {
      let concatArrErr = fp.concat;
      expect(concatArrErr).to.throw(Error);
    })
    it('should be an array the is a combination of two arrays', () => {
      let validConcat = fp.concat([1,2,3], [4,5,6]);
      expect(validConcat).to.be.an('array').to.include.members([1,2,3,4,5,6])
    })
  })
  describe('#reduce', () =>{
    it('should throw an intial array not provided error', () => {
      let reduceArrErr = fp.concat;
      expect(reduceArrErr).to.throw(Error);
    })
    it('should reduce an array down to a single value', () => {
      let validReduce = fp.reduce([0, 1, 2, 3], (acc, n) => {return acc + n }, 0);
      expect(validReduce).to.equal(6);
    })
    it('should count amount of each name in an array and return it in an object', () => {
      var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
      var validNameReduce = fp.reduce(names, (allNames, name) => {
        if (name in allNames) {
          allNames[name]++;
        }
        else {
          allNames[name] = 1;
        }
        return allNames;
      }, {});
      expect(validNameReduce).to.be.an('object');
    })
  })
  describe('#splice', () => {
    it('should throw an intial array not provided error', () =>{
      let spliceArrErr = fp.concat;
      expect(spliceArrErr).to.throw(Error);
    })
    it('should return [6,7,8]', () => {
      let result = fp.splice([1,2,3,4,5,6,7,8], 5);
      expect(result).to.be.an('array').to.include.members([6,7,8])
    })
  })
})
