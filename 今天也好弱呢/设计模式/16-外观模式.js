// 概念: 定义一个将子系统的一组接口集成在一起的高层接口,以提供一个一致的
// 外观。外观模式让外界减少与子系统内多个模块的直接交互,从而减少耦合,让外界
// 更轻松地使用子系统,本质是封装交互,简化调用

// 使用场景:
//  -维护设计粗糙和难以理解的遗留系统或者系统非常复杂的时候,可以为这些系统设置
// 外观模块,给外界提供清晰的接口,以后新系统只需与外观交互即可
//  -如果构建多层系统,可以使用外观模式来将系统分层,让外观模块成为每层的入口,简化
// 层间调用,松散层间耦合

function addEvent(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn);
  } else {
    element['on' + type] = fn;
  }
}

const preventDefault = function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

const cancelBubble = function(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}