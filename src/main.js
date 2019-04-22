import Vue from 'vue'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@xxred/easy-front-end/src/styles/index.scss' // global css

import App from '@xxred/easy-front-end/src/App.vue'
import router from '@xxred/easy-front-end/src/router'
import store from '@xxred/easy-front-end/src/store'

import apiSettings from './apiSettings'

// 设置api地址
store.dispatch('setApiSettings', apiSettings)

import './router/addRoutes' // addRoutes

import '@xxred/easy-front-end/src/icons' // svgicon
import '@xxred/easy-front-end/src/errorLog' // error log
import '@xxred/easy-front-end/src/permission' // permission control

// import * as filters from './filters' // global filters

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // i18n: (key, value) => i18n.t(key, value)
})

// 注册全局table基础组件
Vue.component('table-base', () => import('./components/tableBase.vue'))

// // register global utility filters.
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
