Promise的all方法提供了并行执行异步操作的能力,并且在所有异步操作执行完后
才执行回调

const p = Promise.all([promise1, promise2, promise3]);
p.then(res => {
  // 三个都成功则成功
}).catch(err => {
  // 只要有失败则失败
})

Promise.race的使用场景,比如给某个异步请求设置超时时间,并且在超时后执行相应的操作
// 请求某个图片资源
function requestImg() {
  const p = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    }
    img.src = '图片的路径'
  })
  return p;
}
// 延时函数,用于给请求计时
function timeout() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('图片请求超时');
    }, 3000);
  })
  return p
}
Promise.race([requestImg(), timeout()]).then(res => {
  // 图片请求成功
}).catch(err => {
  // 图片请求失败
})

// 注意点:
// 1.promise的then和catch传入非函数的参数会发生值穿透
// 2.then或catch返回的值不能是promise本身,否则会造成死循环
const promise = Promise.resolve()
.then(() => {
  // 不能返回promise本身
  return promise
})
// 3.在then或catch中return一个error对象并不会抛出错误,所以不会被后续的catch捕获
// 4.promise构造函数中的resolve或reject只有第一次执行有效,多次调用没有任何作用