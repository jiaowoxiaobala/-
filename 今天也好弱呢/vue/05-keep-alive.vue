keep-alive: 主要用于保留组件状态或避免重新渲染

多用于缓存路由组件
  -使用keep-alive可以将所有路径匹配到的路由组件都缓存起来,包括路由组件里面
的组件
<template>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

被keep-alive包裹的组件/路由中,会多出两个生命周期钩子: activated和deactivated
activated: 在组件第一次渲染时会被调用,之后在每次缓存组件被激活时调用
deactivated: 在组件被停用(离开路由)时调用

注: 使用了keep-alive后就不会调用beforeDestory和destoryed(被缓存起来了,不会被销毁)

可以通过include和exclude有条件地缓存路由/组件