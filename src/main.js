// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './router/message'
import store from './store/index'
import myAxios from './axios/index'
Vue.config.productionTip = false

//设置axios为全局的参数，其他地方就可以使用了
Vue.prototype.$http = myAxios

//引入mock
require('./mock/mock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
