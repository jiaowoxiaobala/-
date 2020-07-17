// new操作符的原理:
// 1.创建一个空对象
// 2.将这个空对象的__protp__属性指向这个构造函数的prototype对象
// 3.将构造函数的this指向这个空对象,并执行构造函数
// 4.如果构造函数没有返回对象类型,那么将返回这个新对象

function myNew() {
  // 创建一个空对象
  const obj = {};
  // 去除传入的函数fn及参数
  const [cons, ...args] = [...arguments];
  // 执行原型链接
  obj.__proto__ = cons.prototype;
  // 改变函数内部的this指向,并执行函数
  const res = cons.apply(obj, args);
  // 判断返回值类型
  return res instanceof Object ? res : obj;
}