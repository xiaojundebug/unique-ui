<template>
  <i-popup
    :class="toastClassName"
    :style="toastStyle"
    :show="show"
    :overlay="overlay"
    :overlay-opacity="0"
    transition-name="fadeIn"
    @clickOverlay="onClickOverlay"
    @touchmove.prevent
  >
    <div class="toast__icon">
      <slot name="icon">
        <i-loading
          v-if="type == 'loading'"
          type="ios"
          color="#fff"></i-loading>
        <i
          v-else-if="type == 'success'"
          class="icon icon-success"></i>
        <i
          v-else-if="type == 'fail'"
          class="icon icon-fail"></i>
      </slot>
    </div>
    <div
      v-if="text || $slots.text"
      class="toast__text ellipsis">
      <slot name="text">{{ text }}</slot>
    </div>
  </i-popup>
</template>

<script>
export default {
  name: 'IToast',
  model: {
    prop: 'show',
    event: 'toggle'
  },
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'normal'
    },
    text: String
  },
  computed: {
    toastClassName() {
      return [
        'i-toast',
        {
          [`i-toast--${this.type}`]: this.type
        }
      ]
    },
    toastStyle() {
      return {}
    }
  },
  methods: {
    onClickOverlay(val) {
      // this.$emit('toggle', val)
    }
  }
}
</script>
