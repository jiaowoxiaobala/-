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