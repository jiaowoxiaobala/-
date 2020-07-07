// Provider是一个组件,接收store并放进全局的context对象
import React from 'react';
import PropType from 'prop-type';
class Provider extends React.Component {
  // 需要声明静态属性childContextTypes来指定context对象的属性
  static childContextType = {
    store: PropType.object
  }
  // 实现getChildContext方法,返回context对象
  getChildContext() {
    return { store: this.store }
  }
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }
  // 渲染被Provider包裹的组件
  render() {
    return this.props.children;
  }
}

// connect
function connect(mapStateToProps, mapDispatchToProps) {
  return function(component) {
    class Connect extends React.Component {
      // 接收context的固定写法
      static contextType = {
        store: PropType.object
      }

      componentDidMount() {
        // 从context获取store并订阅更新
        this.context.store.subscribe(this.updateProps.bind(this));
      }
      // 触发更新
      updateProps() {
        const { store } = this.context;
        let stateProps = mapStateToProps
          ? mapStateToProps(store.getState(), this.props)
          : {}
        let dispatchProps = mapDispatchToProps
          ? mapDispatchToProps(store.dispatch, this.props)
          : {}
        this.setState({
          allProps: {
            ...stateProps,
            ...dispatchProps,
            ...props
          }
        })
      }
      render() {
        return <Connect {...this.state.allProps} />
      }
    }
    return Connect;
  }
}