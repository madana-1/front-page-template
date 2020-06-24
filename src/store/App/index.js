const getInitialState = () => ({
  apps: []
})

export default {
  namespaced: true,

  state: getInitialState(),

  getters: {
    apps: ({ apps }) => apps,
  },

  mutations: {
    SET_APPS(state, apps) {
      state.apps = apps
    },

    REMOVE_APP(state, bundle) {
      state.apps = state.apps.filter(app => app.bundle !== bundle)
    }
  },

  actions: {
    setApps ({ commit }, apps) {
      commit('SET_APPS', apps)
    },

    removeApp ({ commit }, bundle) {
      commit('REMOVE_APP', bundle)
    }
  }
}
