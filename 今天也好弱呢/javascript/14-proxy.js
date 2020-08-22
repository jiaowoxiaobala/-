// proxy: 可以理解成,在目标对象之前架设一层拦截,外界对该对象的访问都
// 必须先通过这层拦截(与defineProperty相比,前者代理整个对象,后者代理
// 对象某个属性)

// const proxy = new Proxy(target, handler);
// target: 表示所要拦截的目标对象
// handler: 也是一个对象,用来定制拦截行为

const person = {
  name: 'xiaoba',
  age: 23
}

const obj = new Proxy(person, {
  // 拦截属性读取
  get: function(target, propkey) {
    if (propkey === 'name') {
      console.log('名字被获取了')
    }
  },
  // 拦截in操作
  has(target, propkey) {
    console.log('使用了in')
  }
});

obj.name;
'age' in obj;
// 注意: 操作的是Proxy构造函数返回的实例对象

function getPerson() {

}

const Person = new Proxy(getPerson, {
  // 拦截构造函数调用, 必须在construct中返回对象,否则报错
  construct(target, args) {
    console.log('使用了new调用')
    return {};
  }
})

new Person();