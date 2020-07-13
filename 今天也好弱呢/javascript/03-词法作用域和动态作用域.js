作用域是指程序源代码中定义变量的区域
作用域规定了如何查找变量,也就是确定当前执行代码对变量的访问权限
javaScript采用词法作用域,也就是静态作用域

词法作用域:
  函数的作用域在函数定义的时候就决定了
动态作用域:
  函数的作用域是在函数调用的时候才决定的

var value = 1;
function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar(); // 1