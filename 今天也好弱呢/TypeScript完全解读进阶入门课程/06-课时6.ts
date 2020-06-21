// 枚举类型用于取值被限定在一定范围内的场景
export default {}
// 枚举成员会被赋值为从0开始递增的数字,同时也会对枚举值到枚举名进行反向映射

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days['Sun'] === 0); // true
console.log(Days[0] === 'Sun'); // true

enum Status {
  Uploading,
  Success,
  Failed
}
console.log(Status.Uploading);
console.log(Status['Success']);

enum Message {
  Error = 'Sorry, error',
  Success = 'Hello, success',
  // 定义的时候可以使用已经定义的枚举字段
  Failed = Error
}

// 异构枚举
enum Result {
  Faild = 0,
  Success = 'success'
}

// 1.不带初始值的枚举成员 enum E { A }
// 2.enum E { A = 'a' }
// 3.enum E { A = '1' }
enum Animals {
  Dog = 1,
  Cat = 2
}
interface Dog {
  type: Animals.Dog
}

const dog: Dog = {
  type: 1
}

// 联合枚举类型
enum Condition {
  Off,
  On
}
interface Light {
  status: Condition
}
const light: Light = {
  status: Condition.Off
}

// 常数枚举
// 常数枚举与普通枚举的区别是,它会在编译阶段被删除,并且不能包含计算成员
const enum type {
  admin = 1
}
const num = type.admin;