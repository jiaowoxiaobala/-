// 概念: 分布构建一个复杂对象,并允许按步骤构造,同样的构建过程采用不同的表示,
// 将一个复杂对象的构建层与其表示层分离
// 组成:
//  -1.Director: 指挥者,调用建造者中的部分具体实现进行部件装配
//  -2.Builder: 建造者,含有不同部件的生产方式给指挥者调用,是部件真正的生产者,但是
// 没有部件的装配流程
//  -3.Product: 产品,要返回给访问者的复杂对象

// 使用场景:
//  -相同的方法,不同的执行顺序,产生不一样的产品时,可以采用建造者模式
//  -产品的组成部件类似,通过组装不同的组件获得不同产品时,可以采用建造者模式

// 建造者
class CarBuilder {
  constructor(param) {
    this.param = param;
  }
  // 生产部件1
  buildPart1() {
    this.part1 = 'part1';
    return this;
  }
  // 生产部件2
  buildPart2() {
    this.part2 = 'part2';
    return this;
  }
}

// 指挥者
class Director {
  constructor(param) {
    const product = new CarBuilder(param);
    product.buildPart1().buildPart2();
    return product;
  }
}

// 获得产品
const product = new Director('param');
console.log(product);