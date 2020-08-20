// 1.提炼函数
//  -避免出现超大函数
//  -独立出来的函数有助于代码复用
//  -独立出来的函数更容易被覆写
function count(type, x, y) {
  if (type === 'add') {
    return x + y;
  } 
  if (type === 'sub') {
    return x - y;
  }
  // ...
}

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}

// 2.合并重复的条件片段
let paging = function(currPage) {
  if (currPage <= 0) {
    currPage = 0;
    jump(currPage);
  } else if (currPage >= totalPage) {
    currPage = totalPage;
    jump(currPage)
  } else {
    jump(currPage);
  }
}

let paging = function(currPage) {
  if (currPage <= 0) {
    currPage = 0;
  } else if (currPage >= totalPage) {
    currPage = totalPage;
  }
  jump(currPage);
}

// 3.把条件分支语句提炼成函数
//  -复杂的条件分支语句是导致程序难以阅读和理解的重要原因,而且容易导致
// 一个庞大的函数。
function getPrice(price) {
  const date = new Date();
  if (date.getMonth() >= 6 && date.getMonth() <= 9) {
    return price * 0.8
  }
  return price;
}

function isSummer() {
  const date = new Date();
  return date.getMonth() >= 6 && date.getMonth() <= 9
}
function getPrice(price) {
  if (isSummer()) {
    return price * 0.8
  }
  return price;
}

// 4.提前让函数退出代替嵌套条件分支
function del(obj) {
  if (obj.isReadOnly) {
    return
  }
  if (obj.isFolder) {
    return deleteFolder(obj);
  }
  return deleteFile(obj);
}

// 5.传递对象参数代替过长的参数列表
//  -有时候一个函数可能接收多个参数,而参数的数量越多,函数就越难以理解和使用
function person(name, age, sex, height, weight, mobile) {}
function person(obj) {}
person({
  name: 'xiaoba',
  age: 23,
  // ...
})