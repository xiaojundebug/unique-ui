import Overlay from 'packages/overlay'

export default {
  props: {
    show: Boolean,
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.5
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    transitionName: String
  },
  mounted() {
    if (this.show && this.overlay) {
      Overlay.open(this)
    }
  },
  beforeDestroy() {
    Overlay.close(this)
  },
  watch: {
    show(val) {
      if (val && this.overlay) {
        Overlay.open(this)
      } else {
        Overlay.close(this)
      }
    }
  }
}
