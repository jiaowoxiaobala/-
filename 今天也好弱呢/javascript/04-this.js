this的指向是在调用时决定的,而不是创建时决定的,分以下几种情况

1-默认绑定
独立函数调用,可以把默认绑定看作是无法应用其他规则时的默认规则,this指向全局对象(浏览器中是window)

2-隐式绑定
当函数引用有上下文对象时(即函数作为引用属性被添加到对象中),this指向这个上下文对象

3-显式绑定
通过call或apply,bind方法,this指向这个绑定的对象(第一个参数)

4-new绑定
this被绑定到正在构造的实例对象

5-箭头函数绑定
箭头函数没有this,箭头函数会捕获其所在上下文的this值,作为自己的this值

显式绑定this指向时,如果传入一个原始值来当作this的绑定对象,这个原始值会被转换成它的对象形式
const output = () => {
  console.log(this.name)
}

const bol = true
output.call(bol); // undefined