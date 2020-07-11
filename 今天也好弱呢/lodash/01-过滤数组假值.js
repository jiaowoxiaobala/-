// lodash中的写法

function compact(array) {
  let resIndex = 0
  const result = []

  // 感觉这里换成Array.isArray(array)会好点
  if (array == null) {
    return result
  }
  // 遍历数组中的所有属性
  for (const value of array) {
    // 如果属性是非假值,就添加到result里
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

// 利用fliter过滤假值
const arr = [1, 0, false, '', 2];
console.log(arr.filter(Boolean));