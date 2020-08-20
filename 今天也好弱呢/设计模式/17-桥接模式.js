// 概念: 将抽象部分与它的实现部分分离,使它们都可以独立地变化,使用组合关系
// 代替继承关系,降低抽象和实现两个可变维度的耦合度
// 组成:
//  -1.Product: 产品,由多个独立部件组件的产品
//  -2.Component: 部件,组成产品的部件类
//  -3.Instance: 部件类的实例

// 使用场景:
//  -产品部件的粒度越细,产品复用的必要性越大,可以考虑桥接模式
//  -如果产品的部件有独立的变化维度,可以考虑桥接模式

// 皮包
class Bag {
  constructor(type, color) {
    this.type = type;
    this.color = color
  }
  show() {
    console.log(this.color.show() + this.type.show());
  }
}

// 皮包类型
class Type {
  constructor(type) {
    this.typeType = type;
  }
  show() {
    return this.typeType;
  }
}

// 皮包颜色
class Color {
  constructor(type) {
    this.colorType = type;
  }
  show() {
    return this.colorType;
  }
}

const redColor = new Color('红色');
const walletType = new Type('钱包');
const bag = new Bag(walletType, redColor);
bag.show();