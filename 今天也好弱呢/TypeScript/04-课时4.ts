// 泛型是指在定义函数、接口或类的时候,不预先指定具体的类型,而在使用的时候
// 再指定类型的一种特性
export default {}

let getArray = <T>(value: T, times: number = 5): T[] =>{
  return new Array(times).fill(value);
}

getArray<number>(3);

let getArray1: <T>(arg: T, times: number) => T[];
getArray1 = (arg: any, times: number): any[] => {
  return new Array(times).fill(arg);
}

type GetArray = <T>(arg: T, times: number) => T[];
let getArray2: GetArray = (arg: any, times: number) => {
  return new Array(times).fill(arg);
}

interface GetArr{
  <T>(prams1: T, prams2: number): T[]
}

// 泛型约束
interface ValueWithLength {
  length: number
}
const getArray3 = <T extends ValueWithLength>(arg: T, times): T[] => {
  return new Array(times).fill(arg);
}

getArray3([1, 2],2);
getArray3('abc', 2);
getArray3({
  length: 2
}, 3);

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
}

const objs = {
  a: 'a',
  b: 'b'
}
getProps(objs, 'a')
// getProps(objs, 'c')