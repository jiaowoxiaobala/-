// 概念: 使多个对象都有机会处理请求,从而避免请求的发送者和接收者之间的耦合关系,将
// 这些对象连成一条链,并沿着这条链传递该请求,直到有一个对象处理它为止
// 几个特点:
//  -1.请求在一系列对象中传递,形成一条链
//  -2.链中的请求接收者对请求进行分析,要么处理这个请求,要么把这个请求传递给链的下一个
// 接收者

// 使用场景:
//  -需要多个对象可以处理同一个请求,具体该请求由哪个对象处理在运行时才确定
//  -在不明确指定接收者的情况下,向多个对象中的其中一个提交请求的话,可以使用职责链模式

// 领导基类
class Leader {
  constructor() {
    this.nextLeader = null
  }
  setNext(next) {
    this.nextLeader = next;
    return next;
  }
}

// 小组领导
class GroupLeader extends Leader {
  handle(duration) {
    if (duration <= 1) {
      console.log('小组领导批准了~');
      return
    } 
    this.nextLeader.handle(duration);
  }
}

// 部门领导
class DepartmentLeader extends Leader {
  handle(duration) {
    if (duration <= 2) {
      console.log('部门领导批准了~');
      return
    }
    this.nextLeader.handle(duration);
  }
}

// 总经理
class GeneralLeader extends Leader {
  handle(duration) {
    if (duration <= 3) {
      console.log('总经理批准了~');
      return;
    }
    console.log('你请太多假了把~')
  }
}

const zhangsan = new GroupLeader();
const lisi = new DepartmentLeader();
const xiaoba = new GeneralLeader();

// 组装职责链
zhangsan.setNext(lisi).setNext(xiaoba);

// 请一天假只需要小组领导批准
zhangsan.handle(1);
zhangsan.handle(2);
zhangsan.handle(3);