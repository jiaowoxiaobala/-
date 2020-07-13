// concat 合并两个或多个数组,此方法不会更改现有数组,而是返回一个新数组
const array = [1, 2, 3];
// 如果不传递参数会返回调用此方法的现存数组的浅拷贝
const array1 = array.concat();
// 不一定要传入数组
console.log(array.concat(4)) // [1, 2, 3, 4]
console.log(array1 == array); // false

// every 判断数组中每一项是否满足条件,只有所有项都满足条件,才会返回true
console.log(array.every(item => item > 0)); // true

// fill 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素,不包括终止索引
console.log(array.fill(0)); // [0, 0, 0]

// filter 创建一个新数组,包含通过所提供函数实现测试的所有元素
// 去除数组中的假值
console.log(array.filter(Boolean)); // []

// find 返回数组中满足提供测试函数的第一个元素的值,否则返回unudefined

// findIndex 返回数组中满足提供测试函数的第一个元素的索引,否则返回-1

// includes和indexOf效果类型,判断数组中是否存在某个元素

// jion 将一个数组的所有元素连接成一个字符串并返回这个字符串
// 如果不传递参数则用,号连接
// 传入空串则元素之间没有连接符
console.log(array.join('')); // 000

// map 创建一个新数组,其结果是该数组中的每个元素调用一次提供函数后的返回值

// reverse 反转数组

// slice(begin, end) 返回一个新的数组对象,这个对象是一个由begin和end决定的原数组的浅拷贝,不包括end

// splice 通过删除或替换现有元素或者原地添加新的元素来修改数组

// ------字符串

// charCodeAt 返回在指定位置的字符的Unicode编码

// startsWith 判断当前字符串是否以另外一个给定子字符串开头,区分大小写

// endsWith 判断当前字符串是否以另外一个给定子字符串结尾

// trim 会从一个字符串的两端删除空白符

// substring 返回一个字符串在开始索引到结束索引之间的一个子集,不包括结束索引

// slice 截取字符串和substring有点类似
const str = '123456789';
console.log(str.slice(0, 8)) // 不包括结束索引

// split 使用指定的分隔符把字符串分割成字符串数组
const arr = str.split(); // ['123456789'];
const arr1 = str.split(''); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(arr);
console.log(arr1);

// includes和indexOf都是判断一个字符串是否包含在另一个字符串里

// 移除数组中的元素
function remove(arr, item) {
  return arr.filter(res => {
    return res !== item;
  })
}

// 添加元素到指定位置
function insert(arr, item, index) {
  return arr.splice(index, 0, item);
}

// 计数,统计arr中值为item元素的次数
function count(arr, item) {
  let res = arr.filter(v => {
    return v === item;
  })
  return res.length;
}
function count(arr, item) {
  let resCount = 0;
  arr.map(v => {
    if(v === item) {
      resCount++;
    }
  })
  return resCount;
}
function count(arr, item) {
  return arr.reduce((init, curr) => {
    return curr === item ? init + 1 : init;
  }, 0)
}
console.log(count([1, 1, 1, 2, 2, 3, 4, 5], 1));


// 统计arr中每个元素出现的次数
function countAll(arr) {
  return arr.reduce((obj, prop) => {
    if (obj.hasOwnProperty(prop)) {
      obj[prop]++;
    } else {
      obj[prop] = 1;
    }
    return obj;
  }, {})
}
console.log(countAll([1, 2, 2, 3, 3, 3, 4, false]));

// 查找值与item相等的元素出现的所有位置
function findAllIndex(arr, item) {
  const resArr = [];
  arr.forEach((v, i) => {
    if (v === item) {
      resArr.push(item);
    }
  })
  return resArr;
}

// 判断字符串是否包含数字
function containsNumber(str) {
  return /\d/.test(str);
  // retunr !!str.match(/\d/g);
}