// call、apply、bind三者异同
// 1.三者都是用来改变函数的this指向
// 2.三者的第一个参数都是this指向的对象
// 3.bind是返回一个绑定函数可稍后执行,call和apply是立即调用
// 4.三者都可以给定参数传递
// 5.call给定参数需要将参数全部列出,apply给定参数数组

Function.prototype.bind = function(content) {
  // 保存调用bind方法的这个函数
  const self = this;
  // 保存第一次调用时传入的参数(content除外)
  const args = [].prototype.slice.call(arguments, 1);
  function bindNew() {
    // 保存第二次传入的参数
    const argsNew = [].prototype.slice.call(arguments);
    return self.apply(this instanceof bindNew ? this : content, [...args, ...argsNew]);
  }
  bindNew.prototype = Object.create(self.prototype);
  return bindNew;
}