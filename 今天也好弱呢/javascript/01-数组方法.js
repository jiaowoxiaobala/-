// concat 合并两个或多个数组,此方法不会更改现有数组,而是返回一个新数组
const arr = [1, 2, 3];
// 如果不传递参数会返回调用此方法的现存数组的浅拷贝
const arr1 = arr.concat();
// 不一定要传入数组
console.log(arr.concat(4)) // [1, 2, 3, 4]
console.log(arr1 == arr); // false

// every 判断数组中每一项是否满足条件,只有所有项都满足条件,才会返回true
console.log(arr.every(item => item > 0)); // true

// fill 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素,不包括终止索引
console.log(arr.fill(0)); // [0, 0, 0]

// filter 创建一个新数组,包含通过所提供函数实现测试的所有元素
// 去除数组中的假值
console.log(arr.filter(Boolean)); // []

// find 返回数组中满足提供测试函数的第一个元素的值,否则返回unudefined

// findIndex 返回数组中满足提供测试函数的第一个元素的索引,否则返回-1

// includes和indexOf效果类型,判断数组中是否存在某个元素

// jion 将一个数组的所有元素连接成一个字符串并返回这个字符串
// 如果不传递参数则用,号连接
// 传入空串则元素之间没有连接符
console.log(arr.join('')); // 000

// map 创建一个新数组,其结果是该数组中的每个元素调用一次提供函数后的返回值

// reverse 反转数组

// slice(begin, end) 返回一个新的数组对象,这个对象是一个由begin和end决定的原数组的浅拷贝,不包括end

// splice 通过删除或替换现有元素或者原地添加新的元素来修改数组