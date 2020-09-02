watch监听多个变量变化:
  -将多个变量通过计算属性组合在一起,然后用watch监听这个计算属性

vue动态路由参数
<script>
const router = new VueRouter({
  routes: [{
    path: '/:id',
    component: component,
    // 在路由对象中添加props
    props: true
  }]
});
// 路由组件中
export default {
  props: ['id'],
  methods: {
    getParams() {
      // 可以直接从props获取params
      return this.id
    }
  },
}
</script>