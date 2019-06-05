<template>
  <div
    :class="['i-tab__title', { 'i-tab__title--active': this.active }]"
    @click="$emit('click')"
    :style="getTitleStyle()"
  >
    <slot></slot>
  </div>
</template>

<script>
import { findParent } from 'unique-ui/packages/mixins'

export default {
  name: 'TabTitle',
  mixins: [findParent],
  props: {
    active: Boolean
  },
  created() {
    this.findParent('ITabs')
  },
  methods: {
    getTitleStyle() {
      const style = {}
      const { active } = this
      const { type, color, activeColor, inactiveColor, $refs } = this.parent
      const isCard = type === 'card'

      if (color) {
        if (isCard) {
          $refs.nav.style.borderColor = color
          style.borderColor = color
          style.color = color
          if (active) {
            style.backgroundColor = color
            style.color = '#fff'
          }
        }
      }

      const titleColor = active ? activeColor : inactiveColor
      if (titleColor) {
        style.color = titleColor
      }

      return style
    }
  }
}
</script>

<style>

</style>
