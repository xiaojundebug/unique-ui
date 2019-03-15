<template>
  <div
    :class="classList"
    @click.stop="toggle">
    <slot
      name="icon"
      :value="value"><i
        class="i-checkbox__icon icon-checkmark"
        :style="iconStyle" /></slot>
    <span
      class="i-checkbox__label"
      v-if="$slots.default"><slot></slot></span>
  </div>
</template>

<script>
import { findParent } from 'packages/mixins'

export default {
  name: 'ICheckbox',
  mixins: [findParent],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    disabled: Boolean,
    color: String,
    value: [Boolean, Number, String],
    trueValue: {
      type: [Boolean, Number, String],
      default() {
        return true
      }
    },
    falseValue: {
      type: [Boolean, Number, String],
      default() {
        return false
      }
    },
    name: [String, Number]
  },
  computed: {
    classList() {
      return [
        'i-checkbox',
        {
          'i-checkbox--disabled': this.isDisabled,
          'i-checkbox--checked': this.checked
        }
      ]
    },
    iconStyle() {
      if (!this.value || this.isDisabled) return
      return {
        backgroundColor: this.color,
        borderColor: this.color
      }
    },
    checked() {
      return this.parent
        ? this.parent.value.indexOf(this.name) !== -1
        : this.value === this.trueValue
    },
    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled
    }
  },
  created() {
    this.findParent('ICheckboxGroup')
  },
  methods: {
    toggle() {
      if (this.isDisabled) return
      if (!this.parent) {
        this.$emit('change', this.checked ? this.falseValue : this.trueValue)
        return
      }

      const { parent } = this
      const value = parent.value.slice()

      if (!this.checked) {
        if (parent.max && value.length >= parent.max) return
        value.push(this.name)
      } else {
        value.splice(value.indexOf(this.name), 1)
      }
      parent.$emit('change', value)
    }
  }
}
</script>
