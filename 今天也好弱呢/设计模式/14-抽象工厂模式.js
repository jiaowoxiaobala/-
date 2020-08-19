// 概念: 根据不同的输入返回不同类的实例,一般用来创建同一类对象,主要思想是
// 将对象的创建与对象的实现分离
// 组成:
//  -1.Factory: 工厂,负责返回产品实例
//  -2.AbstractFactory: 抽象工厂, 制定工厂实例的结构
//  -3.Product: 产品,访问者从工厂拿到的产品实例
//  -4.AbstractProduct: 抽象产品, 制定产品实例的结构

// 使用场景:
//  -如果一组实例都有相同的结构,那么就可以使用抽象工厂模式
// 与工厂模式的区别:
//  -1.工厂模式主要关注单独的产品实例的创建
//  -2.抽象工厂模式主要关注产品类簇实例的创建,如果产品类簇只有一个产品,那么这时的
// 抽象工厂模式就退化为工厂模式了

// 抽象工厂类
class AbstractFactory {
  constructor() {
    if (new.target === AbstractFactory) {
      throw new Error('抽象类不能直接实例化');
    }
  }
  // 抽象方法
  static createProduct1() {
    throw new Error('抽象方法不能调用');
  }
}

// 具体工厂类
class Factory extends AbstractFactory {
  static createProduct1(type) {
    switch(type) {
      case 'product1':
        return new Product1();
      case 'product2':
        return new Product2();
      default: 
        throw new Error('当前没有这个产品');
    }
  }
}

// 抽象产品类
class AbstractProduct {
  constructor() {
    if (new.target === AbstractProduct) {
      throw new Error('抽象类不能直接实例化');
    }
    this.kind = '抽象产品类1';
  }
  // 抽象方法
  operate() {
    throw new Error('抽象方法不能调用');
  }
}

// 具体产品1
class Product1 extends AbstractProduct {
  constructor() {
    super();
    this.type = 'product1';
  }
  operate() {
    console.log(this.kind + ' - ' + this.type);
  }
}

// 具体产品2
class Product2 extends AbstractProduct {
  constructor() {
    super();
    this.type = 'product2';
  }
  operate() {
    console.log(this.kind + ' - ' + this.type);
  }
}

const prod1 = Factory.createProduct1('product1');
prod1.operate();