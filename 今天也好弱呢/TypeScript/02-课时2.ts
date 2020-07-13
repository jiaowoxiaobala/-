export default {}

// interface定义接口
interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({firstName, lastName}: NameInfo): string => {
  return `${firstName} ${lastName}`;
}
getFullName({
  firstName: 'xiaoba',
  lastName: 'jiayou'
});

interface Vegetable {
  // 定义可选属性,可传可不传
  color?: string,
  type: string,
  // 多余属性检测
  // 一旦定义了任意类型,那么确定属性和可选属性的类型都必须是它的类型的子集
  // [prop: string]: any
}

const getVegetables = ({color, type}: Vegetable): string => {
  return `A ${color ? (color + ''): ''}${type}`;
}
getVegetables({
  type: 'tomato',
  size: 2
} as Vegetable);
// 类型断言

interface ArrInter {
  0: number,
  // 只读属性,不可修改
  readonly 1: string
}
let arr: ArrInter = [1, 'a'];
// arr[1] = b;

// 定义函数
interface AddFunc{
  (num1: number, num2: number): number
}
// 类型别名
type Func = (num1: number, num2: number) => number

// 接口继承
interface Vegetables {
  color: string
}

interface Tomato extends Vegetable {
  radius: number
}

interface Carrot extends Vegetable {
  length: number
}

// 混合类型
interface Fun {
  (): void,
  count: number
}
const addfun = (): Fun => {
  const c = () => {c.count++};
  c.count = 0;
  return c;
}

interface RoleDic {
  // 定义属性只能是数字
  [prop: number]: string
}
const obj: RoleDic = {
  1: 'abc'
}