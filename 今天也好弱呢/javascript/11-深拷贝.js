// 深拷贝和浅拷贝的区别:
// 浅拷贝会拷贝引用类型的引用,而深拷贝会将引用类型的值全部拷贝一份
// 形成一个新的引用类型

// 实现一个简单的深拷贝
function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function deepClone(origin) {
  if (!isObject(origin)) return origin;
  const target = Array.isArray(origin) ? [] : {};
  for (let k in origin) {
    // 数组没有hasOwnProperty这个方法
    if (Object.prototype.hasOwnProperty.call(origin, k)) {
      if (isObject(origin[k])) {
        target[k] = deepClone(origin[k]);
      } else {
        target[k] = origin[k];
      }
    }
  }
  return target;
}

// JSON.stringify实现深拷贝的缺陷
// undefined、任意的函数及symbol值会丢失
// 对包含循环引用的对象,会抛出错误

