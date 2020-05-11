import Vue from 'vue'
import App from './App.vue'
//公共css
import './assets/common.css'

//路由
import router from './router'
Vue.config.productionTip = false
//网络请求
import request from './network/request' 
Vue.prototype.$request = request


// 事件总线
Vue.prototype.$bus = new Vue()

//vuex
import store from './store/index'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
