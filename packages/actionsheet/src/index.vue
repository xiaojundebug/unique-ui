<template>
  <i-popup
    class="i-actionsheet"
    :show="show"
    position="bottom"
    @click-overlay="onClickOverlay">
    <div
      class="i-actionsheet__header i-1px--b"
      v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <ul class="i-actionsheet__body">
      <li
        v-for="(item, index) in actions"
        :key="index"
        :class="['i-actionsheet__action', item.className, { 'i-1px--b': index < actions.length - 1, 'i-actionsheet__action--disabled': item.disabled }]"
        @click="onClick(item)"
      >{{ item.name }}</li>
    </ul>
    <div
      class="i-actionsheet__footer"
      v-if="cancelText || $slots.footer"
      @click="onCancel">
      <slot name="footer">{{ cancelText }}</slot>
    </div>
  </i-popup>
</template>

<script>
import IPopup from 'unique-ui/packages/popup'

export default {
  name: 'IActionsheet',
  components: { IPopup },
  model: {
    prop: 'show',
    event: 'toggle'
  },
  props: {
    show: Boolean,
    closeOnClickOverlay: Boolean,
    cancelText: String,
    actions: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    classList() {
      return ['i-actionsheet']
    }
  },
  methods: {
    onClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.$emit('cancel')
        this.$emit('toggle', false)
      }
    },
    onClick(data) {
      if (!data.disabled) {
        this.$emit('toggle', false)
        this.$emit('select', data)
      }
    },
    onCancel() {
      this.$emit('cancel')
      this.$emit('toggle', false)
    }
  }
}
</script>

