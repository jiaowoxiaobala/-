// 思路: 
// 1.将函数设为对象的属性
// 2.执行该函数
// 3.删除该函数

Function.prototype.call = function(content) {
  // 防止传入原始值或者null等情况
  var content = Object(content) || window;
  // 定义一个变量接收与函数fn同名的属性
  var saveFn;
  // 定义一个空数组接收参数(除content以外的参数)
  var arr = [];
  if (content.fn) {
    saveFn = content.fn;
  }
  content.fn = this;
  for (var i = 1; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  var result = eval('content.fn(' + arr + ')');
  if (saveFn) {
    content.fn = saveFn
  } else {
    delete content.fn;
  }
  return result;
}

// es6版call和apply
Function.prototype.call = function(content, ...args) {
  const content = Object(content) || window;
  // symbol值的唯一性
  const fn = Symbol('fn');
  content[fn] = this;
  const result = content[fn](...args);
  delete content.fn;
  return result;
}

Function.prototype.apply = function(content, ...args) {
  const content = Object(content) || window;
  const fn = Symbol('fn');
  content[fn] = this;
  const result; 
  if (args) {
    result = content[fn](...args);
  } else {
    result = content[fn]();
  }
  delete content.fn;
  return result;
}