// 概念: 状态模式的关键是区分事物内部的状态,事物内部状态的改变带来事物行为改变
// 所谓对象的状态,通常指的是对象实例的属性值,行为指的就是对象的功能,行为大多可以对应
// 到方法上

// 使用场景:
//  -操作中含有庞大的多分支条件语句,且这些分支依赖于该对象的状态,那么可以使用状
// 态模式来将分支的处理分散到单独的状态类中
//  -对象的行为随着状态的改变而改变,那么可以考虑状态模式,来把状态和行为分离,虽然
// 分离了,但是状态和行为是对应的,再通过改变状态调用状态对应的行为

// 红灯状态
class RedState {
  constructor() {
    this.color = '红色'
  }
  employ() {
    console.log(`交通灯颜色变为${this.color}`, '行人等待 & 车辆通行');
  }
  changeState(trafficLight) {
    trafficLight.setState(trafficLight.yellowState);
  }
}

// 绿灯状态
class GreenState {
  constructor() {
    this.color = '绿色';
  }
  employ() {
    console.log(`交通灯颜色变为${this.color}`, '行人通行 & 车辆等待');
  }
  changeState(trafficLight) {
    trafficLight.setState(trafficLight.redState);
  }
}

// 黄灯状态
class YellowState {
  constructor() {
    this.color = '黄色';
  }
  employ() {
    console.log(`交通灯颜色变为${this.color}`, '行人等待 & 车辆等待');
  }
  changeState(trafficLight) {
    trafficLight.setState(trafficLight.greenState);
  }
}

// 交通灯类
class TrafficLight {
  constructor() {
    this.redState = new RedState();
    this.greenState = new GreenState();
    this.yellowState = new YellowState();
    this.state = this.greenState;
  }
  // 设置交通灯状态
  setState(state) {
    state.employ();
    this.state = state;
  }
  changeState() {
    // 触发当前灯状态改变
    this.state.changeState(this);
  }
}
const trafficLight = new TrafficLight();
trafficLight.changeState();
trafficLight.changeState();
trafficLight.changeState();