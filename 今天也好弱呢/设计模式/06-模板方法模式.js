// 概念: 父类中定义一组操作算法骨架,而将一些实现步骤延迟到子类中,使得子类可以不改变
// 父类的算法结构的同时,重新定义算法中的某些实现步骤。模板方法模式的关键是算法步骤的
// 骨架和具体实现分离
// 组成:
// AbstractClass: 抽象父类,把一些共用的方法提取出来,把可变的方法作为抽象类,最重要的是
// 把算法骨架抽象出来作为模板方法
// templatMethod: 模板方法,固定了希望执行的算法骨架
// ConcreteClass: 子类,实现抽象父类中定义的抽象方法,调用继承的模板方法时,将执行模板方
// 法中定义的算法流程

// 使用场景: 如果知道一个算法所需的关键步骤,而且很明确这些步骤的执行顺序,但是具体的实现是
// 未知的、灵活的,那么这时候就可以使用模板方法模式来将算法步骤的框架抽象出来
class Beverage {
  constructor() {
    // 如果是new调用的Beverage,则new.target等于Beverage
    if (new.target === Beverage) {
      throw new Error('抽象类不能直接实例化');
    }
  }
  // 共用方法
  boilWater() {
    console.log('水已煮沸');
  }
  // 抽象方法
  brewDrink() {
    throw new Error('抽象方法不能调用')
  }
  // 共用方法
  pourCup() {
    console.log('倒进杯子里');
  }
  // 抽象方法
  addCondiment() {
    throw new Error('抽象方法不能调用')
  }
  // 模板方法
  init() {
    this.boilWater();
    this.brewDrink();
    this.pourCup();
    this.addCondiment();
  }
}

class Coffee extends Beverage {
  constructor() {
    super();
  }
  // 子类实现抽象方法
  brewDrink() {
    console.log('冲泡咖啡');
  }
  // 子类实现抽象方法
  addCondiment() {
    console.log('加点咖啡伴侣');
  }
}

const coffee = new Coffee();
coffee.init();

// 如果还需要泡茶
class Tea extends Beverage {
  brewDrink() {
    console.log('冲泡茶');
  }
  addCondiment() {
    console.log('加点枸杞')
  }
}

const tea = new Tea();
tea.init();