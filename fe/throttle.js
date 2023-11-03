// 节流。事件被触发时，在n秒后执行函数，在n秒内多次触发事件，则只执行一次

function throttle(fn, delay) {
  let timer
  return function() {
    if (!timer) {
      fn.apply(this, arguments)
      setTimeout(() => {
        clearTimeout(timer)
        timer = null
      }, delay);
    }
  }
}