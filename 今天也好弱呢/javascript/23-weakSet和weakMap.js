WeakSet结构与Set类似,也是不重复值的集合,其特点如下
  -成员只能是对象
  -weakSet中的对象都是弱引用(垃圾回收机制不考虑weakSet对该对象的引用)

weakMap结构与Map结构类似,也是用于生成键值对的集合,其特点如下
  -键名只接受对象作为键名(null除外)
  -键名所指向的对象,不计入垃圾回收机制(弱引用)

// 使用场景:
const e1 = document.querySelector('foo');
const e2 = document.querySelector('bar');
const arr = [
  [e1, 'foo元素'],
  [e2, 'bar元素']
];
// arr中形成了对e1和e2的引用,导致一旦不再需要这两个对象,就必须手动删除这个引用
// 否则垃圾回收机制就不会释放e1和e2占用的内存(导致内存泄漏)

// 手动删除引用
arr[0] = null;
arr[1] = null;
// 这里可以使用weakMap
const weakMap = new WeakMap([
  [e1, 'foo元素'],
  [e2, 'bar元素']
])

// 注意: weakMap弱引用的只是键名,而不是键值,键值依然是正常引用
