<template>
  <div class="i-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IRadioGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [Boolean, Number, String],
    disabled: Boolean
  }
}
</script>
