export default {}

class Point {
  public x: number
  public y: number
  constructor(x: number, y:number) {
    this.x = x;
    this.y = y;
  }
  public getPosition() {
    return `(${this.x}, ${this.y})`
  }
}

class Parent {
  public name: string
  constructor(name: string) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name: string) {
    super(name);
  }
}

// public 修饰的属性或方法是公有的,可以在任何地方被访问到,默认所有的属性和方法都是public的
// private 修饰的属性或方法是私有的,不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的,和private类型,区别是它在字类中也是允许被访问

class UserInfo {
  // 设置只读属性
  public readonly name: string
  constructor(name: string) {
    this.name = name;
  }
}
const userinfo = new UserInfo('xiaoba');
// userinfo.name = 'xiaojiu';

class Person {
  public static getAge() {
    return Person.age;
  }
  // 私有的静态属性
  private static age: number = 18;
}
// 私有属性只能在类中访问
// Person.age

interface FoodInterface {
  type: string
}
class FoodClass implements FoodInterface {
  public type: string
}
// ES6中实例的属性只能通过构造函数中的this.xxx来定义,在ts中可以直接在类里面定义
class Animal {
  name = 'xiaohei'
  constructor() {

  }
}
const a = new Animal();
console.log(a.name); // xiaohei

// 参数属性
// 修饰符和readonly还可以在构造函数参数中,等同于类中定义该属性同时给该属性赋值
class Animal1 {
  // public name
  public constructor(public name) {
    // this.name = name
  }
}