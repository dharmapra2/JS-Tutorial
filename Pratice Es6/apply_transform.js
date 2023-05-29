const arr = [1, 2, 3];
const fn = function plusone(n, i) {
  return n + i;
};
// Approach 1
var map2 = function (arr, fn) {
  return arr.reduce((acc, it, idx) => {
    return [...acc, fn(it, idx)];
  }, []);
};

// Approach 2
var map1 = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

console.log(map2(arr, fn));
