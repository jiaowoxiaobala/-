// 使用自定义组件的时候,可以在其中嵌套jsx结构,嵌套的结构在组件内部
// 都可以通过props.children获取到,和vue中的slot有点相似

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          { this.props.children }
        </div>
      </div>
    )
  }
}
// 由于jsx会把插入表达式里面数组中的jsx一个个罗列下来显示,所以其实就相当于
// 在card中嵌套了什么jsx结构,都会显示在card的类名为card-content的div元素
// 中,我们甚至可以在组件内部把数组中的jsx元素安置在不同的地方

class Layout extends React.Component {
  render() {
    return (
      <div className='two-cols-layout'>
        <div className='sidebar'>
          { this.props.children[0] }
        </div>
        <div className='main'>
          { this.props.children[1] }
        </div>
      </div>
    )
  }
}


