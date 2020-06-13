import alarmsLoader from './alarmsLoader'
import appsLoader from './appsLoader'
import musicLoader from './musicLoader'
import notificationsLoader from './notificationsLoader'
import remindersLoader from './remindersLoader'
import switcherLoader from './switcherLoader'
import systemLoader from './systemLoader'
import weatherLoader from './weatherLoader'

window.FPI = {}
window.setFPIInfo = (info, label, parse) => {
  if (parse) {
    window.FPI[label] = JSON.parse(info)
  } else {
    window.FPI[label] = info
  }
}
window.FPIloaded = () => {
}

export default store => {
  alarmsLoader(store)
  appsLoader(store)
  musicLoader(store)
  notificationsLoader(store)
  remindersLoader(store)
  switcherLoader(store)
  systemLoader(store)
  weatherLoader(store)
}
