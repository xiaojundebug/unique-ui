<template>
  <div
    :class="classList"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import { findParent } from 'unique-ui/packages/mixins'

export default {
  name: 'ITabItem',
  mixins: [findParent],
  props: {
    label: String
  },
  data() {
    return {
      value: null
    }
  },
  computed: {
    classList() {
      return ['i-tab__panel', { 'i-tab__panel--active': this.active }]
    },
    active() {
      return this.parent.value === this.value
    },
    style() {
      return {
        display: this.parent.value === this.value ? 'block' : 'none'
      }
    }
  },
  created() {
    this.findParent('ITab')
  },
  mounted() {},
  methods: {}
}
</script>

