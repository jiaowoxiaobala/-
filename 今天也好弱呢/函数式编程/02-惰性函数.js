// 概念: 函数执行的分支只会在函数第一次调用的时候执行,后续使用
// 就是这个函数执行的结果
function addEvent(element, type, handler) {
  if (window.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (window.attachEvent) {
    element.attachEvent('on' + type, handler);
  } else {
    element['on' + type] = handler;
  }
}

// 惰性函数改造
function addEvent(element, type, handler) {
  if (window.addEventListener) {
    addEvent = function(element, type, handler) {
      element.addEventListener(type, handler, false);
    }
    return
  }
  if (window.attachEvent) {
    addEvent = function(element, type, handler) {
      element.attachEvent(`on${type}`, handler);
    }
    return
  }
  addEvent = function(element, type, handler) {
    element[`on${type}`] = handler;
  }
}