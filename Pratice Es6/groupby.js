/**
 * @param {Function} fn
 * @return {Array}
 * Hint 1 :- First declare an object that will eventually be returned.
 * Hint 2 :- Iterate of each element in the array. You can access the array with the "this" keyword.
 * Hint 3 :- The key is fn(arr[i]). If the key already exists on the object, set the value to be an empty array. Then push the value onto the array at the key.
 */
/**
Array.prototype.groupBy = function (fn) {
  const ans = {};
  for (let e of this) {
    const key = fn(e);
    ans[key] ||= [];
    ans[key].push(e);
  }
  return ans;
};
 */

Array.prototype.groupBy = function (fn) {
  const ans = {};
  for (const e of this) {
    const key = fn(e);
    if (!ans.hasOwnProperty(key)) {
      ans[key] = [];
    }
    ans[key].push(e);
  }
  return ans;
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
console.log([2, 4, 6, 8, 10].groupBy((x) => x % 3)); // { '0': [ 6 ], '1': [ 4, 10 ], '2': [ 2, 8 ] }
