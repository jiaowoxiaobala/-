// 概念: 为目标对象创造一个代理对象,以控制对目标对象的访问
// 代理模式把代理对象插到访问者和目标对象之间,从而为访问者对目标对象的访问引入一定的间接性
// 正是这种间接性,给了代理对象很多操作空间,比如在调用目标对象前和调用后进行一些预操作和后操
// 作,从而实现新的功能或者扩展目标的功能
// 常见的代理模式有两种缓存代理和虚拟代理

// 虚拟代理
// 概念: 把开销大的操作等到需要执行创建的时候再去执行创建
const image = (function() {
  const imgNode = document.createElement('img');
  document.body.append(imgNode);
  return {
    setSrc(src) {
      imgNode.src = src;
    }
  }
}());

const proxyImage = (function() {
  const img = new Image();
  // 当img加载完毕后给image设置真正需要展示的图片
  img.onload = function() {
    image.setSrc(this.src);
  }
  return {
    setSrc(src) {
      // 先给image设置占位图
      image.setSrc('占位图');
      // 设置真正需要展示的图片
      img.src = src;
    }
  }
}());

proxyImage.setSrc('需要展示的图片地址');

// 缓存代理
// 概念: 缓存代理可以为一些开销大的运算结果提供暂时的存储,在下次运算时,如果
// 传递进来的参数跟之前一致,则可以直接返回前面存储的运算结果
// 和缓存函数类似
function plus(...args) {
  let count = 0;
  console.log('计算了一次');
  for (let k of args) {
    count += k;
  }
  return count;
}


function createProxyFactory(fn) {
  const cache = new Map();
  return function(...args) {
    // 虽然map可以存储数组作为键,但是引用地址不同取不到对应的值,所以这里要转为字符串
    const prop = args.join(',');
    // 检查本次入参是否有对应的计算结果
    if (cache.has(prop)) {
      return cache.get(prop);
    }
    return cache.set(prop, fn.apply(this, args)).get(prop);
  }
}

const plusFunc = createProxyFactory(plus);
console.log(plusFunc(1, 2, 3));
console.log(plusFunc(1, 2, 3));

