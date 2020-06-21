export default {}
// 交叉类型 &
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U;
  res = Object.assign(arg1, arg2);
  return res;
}

// 联合类型
const getLengthFunc = (content: string | number): number => {
  if (typeof content === 'string') {
    return content.length;
  } else {
    return content.toString().length;
  }
}

// 类型别名
type TypeString = string
let str: TypeString
type PositionType<T> = {
  x: T,
  y: T
}
const position1: PositionType<number> = {
  x: 1,
  y: -1
}
const position2: PositionType<string> = {
  x: '1',
  y: '2'
}
type Name = 'xiaoba'
const name: Name = 'xiaoba';
type Direction = 'north' | 'east' | 'south' | 'west';
function getDirectionFirstLetter(direction: Direction) {
  return direction.substr(0, 1);
}
getDirectionFirstLetter('north');