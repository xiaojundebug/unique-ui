<template>
  <div
    :class="classList"
    @click.stop="toggle"
  >
    <slot
      name="icon"
      :checked="checked"
    >
      <i
        class="i-radio__icon"
        :style="iconStyle"
      />
    </slot>
    <span
      class="i-radio__label"
      v-if="$slots.default"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { findParent } from 'unique-ui/packages/mixins'

export default {
  name: 'IRadio',
  mixins: [findParent],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    disabled: Boolean,
    color: String,
    value: [Boolean, Number, String]
  },
  computed: {
    classList() {
      return [
        'i-radio',
        {
          'i-radio--disabled': this.isDisabled,
          'i-radio--checked': this.checked
        }
      ]
    },
    iconStyle() {
      return {
        color: this.color
      }
    },
    checked() {
      return this.parent && this.parent.value === this.value
    },
    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled
    }
  },
  created() {
    this.findParent('IRadioGroup')
  },
  methods: {
    toggle() {
      if (!this.isDisabled && !this.checked) {
        this.parent.$emit('change', this.value)
      }
    }
  }
}
</script>

