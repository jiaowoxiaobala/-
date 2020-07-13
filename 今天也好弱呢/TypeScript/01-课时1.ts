export default {}

// 布尔类型
let bool:boolean;
bool = true;

// 数字类型
let num: number = 123;

// 字符串类型
let str: string;
str = 'abc';
str = `数值是${num}`;

// 数组类型
// [1, 2, 3]
// 写法1
let arr1: number[]; // 表示这个数组成员都是number类型
// 写法2
let arr2: Array<number>;
// 表示成员可以是字符串类型或者数组类型的数组
let arr3: (number | string)[];
let arr4: Array<number | string>;

// 元组类型
// 指定成员数量和类型
let tuple: [string, number, boolean];
tuple = ['a', 1, true];

// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}
// 默认是从0开始
Roles.SUPER_ADMIN === 0;
console.log(Roles[0]); // SUPER_ADMIN
// 使用场景, 比如后台返回0代表是超级管理员
let user;
// 如果使用user === 0的话,影响可读性
if (user === Roles.SUPER_ADMIN) {

}

// any类型
let value: any;
value = 'abc';
value = 123;
value = false;
const arr5: any[] = [1, 'a'];

// void类型
// 表示函数没有返回值
const consoleText = (text): void => {
  console.log(text);
}

// null和undefined
let u: undefined;
u = undefined;
let n: null;
n = null;

// never类型
const errorFunc = (message: string): never => {
  throw new Error(message);
}
const infiniteFunc = ():never => {
  while(true) {}
}

// object类型
function getObject(obj: object): void {
  console.log(obj);
}
getObject({ name: 'xiaoba' });

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
}