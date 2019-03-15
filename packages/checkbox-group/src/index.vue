<template>
  <div class="i-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ICheckboxGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: Boolean,
    max: {
      type: Number,
      default: 0
    }
  }
}
</script>
