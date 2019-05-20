<template>
  <div :class="classList">
    <div class="i-tabbar__inner i-1px--t">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ITabbar',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    value: String,
    color: String,
    activeColor: String
  },
  data() {
    return {}
  },
  computed: {
    classList() {
      return [
        'i-tabbar',
        {
          'i-tabbar--fixed': this.fixed
        }
      ]
    }
  },
  methods: {
    onChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style src="../../theme/tabbar.scss"/>
