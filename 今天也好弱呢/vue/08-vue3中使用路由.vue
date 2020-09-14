import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    获取当前路由
    const route = useRoute()
    获取路由实例
    const router = useRouter()
    当当前路由发生变化时,调用回调函数
    watch(() => route, () => {
      // ...
    }, {
      immediate: true,
      deep: true
    })

    路由跳转
    function getHome() {
      router.push({
        path: '/home'
      })
    }
  }
}

监听路由是否变化,可以使用vue-router提供的生命周期函数
onBeforeRouteUpdate(() => {
  // 当当前路由发生变化时,调用回调函数
})

onBeforeRouteLeave(() => {
  console.log('当当前页面路由离开时调用')
})