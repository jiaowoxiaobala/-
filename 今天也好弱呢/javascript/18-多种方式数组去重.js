// 1.indexOf + filter
// 思路: 如果索引不是第一个索引,说明是重复值
Array.prototype.unique = function() {
  return this.filter((item, index) => {
    return this.indexOf(item) === index;
  })
}

// 2.直接用indexOf/includes
// 思路: 判断新数组里包不包含这个元素
Array.prototype.unique = function() {
  const arr = [];
  this.forEach(item => {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  })
  return arr;
}

// 3.sort
// 思路: 先对原数组进行排序, 然后再进行元素比较
Array.prototype.unique = function() {
  const arr = [];
  this.sort();
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== this[i + 1]) {
      arr.push(this[i]);
    }
  }
  return arr;
}

// 4.对象键值对
// 思路: 利用对象的key不可以重复的特性进行去重
Array.prototype.unique = function() {
  const arr = [],
        obj = {};
  this.forEach(item => {
    // 如果对象中没有这个键名
    if (!obj.hasOwnProperty(typeof item + item)) {
      // 则给对象添加这个键名
      obj[typeof item + item] = 1;
      // 并把元素添加到新数组中
      arr.push(item);
    }
  })
  return arr;
}

// 5.利用set去重
Array.prototype.unique = function() {
  return [...new Set(this)];
}

// 6.利用map去重,思路和对象一样
Array.prototype.unique = function() {
  const arr = [],
        map = new Map();
  this.forEach(item => {
    // 如果map里没有这个键名
    if (!map.has(item)) {
      map.set(item, 1);
      arr.push(item);
    }
  })
}

// 7.map的另一种方式
Array.prototype.unique = function() {
  const map = new Map();
  return this.filter(item => {
    return !map.has(item) && map.set(item, 1);
  })
}