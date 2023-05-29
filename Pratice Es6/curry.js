/**
 * @param {Function} fn
 * @return {Function}
 * The term for this technique in JavaScript is called "currying".
 * Currying is a functional programming technique that allows you to transform a function that takes multiple arguments into a series of functions that each take a single argument.
 * This makes it easier to create specialized functions from a general function by partially applying its arguments.
 * In JavaScript, you can implement currying using higher-order functions such as curry function in the example code.
 * Currying is a powerful technique that is widely used in functional programming and can be very useful for creating reusable and composable code.
 *
 */
let curry = function (fn) {
  var res = [];
  return function curried(...args) {
    res.push(...args);
    if (res.length < fn.length) {
      return curried;
    }
    return fn(...res);
  };
};

function sum(a, b, c) {
  console.log("object");
  return a + b + c;
}
const csum = curry(sum);
console.log(csum(1)(2)(3));

/**
 * Partial Application:
 * Partial application is a technique that allows you to fix some of the arguments of a function and create a new function that takes fewer arguments.
 * This can be achieved using currying by applying some of the arguments to the curried function,
 * which returns a new function that takes the remaining arguments. Here's an example:
 */
function multiply(a, b) {
  console.log(a, b);
  return a * b;
}

const double = multiply.bind(null, 2); // partially apply the first argument

console.log(double(3)); // output: 6
/**
 * Composition:
 * In this example, we create a new function called double by partially applying the multiply function with the value 2 using the bind method.
 * The resulting function takes a single argument b and multiplies it by 2, effectively doubling its value.
 * Function composition is a technique that allows you to combine multiple functions into a single function.
 * This can be achieved using currying by composing the functions using function composition operators such as compose or pipe.
 * Here's an example:
 */

function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}
/**
 *
 * @param  {...any} fns
 * @returns
 * This compose function takes any number of functions as arguments and returns a new function that applies the functions from right to left.
 */
function compose(...fns) {
  return function (x) {
    return fns.reduceRight(function (acc, fn) {
      return fn(acc);
    }, x);
  };
}
const addAndSquare = compose(add, square);

console.log(addAndSquare(2, 3)); // output: 25
/**
 * In this example, we create a new function called addAndSquare by composing the square function with the add function using the compose function.
 * The resulting function takes two arguments a and b, adds them together using the add function, and
 * then squares the result using the square function.
 */

var compose2 = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const fn = compose2([(x) => x + 1, (x) => 2 * x]);
console.log("compose2", fn(4)); // 9
