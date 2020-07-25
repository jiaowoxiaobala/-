// map本质上是键值对的集合,与对象的区别是各种类型的值(包括对象)都可以
// 当作键

// 通过set方法可以给map对象的键赋值,对同一个键的多次赋值,后面的会覆盖前面
// set方法设置键名key对应的键值value,然后返回整个map结构,所以可以链式调用
const map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
console.log(map.get(1));

// 如果读取的值不存在,则返回undefined
console.log(map.get(2));

// 只有同一个对象的引用,map结构才将其视为同一个键
// map的键实际上是跟内存地址绑定的,只要内存地址不一样,就视为两个键
map.set(['a'], 555);
console.log(map.get(['a']));

// size属性,返回map结构的成员总数
console.log(map.size);

// has方法返回一个布尔值,表示某个键是否在当前map对象中
console.log(map.has(1));

// delete方法删除某个键,删除成功返回true,失败则返回false

// clear方法清除所有成员,没有返回值
