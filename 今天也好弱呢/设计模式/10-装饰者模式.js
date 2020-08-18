// 概念: 又称装饰器模式,在不改变原对象的基础上,通过对其添加属性或方法来进行包装
// 扩展,使得原有对象可以动态具有更多功能
// 本质是功能动态组合,即动态地给一个对象添加额外的职责,就增加功能角度来看,使用装饰者
// 模式比用继承更为灵活,可以有效地把对象的核心职责和装饰功能区分开

// 使用场景:
//  -需要通过对现有的一组基本功能进行排序组合而产生更多功能时,采用继承关系很难实现,这时
// 可以考虑使用装饰者模式
//  -当对象的功能要求可以动态地添加,也可以动态地撤销,可以考虑使用装饰者模式

// 毛坯房-目标对象
class OriginHouse {
  getDesc() {
    console.log('毛坯房');
  }
}

// 搬入家具-装饰者
class Furniture {
  constructor(house) {
    this.house = house;
  }
  getDesc() {
    this.house.getDesc();
    console.log('搬入家具');
  }
}

// 墙壁刷漆-装饰者
class Painting {
  constructor(house) {
    this.house = house;
  }
  getDesc() {
    this.house.getDesc();
    console.log('墙壁刷漆')
  }
}

let house = new OriginHouse();
house = new Furniture(house);
house = new Painting(house);

house.getDesc();