export default {}
// keyof
// 连接一个类型,返回由这个类型所有属性名组成的联合类型
interface InfoInter {
  name: string,
  age: number
}
let infoProp: keyof InfoInter;
infoProp = 'name';
infoProp = 'age';

// []索引访问操作符
interface Type {
  a: never,
  b: never,
  c: string,
  d: number,
  e: undefined,
  f: null,
  g: object
}
type Test = Type[keyof Type];

interface Info1 {
  age: number,
  name: string,
  sex: string
}
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>

const stringIndex = 'a';
const numberIndex = 1;
const symbolIndex = Symbol();
type Obj = {
  [stringIndex]: string,
  [numberIndex]: number,
  [symbolIndex]: symbol
}
type keysType = keyof Obj;

// unknown
// 任何类型都可以赋值给unknown类型
let value: unknown;
value = 'a';
value = 123;
// unknown与任何其他类型组成的交叉类型,最后都等于其他类型
type type1 = string & unknown; // string
type type2 = number & unknown; // number
type type3 = unknown & unknown // unknown
// unknown与任何其他类型(除了any是any)组成的联合类型,都等于unknown

type Types<T> = T extends string ? string : number;
let index: Types<false>;