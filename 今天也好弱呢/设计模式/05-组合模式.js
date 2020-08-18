// 概念: 将对象组合成树型结构来表现整体-部分的层次结构,让使用者可以以一致的
// 方式处理组合对象以及部分对象
// 几个特点:
// -1.结构呈整体-部分的树形关系,整体部分一般称为组合对象,组合对象下还可以有组合对象和页对象
// -2.组合对象和叶对象有一致的接口和数据结构,以保证操作一致
// -3.请求从树的最顶端往下传递,如果当前处理请求的对象是叶对象,叶对象自身会对请求作出相应的处
// 理;如果当前处理的是组合对象,则遍历其下的子节点(叶对象),将请求继续传递给这些子节点

// 使用场景:
//  -如果对象组织呈树状结构就可以考虑使用组合模式,特别是如果操作树中对象的方法比较类似时

// 文件夹类
class Folder {
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.children = [];
  }
  // 在文件夹下增加文件或文件夹
  add(fileOrFolder) {
    // 给增加的文件或文件夹设置父对象
    fileOrFolder.parent = this;
    this.children.push(fileOrFolder);
    return this;
  }
  // 扫描方法
  scan() {
    this.children.forEach(child => child.scan());
  }
  remove() {
    // 根节点或树外的游离节点直接return掉
    if (!this.parent) return;
    this.children.forEach((child, index) => {
      if (child === this) {
        this.children.splice(index, 1);
      }
    });
  }
}

// 文件类
class File {
  constructor(name) {
    this.name = name;
    this.parent = null;
  }
  // 文件下增加文件,应报错
  add() {
    throw new Error('文件下面不能再添加文件')
  }
  // 扫描方法
  scan() {
    console.log('开始扫描文件: ' + this.name);
  }
  remove() {
    if (!this.parent) return;
    this.parent.children.forEach((child, index) => {
      if (child === this) {
        this.parent.children.splice(index, 1);
      }
    });
  }
}

const folder = new Folder();
const file1 = new File('javaScript设计模式与应用');
const file2 = new File('javaScript函数式编程');
folder.add(file1).add(file2);
file2.remove();
folder.scan();