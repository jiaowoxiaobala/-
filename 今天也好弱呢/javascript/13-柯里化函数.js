// 柯里化: 将多个参数的函数转换成一系列使用一个参数的函数
// 思路: 用闭包把参数保存起来,当参数的数量足够执行函数了,就开始执行函数

function curry(fn, args) {
  // 把传入函数的形参个数保存到变量len里
  const len = fn.length;
  // 声明一个数组,用来保存之后调用时传入的参数
  let args = args || []
  return function() {
    // 每次调用时都把传入的参数和之前保存的参数合并
    let newArgs = args.concat([].slice.call(arguments));
    // 当这个数组的长度小于len时,继续调用
    if (newArgs.length < len) {
      return curry.call(this, fn, newArgs);
    } 
    // 当这个数组的长度不小于len时,证明收集的参数足够执行函数了
    return fn.apply(this, newArgs);
  }
}