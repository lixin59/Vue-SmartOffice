import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'
import axios from 'axios'

import AMapLoader from '@amap/amap-jsapi-loader';
import './assets/css/global.css'
import './assets/js/sdk'



Vue.prototype.$AMapLoader= AMapLoader
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
