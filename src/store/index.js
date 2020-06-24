import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import App from './App'
import Music from './Music'

export default new Vuex.Store({
  modules: {
    App,
    Music
  }
})
