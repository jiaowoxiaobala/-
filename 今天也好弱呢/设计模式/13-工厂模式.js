// 概念: 根据不同的输入返回不同类的实例,一般用来创建同一类对象,主要思想是将
// 对象的创建与对象的实现分离
// 组成:
//  -1.Factory: 工厂,负责返回产品实例
//  -2.Product: 产品,访问者从工厂拿到产品实例

// 使用场景:
//  -对象的创建比较复杂,而访问者无需知道创建的具体流程
//  -处理大量具有相同属性的小对象

// 工厂类
class Factory {
  static getInstance(type) {
    switch(type) {
      case 'product1':
        return new Product1();
      case 'product2':
        return new Product2();
      default:
        throw new Error('当前没有这个产品')
    }
  }
}

// 产品类1
class Product1 {
  constructor() {
    this.type = 'product1';
  }
  operate() {
    console.log(this.type);
  }
}

// 产品类2
class Product2 {
  constructor() {
    this.type = 'product2';
  }
  operate() {
    console.log(this.type)
  }
}

const pro1 = Factory.getInstance('product1');
const pro2 = Factory.getInstance('product2');
pro1.operate();