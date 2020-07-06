const zeroPadding = number => number < 10 ? `0${number}` : number
const getHours = () => zeroPadding(new Date().getHours())
const getMinutes = () => zeroPadding(new Date().getMinutes())

export default {
  data () {
    return {
      clock: {
        interval: null,
        hours: getHours(),
        minutes: getMinutes()
      }
    }
  },

  methods: {
    startClock () {
      this.clock.interval = setInterval(() => {
        this.clock.hours = getHours()
        this.clock.minutes = getMinutes()
      }, 1000)
    },

    stopClock () {
      clearInterval(this.clock.interval)
    }
  }
}
