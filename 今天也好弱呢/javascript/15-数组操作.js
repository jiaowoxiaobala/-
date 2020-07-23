// 1.数组交集
let arr1 = [1, 2, 3, 4, 5, 7, 8],
    arr2 = [5, 6, 7, 8];

let res = arr1.filter(item => arr2.includes(item));

// 2.数组并集
res = arr1.concat(arr2.filter(item => !arr1.includes(item)))
console.log(res)

// 3.数组去重
console.log(Array.from(new Set([1, 2, 3, 3])));
console.log([...new Set([1, 2, 3, 4])]);

// 4.数组排序
console.log([1, 2, 3, 4].sort((a, b) => a - b)); // 升序
console.log([1, 2, 3, 4].sort((a, b) => b - a)); // 降序

// 5.最大值
Math.max(...[1, 2, 3, 4]);
Math.max.apply(Math, [1, 2, 3, 4]);
[1, 2, 3, 4].reduce((pre, cur) => {
  return Math.max(pre, cur);
})

// 6.数组求和
[1, 2, 3, 4].reduce((pre, cur) => {
  return pre + cur;
})

// 7.数组合并
arr1 = [1, 2, 3, 4].concat([5, 6]);
arr1 = [1, 2, 3, 4].push(...[4, 5, 6]);
arr1 = [...[1, 2, 3], ...[4, 5]];

// 8.数组是否包含值
console.log([1, 2, 3].indexOf(4)) // -1 如果存在返回索引
console.log([1, 2, 3].includes(4)) // false
console.log([1, 2, 3].find(item => item === 3)); // 如果数组中无值返回undefined
console.log([1, 2, 3].findIndex(item => item === 3)); // 2 如果数组中无值返回-1

// 9.数组每一项都满足
[1, 2, 3].every(item => item > 0);

// 10.数组有一项满足
[1, 2, 3].some(item => item === 3);

// 11.对象转数组
Object.keys({name: 'xiaoba', age: 22}) // ['name', 'age']
Object.values({name: 'xiaoba', age: 22}) // ['xiaoba', 22]
Object.entries({name: 'xiaoba', age: 22}) // [['name', 'xiaoba'], ['age', 22]]