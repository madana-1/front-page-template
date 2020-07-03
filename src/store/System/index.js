const getInitialState = () => ({
  battery: {
    amount: 0,
    isCharging: false
  },
  bluetooth: {
    isEnabled: false
  },
  signal: {
    level: 0
  },
  wifi: {
    level: 0,
    isEnabled: false
  }
})

export default {
  namespaced: true,

  state: getInitialState(),

  getters: {
    battery: ({ battery }) => battery,
    bluetooth: ({ bluetooth }) => bluetooth,
    signal: ({ signal }) => signal,
    wifi: ({ wifi }) => wifi
  },

  mutations: {
    SET_BATTERY_INFOS (state, battery) {
      state.battery = battery
    },

    SET_BLUETOOTH_INFOS (state, bluetooth) {
      state.bluetooth = bluetooth
    },

    SET_SIGNAL_INFOS (state, signal) {
      state.signal = signal
    },

    SET_WIFI_INFOS (state, wifi) {
      state.wifi = wifi
    }
  },

  actions: {
    setBatteryInfos ({ commit }, { percent, chargestate }) {
      commit('SET_BATTERY_INFOS', {
        amount: percent,
        isCharging: chargestate == 1
      })
    },

    setBluetoothInfos ({ commit }, { bluetoothEnabled }) {
      commit('SET_BLUETOOTH_INFOS', {
        isEnabled: bluetoothEnabled
      })
    },

    setSignalInfos ({ commit }, { signalBars }) {
      commit('SET_SIGNAL_INFOS', {
        level: signalBars
      })
    },

    setWiFiInfos ({ commit }, { wifiBars, wifiName }) {
      commit('SET_WIFI_INFOS', {
        level: wifiBars,
        isEnabled: wifiName !== 'NA'
      })
    },
  }
}
