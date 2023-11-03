// 防抖。事件被触发时，在n秒后执行函数，在n秒内多次触发事件，则重新开始计时

function debounce(fn, delay) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}