// 概念: 运用共享技术来有效地支持大量细粒度对象的复用,以减少创建的对象数量
// 主要思想是共享细粒度对象,也就是说如果系统中存在多个相同的对象,那么只需共享一份就可以了
// 不必每个都去实例化一个对象,这样来精简内存资源,提升性能和效率

// 使用场景:
//  -如果一个程序中大量使用了相同或相似对象,那么可以考虑引入享元模式
//  -剥离出对象的外部状态后,可以使用相对较少的共享对象取代大量对象

// 假设一个内衣工厂有5种男式内衣和5种女士内衣,为了推销产品,工厂决定生成一些塑料模特来
// 穿上他们的内衣拍广告照片,利用享元模式思想,只需要一男一女两个模特即可
class Model {
  constructor(sex) {
    this.sex = sex;
  }
  takePhoto() { 
    console.log('sex=' + this.sex + ', underwear=' + this.underwear );
  }
}

// 创建男模特
const maleModel = new Model('male');
// 创建女模特
const femaleModel = new Model('female');

// 给男模特依次穿上所有男装,并拍照
for (let i = 1; i <= 5; i++) {
  maleModel.underwear = 'underwear' + i;
  maleModel.takePhoto();
}

// 给女模特依次穿上所有女装,并拍照
for (let j = 1; j < 5; j++) {
  maleModel.underwear = 'underwear' + j;
  maleModel.takePhoto();
}