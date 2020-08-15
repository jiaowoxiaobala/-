// 概念: 多个对象间存在一对多关系,当一个对象发生改变时,把这种改变通知
// 给其他多个对象,从而影响其他对象的行为
// 组成:
// publisher: 发布者,当消息发生时负责通知对应订阅者
// subscriber: 订阅者,当消息发生时被通知的对象
// subscriberMap: 持有不同type的数组,存储有所有订阅者的数组
// type: 消息类型,订阅者可以订阅的不同消息类型
// subscribe: 该方法为将订阅者添加到subscriberMap中对应的数组中
// unSubscribe: 该方法为在subscriberMap中删除订阅者
// notify: 该方法遍历通知subscriberMap中对应type的每个订阅者

class Publisher {
  constructor() {
    this.subsMap = new Map();
  }
  // 消息订阅
  subscribe(type, cb) {
    if (this.subsMap.has(type)) {
      !this.subsMap.get(type).includes(cb) && this.subsMap.get(type).push(cb);
      return;
    }
    // 如果没有这个类型的缓存列表, 则设置一个缓存数组并把回调放入
    this.subsMap.set(type, [cb]);
  }
  // 消息退订
  unsubscribe(type, cb) {
    if (!this.subsMap.has(type) || !this.subsMap.get(type).includes(cb)) return;
    const index = this.subsMap.get(type).indexOf(cb);
    this.subsMap.get(type).splice(index, 1);
  }
  // 消息发布
  notify(type, ...props) {
    if (!this.subsMap.has(type)) return;
    // 遍历对应类型的缓存数组并执行里面所有回调
    this.subsMap.get(type).forEach(cb => cb(...props));
  }
}

const takeOut = new Publisher();
takeOut.subscribe('盖浇饭', msg =>  { console.log(`159xxx${ msg }`) });
takeOut.subscribe('盖浇饭', msg =>  { console.log(`132xxx${ msg }`) });

const fn = msg => {
  console.log(`166xx${ msg }`);
}
takeOut.subscribe('炒河粉', fn);
takeOut.unsubscribe('炒河粉', fn);

takeOut.notify('盖浇饭', '盖浇饭好了,快来取');
takeOut.notify('炒河粉', '不好意思,炒河粉卖完了');