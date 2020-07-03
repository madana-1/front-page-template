import Vue from 'vue'

class FPI {
  static install() {
    Vue.prototype.$FPI = this
  }

  static openApp(bundle) {
    window.location = `frontpage:openApp:${bundle}`
  }

  static uninstallAp(bundle) {
    window.location = `frontpage:uninstallApp:${bundle}`
  }

  static playPrevTrack() {
    window.location = 'frontpage:prevtrack'
  }

  static playNextTrack() {
    window.location = 'frontpage:nexttrack'
  }

  static togglePlayPause() {
    window.location = 'frontpage:playmusic'
  }

  static enableBluetooth() {
    window.location = 'frontpage:enablebluetooth'
  }

  static disableBluetooth() {
    window.location = 'frontpage:disablebluetooth'
  }

  static enableWiFi() {
    window.location = 'frontpage:enablewifi'
  }

  static disableWiFi() {
    window.location = 'frontpage:disablewifi'
  }

  static searchOnGoogle(keyword) {
    const encodedKeyword = encodeURI(keyword)
    window.location = `frontpage:openURL:https://www.google.com/search?q=${encodedKeyword}`
  }
}


Vue.use(FPI)
