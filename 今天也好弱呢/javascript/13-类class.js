// 属性表达式-类的属性名可以采用表达式
let methodName = 'getArea';
class Square {
  [methodName]() {
    console.log('触发了...')
  }
}

// 类表达式-与函数一样,类也可以使用表达式的形式定义
let person = new class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}('xiaoba');

person.sayName();

// 静态方法-类相当于实例的原型,所有在类中定义的方法,都会被实例继承,如果在一个方法
// 前加上static关键字,就表示该方法不会被实例继承,而是直接通过类来调用
class Foo {
  static classMethod() {
    console.log('my name is xiaoba');
  }
  classMethod() {
    console.log('i am 23 years old')
  }
}
Foo.classMethod();
const foo = new Foo();
foo.classMethod();
// 静态方法中的this指向类,静态方法可与非静态方法重名
// 父类的静态方法可以被子类继承

// 类的继承
class Point {}
class ColorPoint extends Point {
  constructor(x, y, color) {
    // 相当于Point.prototype.constructor.call(this, x, y);
    super(x, y);
    this.color = color
  }
  toString() {
    super.toString
  }
}

// super的调用分两种情况
//  -1.作为函数调用(只能在子类的constructor中),指向父类的构造函数
//  -2.作为对象调用,在静态方法中,指向父类,在普通方法中,指向的是父类
// 的原型对象
class A {
  p() {
    console.log('a');
  }
  static sayName() {
    console.log('xiaoba~')
  }
}

class B extends A {
  // 普通方法中指向父类的原型对象
  // 相当于 A.prototype.p()
  // 注意: 由于此时super指向父类的原型对象,所以定义在父类实例上的方法或属性,无法访问到
  constructor() {
    super();
    super.p();
  }
  // 静态方法中指向父类
  // 相当于A.sayName()
  static say() {
    super.sayName();
  }
}
new B();
B.say();

// 类的prototype和__proto__属性
// 子类的__proto__属性,表示构造函数的继承,总是指向父类
// 子类的prototype属性的__proto__属性,表示方法的继承,总是指向父类的prototype属性