export {}
// 声明合并
interface InfoInter {
  name: string
  getRes(input: string): number
}
interface InfoInter {
  age: number
  getRes(input: number): string
}
// InfoInter合并为一个接口
let infoInter: InfoInter = {
  name: 'xiaoba',
  age: 22,
  getRes(text: any): any {
    if (typeof text === 'string') {
      return text.length
    } else {
      return String(text);
    }
  }
}

interface ObjWidthAnyKes {
  [key: string]: string
}
let obj: ObjWidthAnyKes = {}
Object.defineProperty(obj, 'name', {
  value: 'xiaoba',
  writable: false,
  configurable: true,
  enumerable: true
})
console.log(obj.name)

// 装饰器
function enumerable(bool: boolean) {
  return (target: any, propertyName: string, descriptor: PropertyDescriptor)=> {
    descriptor.enumerable = bool;
  }
}

class ClassF {
  constructor(public age: number) {}
  // @enumerable(false)
  // public getAge() {
  //   this.age
  // }
}