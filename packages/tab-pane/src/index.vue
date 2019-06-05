<template>
  <div
    :class="classList"
    :style="style"
  >
    <template v-if="shouldRender">
      <slot />
    </template>
  </div>
</template>

<script>
import { findParent } from 'unique-ui/packages/mixins'

export default {
  name: 'ITabPane',
  mixins: [findParent],
  props: {
    label: String
  },
  data() {
    return {
      index: null,
      inited: false
    }
  },
  computed: {
    classList() {
      return ['i-tab__panel', { 'i-tab__panel--active': this.active }]
    },
    style() {
      if (this.parent.animated) return
      return {
        display: this.active ? 'block' : 'none'
      }
    },
    active() {
      return this.parent.value === this.index
    },
    shouldRender() {
      return this.inited
    }
  },
  watch: {
    'parent.value'() {
      this.inited = this.inited || this.active
    }
  },
  created() {
    this.findParent('ITabs')
  },
  mounted() {},
  methods: {}
}
</script>

