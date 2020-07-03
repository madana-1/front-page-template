export default store => {
  window.loadSystem = () => {
  }

  window.loadSettings = settings => {
  }

  window.loadStatusBar = () => {
    const { wifiBars, wifiName, signalBars, bluetoothEnabled } = FPI.statusbar
    store.dispatch('System/setWiFiInfos', { wifiBars, wifiName })
    store.dispatch('System/setSignalInfos', { signalBars })
    store.dispatch('System/setBluetoothInfos', { bluetoothEnabled })
  }

  window.loadBattery = () => {
    store.dispatch('System/setBatteryInfos', FPI.battery)
  }

  window.loadMemory = () => {
  }

  window.deviceLocked = () => {
  }

  window.deviceUnlocked = () => {
  }

  window.viewRotated = direction => {
  }
}
