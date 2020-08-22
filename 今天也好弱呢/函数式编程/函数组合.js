// 概念: 将函数串联起来执行,将多个函数组合起来,一个函数的输出结果是另一个
// 函数的输入参数

// 翻转字符串
function reverseStr(str) {
  return str.split('').reverse().join('');
}

// 字符串转为大写
function toUpper(str) {
  return str.toUpperCase();
}

// 函数组合
function compose(...args) {
  return function(prop) {
    return args.reduceRight((res, cb) => {
      return cb(res);
    }, prop)
  }
}

const com = compose(toUpper, reverseStr);
console.log(com('abcdefg'));