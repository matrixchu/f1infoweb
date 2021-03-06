// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './theme_red/index.css'
import './assets/icon/iconfont.css'

// 引入ajax框架axios配置
import axios from './axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)

// 将axios挂载到Vue原型上方便调用
Vue.prototype.$ajxj = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
