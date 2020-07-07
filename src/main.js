import '@/ext'

import Vue from 'vue'
import Render from './render'
import store from './store'
import loader from './loader'
import './plugin/FPI'

loader(store)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Render)
}).$mount('#app')
