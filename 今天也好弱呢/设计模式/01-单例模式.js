// 概念:保证一个类只有一个实例,并提供一个访问它的全局访问点
// 思路: 用一个变量来标志当前是否已经为某个类创建过对象,如果是下一次获取该类的
// 实例时,直接返回之前创建的对象

// 使用场景: 
//  -当一个类的实例化过程中消耗的资源过多,可以使用单例模式来避免性能浪费
//  -当项目中需要一个公共的状态,那么可以使用单例模式来保证访问一致性

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

function getSingle (FunClass) {
  let instance = null
  // 拦截FunClass的new操作
  return new Proxy(FunClass, {
    // args是一个参数数组
    construct (target, args) {
      // 如果instance存在则返回,否则给instance赋值后返回new FunClass()
      // return instance || (instance = new FunClass(...args))
      // proxy最好配置Reflect使用
      return instance || (instance = Reflect.construct(FunClass, args));
    }
  })
}

const instance = getSingle(Person)
const p1 = new instance('xiaoba', 23);
const p2 = new instance('xiaoba', 23);
console.log(p1 === p2); // true


// 扩展
// Reflect.constructor提供了一种不使用new来调用构造函数的方法
function People(name) {
  this.name = name;
}

// new的写法
const p3 = new People('xiaoba');

// Reflect.constructor的写法
const p4 = Reflect.construct(People, ['xiaoba']);