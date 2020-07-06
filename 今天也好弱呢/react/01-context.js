// 一个组件可以通过getChildContext方法返回一个对象,这个对象就是子组件的context,
// 提供context的组件必须提供childContextTypes作为context的声明和验证

// 如果一个组件设置了context,那么它的子组件都可以直接访问到里面的内容,它就像这个组
// 件为根的子组件的全局变量。任意深度的子组件都可以通过contextTypes来声明你想要的
// context里面的哪些状态,然后通过this.context访问到那些状态

class Person extends React.Component {
  static childContextTypes = {
    color: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = { color: 'red' }
  }
  getChildContext() {
    return { color: this.state.color }
  }
  render() {
    return (
      <div>
        <p>父组件</p>
        <Child></Child>
      </div>
    )
  }
}

class Child extends React.Component {
  // 声明想要从祖先组件拿到哪些状态
  static contextTypes = {
    color: PropTypes.string
  }
  render() {
    return (
      <div style={{color:this.context.color}}>子组件</div>
    )
  }
}
// 注意 childContextType和contextTypes一定要是静态属性