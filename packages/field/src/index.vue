<template>
  <i-cell
    :class="classList"
    :title="label"
    :icon="icon">
    <div
      v-if="$slots['icon']"
      slot="icon">
      <slot name="icon"></slot>
    </div>
    <template>
      <textarea
        v-if="type === 'textarea'"
        v-bind="$attrs"
        v-on="listeners"
        ref="control"
        :class="controlClassList"
        :style="controlStyle"
        :value="value"
        :readonly="readonly"
      ></textarea>
      <input
        v-else
        v-bind="$attrs"
        v-on="listeners"
        ref="control"
        :class="controlClassList"
        :style="controlStyle"
        :type="type"
        :value="value"
        :readonly="readonly"
      >
      <i
        v-if="showClear"
        class="i-field__clear icon icon-close-circle"
        @touchstart.prevent="onClear"></i>
    </template>
    <div
      v-if="$slots['right-icon']"
      slot="right-icon">
      <slot name="right-icon"></slot>
    </div>
  </i-cell>
</template>

<script>
export default {
  name: 'IField',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'input'
    },
    icon: String,
    value: [String, Number],
    label: String,
    labelAlign: String,
    inputAlign: String,
    clearable: Boolean,
    readonly: Boolean,
    bordered: Boolean
  },
  data() {
    return {
      focused: false
    }
  },
  computed: {
    classList() {
      return [
        'i-field',
        {
          bordered: this.bordered
        }
      ]
    },
    controlClassList() {
      return ['i-field__control']
    },
    labelStyle() {
      return {
        'text-align': this.labelAlign
      }
    },
    controlStyle() {
      return {
        'text-align': this.inputAlign
      }
    },
    showClear() {
      return this.clearable && this.focused && this.value && !this.readonly
    },
    listeners() {
      return {
        ...this.$listeners,
        focus: this.onFocus,
        blur: this.onBlur,
        input: this.onInput
      }
    }
  },
  methods: {
    onFocus(ev) {
      this.focused = true
      this.$emit('focus', ev)
      if (this.readonly) this.$refs['control'].blur()
    },
    onBlur(ev) {
      this.focused = false
      this.$emit('blur', ev)
    },
    onInput(ev) {
      this.$emit('input', ev.target.value)
    },
    onClear() {
      this.$emit('input', '')
      this.$emit('clear')
    }
  }
}
</script>
