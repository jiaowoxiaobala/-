// createStore
const createStore = (reducer) => {
  // 公共状态
  let currentState = {};
  // 观察者队列
  let observers = []
  // getter
  function getState() {
    return currentState;
  }
  // setter
  // 在使用dispatch时,会传入一个action对象,这个对象包括我们要修改的state
  // 以及这个操作的名字(actionType),根据type的不同,store会修改对应的state
  function dispatch(action) {
    currentState = reducer(currentState, action);
    // 每次dispatch时更新
    observers.forEach(fn => fu());
  }
  // 发布订阅
  function subscribe(fn) {
    observers.push(fn);
  }
  // 初始化store数据
  dispatch({type: 'init'});
  return {
    getState,
    dispatch,
    subscribe
  }
}
// reducer
const initState = {
  count: 1
}
const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'plus':
    return {
      ...state,
      count: state.count + 1
    }
    case 'subtract':
    return {
      ...state,
      count: state.count - 1
    }
    default:
    return initState;
  }
}
