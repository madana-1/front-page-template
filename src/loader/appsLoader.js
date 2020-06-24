let appLoaded = false

export default store => {
  window.loadApps = () => {
    if (!appLoaded) {
      store.dispatch('App/setApps', FPI.apps.all)
      appLoaded = true
    }
  }

  window.loadFolders = () => {
  }

  window.appsInstalled = () => {
    store.dispatch('App/setApps', FPI.apps.all)
  }

  window.badgeUpdated = bundle => {
  }
}
