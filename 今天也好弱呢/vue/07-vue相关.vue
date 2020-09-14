1.子组件中调用父组件的方法
    -this.$parent
    -this.$emit
    -父组件通过props把方法传给子组件

2.vue强制刷新
在组件内部调用this.$forceUpdate()
如果是刷新某个组件，给这个组件绑定key，然后改变key的值

3.组件绑定自定义事件失效
自定义事件加native修饰符

4.v-for遍历对象时，是按什么顺序遍历的，如何保证遍历顺序
    -会先判断是否有iterator接口，如果有循环执行next()方法
    -没有iterator的情况下，会调用Object.keys()方法，在不同浏览器中，JS引擎不能保证输出顺序一致
    -保证对象的输出顺序可以把对象放在数组中，作为数组的元素

5.v-model的lazy修饰符
在默认情况下，v-model在每次input事件触发后将输入框的值与数据进行同步，
添加lazy修饰符后，会转为在change事件触发后同步数据（感觉和防抖很像）--在input框失去焦点后，比较框内的值是否发送了变化

6.组件的name属性有什么用
    -使用keep-alive时，可以配合组件name缓存过滤
    -递归组件，通过name调用自身
    -路由router跳转时，可以通过name
    -便于vue-devtools调试

7.prop验证-validator
propA: {
    如果传入的不是true或false就会报错
    validator(val) {
        return [true, false].includes(val)
    }
}

8.event事件对象的使用
    -@click="func" 默认第一个参数传入event对象
    -@click="func(0, $event)" 如果自己需要传入参数和event对象，
则需要使用$event来获取event对象并传入func