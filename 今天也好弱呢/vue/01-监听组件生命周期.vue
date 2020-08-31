<template>
  <div>
    <!-- 组件中的所有生命周期钩子都可以通过@hook:钩子函数名,来监听触发 -->
    <child @hook:mounted="handleGetInfo"></child>
    <button @click="handleBtnClick">按钮</button>
  </div>
</template>

<script>
// 在vue组件中,可以用$on、$once去监听所有的生命周期钩子函数,如监听组件
// 的beforeDestory钩子函数可以写成this.$once('hook:beforeDestory', () => {})
export default {
  handleBtnClick() {
    this.timer = setTimeout(() => {
      // ...
      // 通过hook监听组件销毁钩子函数,并销毁定时器
      this.$once('hook:beforeDestory', () => {
        this.timer && clearTimeout(this.timer);
      })
    })
  }
}
</script>
