// 概念: 将一个类(对象)的接口(方法、属性)转化为用户需要的另一个接口,解决类(对象)
// 之间接口不兼容的问题
// 主要功能是进行转换匹配,目的是复用已有的功能,而不是来实现新的接口,适配器模式主要
// 负责把不兼容的接口转换成访问者期望的格式

// 使用场景:
//  -如果想要使用一个已经存在的对象,但是它的接口不满足要求,那么可以使用适配器模式,把
// 已有的实现转换成需要的接口

const chinaPlug = {
  type: '中国插头',
  chinaInPlug() {
    console.log('开始供电');
  }
}

const japanPlug = {
  type: '日本插头',
  japanInPlug() {
    console.log('开始供电')
  }
}

// 日本插头电源适配器
function japanPlugAdapter(plug) {
  return {
    chinaInPlug() {
      return plug.japanInPlug();
    }
  }
}

japanPlugAdapter(japanPlug).chinaInPlug();