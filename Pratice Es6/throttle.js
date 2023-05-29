/**
 * to read throttle follow links
 * https://codedamn.com/news/javascript/throttling-in-javascript
 * https://lodash.com/docs/4.17.15#throttle
 * 
 * https://leetcode.com/problems/allow-one-function-call/editorial/
 * 
 * Creates a throttled function that only invokes func at most once per every wait milliseconds. 
 * The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. 
 * Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. 
 * The func is invoked with the last arguments provided to the throttled function. 
 * Subsequent calls to the throttled function return the result of the last func invocation.
 * 
 * 
 * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the throttled function is invoked more than once during the wait timeout.
 * If wait is 0 and leading is false, func invocation is deferred until to the next tick, similar to setTimeout with a timeout of 0.
 */

function throttle(cb, delay) {
  let wait = false;
  let storedArgs = null;

  function checkStoredArgs() {
    if (storedArgs == null) {
      wait = false;
    } else {
      cb(...storedArgs);
      storedArgs = null;
      setTimeout(checkStoredArgs, delay);
    }
  }

  return (...args) => {
    if (wait) {
      storedArgs = args;
      return;
    }

    cb(...args);
    wait = true;
    setTimeout(checkStoredArgs, delay);
  };
}
throttle()