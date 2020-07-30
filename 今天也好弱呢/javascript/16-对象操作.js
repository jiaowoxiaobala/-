// 1.对象变量属性
let flag = true
let obj1 = {
  a: 0,
  [flag ? 'b' : 'c']: 1
}
console.log(obj1)

// 2.对象多余属性删除
let { name, age, ...obj } = {
  name: 'xiaoba',
  age: 22,
  des: '描述',
  info: '信息'
}
console.log(obj) // { des: '描述', info: '信息' }

// 3.解构对象属性别名
let { name: newName } = { name: 'xiaoba', age: 22 }

// 4.解构对象属性默认值
let { des = '这是默认值' } = { name: 'xiaoba' }

// 5.对象嵌套属性解构-小程序常用
let {
  info: { dec }
} = { name: 'xiaoba', info: { dec: '描述', info: '信息' } }
console.log(dec)

// 6.获取对象的属性
const person = {
  name: 'xiaoba',
  age: 22
}
console.log(Object.keys(person));

// 7.获取对象的属性值
console.log(Object.values(person));
