import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.less'
import './styles/iconfont.css'

// import Vant from 'vant'
import 'vant/lib/index.css'

import 'amfe-flexible'

import HmHeader from './components/HmHeader.vue'

import { Toast } from 'vant'
Vue.prototype.$toast = Toast

Vue.component('hm-header', HmHeader)
// Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
