/**
 * @param {Function} fn
 */
function memoize(fn) {
  const m = new Map();
  console.log(m);
  return function (...args) {
    const k = JSON.stringify(args);
    if (m.has(k)) {
      return m.get(k);
    }
    const res = fn(...args);
    m.set(k, res);
    return res;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3);
memoizedFn(2, 3);
memoizedFn(1, 3);
memoizedFn(1, 3);
memoizedFn(1, 3);
memoizedFn(1, 3);
memoizedFn(1, 3);
console.log(callCount);
