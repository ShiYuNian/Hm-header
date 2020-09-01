import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.less'
import './styles/iconfont.css'

// import Vant from 'vant'

import { Button } from 'vant'

// import 'vant/lib/index.css'
// Vue.use(Vant)
Vue.use(Button)
// import Button from 'vant/lib/button'
// import 'vant/lib/button/style'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
