'use strict';

module.exports = exports = {};

exports.map = (arr, callback) => {
  if (!arr) throw new Error('array not provided');
  return Array.prototype.map.call(arr, callback);
}
