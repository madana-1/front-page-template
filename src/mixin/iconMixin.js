import getTouchDimension from '@/util/getTouchDimension'

export default {
  data () {
    return {
      isHolding: false,
      startDimension: null,
      endDimension: null,
      timeoutId: null
    }
  },

  methods: {
    onTouchStart (e) {
      this.startDimension = getTouchDimension(e)
      this.timeoutId = setTimeout(() => {
        this.$emit('hold')
        this.timeoutId = null
      }, 1000)
    },

    onTouchMove (e) {
      if (this.startDimension) {
        this.endDimension = getTouchDimension(e)
      }
    },

    onTouchEnd () {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null

        const { startDimension, endDimension } = this

        let doClick = false
        if (startDimension) {
          if (endDimension) {
            const [ startX, startY ] = startDimension
            const [ endX, endY ] = endDimension
            const diffX = (startX - endX).naturalize()
            const diffY = (startY - endY).naturalize()
            if (diffX < 15 && diffY < 15) {
              doClick = true
            }
          } else {
            doClick = true
          }
        }

        this.startDimension = null
        this.endDimension = null
        if (doClick) {
          this.onClick()
        }
      }
    }
  }
}
