// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

// 节流
function throttle(fn, delay) {
  let flag = true;
  return function(...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        fn.apply(this, args);
        flag = true;
      }, delay)
    }
  }
}

// 另一个版本
function throttle(fn, delay) {
  let last = +new Date();
  return function(...args) {
    let now = +new Date();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  }
}