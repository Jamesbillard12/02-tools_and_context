'use strict';

module.exports = exports = {};

exports.map = (arr, callback) => {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.map.call(arr, callback);
};

exports.filter = (arr, callback) => {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.filter.call(arr, callback);
}

exports.concat = (arr1, arr2) => {
  if (!arr1) throw new Error('initial array not provided');
  return Array.prototype.concat.apply(arr1, arr2);
};

exports.reduce = (arr, idx, callback) => {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.reduce.call(arr, idx, callback);
};
