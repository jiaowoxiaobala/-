export default {}
let add = (x: number, y: number): number => {return x + y}

function add1(arg1: number, arg2: string): string {
  return arg1 + arg2;
}

// 接口定义函数
interface Add {
  (x: number, y:number): number
}
// 类型别名定义函数
type Add2 = (x:number, y:number) => number;

// 在ts中可选参数的定义必须在固定参数后面
type AddFunction = (arg1: number, arg2?: number) => number;

interface AddFunc {
  (arg1: string, arg2: number): string
}
// 函数的默认参数
let addfunction = (arg1: string, arg2 = 3) => arg1 + arg2;

// 限制所有参数都是数字类型
const handleData = (...args: number[]) => {
  // ...
}
handleData(1, 2, 3, 4);