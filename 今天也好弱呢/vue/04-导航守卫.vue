vue-router提供的导航守卫主要是用来监听路由的进入和离开
<script>
const router = new VueRouter({})
// 全局前置守卫
router.beforeEach((to, from, next) => {})
// to(Router): 即将要进入的目标路由对象
// from(Router): 当前导航正要离开的路由
// next(Function): 调用该方法后,才能进入下一个钩子



// 组件内的守卫,可以在路由组件内直接定义以下路由导航守卫
// 
</script>