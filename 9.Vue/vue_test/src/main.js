// 入口文件
// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建Vue实例对象---vm
new Vue({
  el:'#app',
  // 完成了 将App组件放入容器中
  render: h => h(App),
})//.$mount('#app')
