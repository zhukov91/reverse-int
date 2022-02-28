module.exports = function reverse (count) {
  return Math.abs(count).toString().split('').reverse().join('');
}
