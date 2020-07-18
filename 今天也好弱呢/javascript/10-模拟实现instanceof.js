// instanceof运算符用于检测构造函数的prototypr属性是否在某个实例对象的
// 原型链上
// 思路: 循环取出left的__proto__属性去对比right的prototype属性

function myInstanceOf(left, right) {
  // 基本数据类型直接返回false
  if (typeof left !== 'object' || left === null) {
    return false
  }
  // 去除对象left的__proto__属性
  let proto = Object.getPrototypeOf(left);
  while(true) {
    // 等于null说明找到了原型链的顶端
    if (proto === null) {
      return false;
    }
    if (proto === right.prototype) {
      return true;
    }
    // 继续取出proto的__proto__属性(原型链向上查找)
    proto = Object.getPrototypeOf(proto);
  }
}