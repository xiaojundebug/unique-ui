<template>
  <div
    :class="classList"
    @click="onClick"
  >
    <div
      v-if="icon || $slots['icon']"
      class="i-cell__icon"
    >
      <slot name="icon">
        <i :class="`fa fa-fw fa-${this.icon}`"/>
      </slot>
    </div>
    <div
      v-if="hdIsShow"
      class="i-cell__hd">
      <slot name="title">
        <span class="i-cell__title">{{ title }}</span>
        <span
          class="i-cell__desc"
          v-if="desc"
        >{{ desc }}</span>
      </slot>
    </div>
    <div class="i-cell__bd">
      <slot>
        <slot name="value">
          <span class="i-cell__value">{{ value }}</span>
        </slot>
      </slot>
    </div>
    <div
      v-if="clickable || $slots['right-icon']"
      class="i-cell__ft"
    >
      <slot name="right-icon">
        <i class="i-cell__arrow fa fa-fw fa-angle-right"></i>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ICell',
  props: {
    icon: String,
    title: String,
    value: String,
    desc: String,
    isLink: Boolean,
    to: [Number, Object],
    replace: Boolean
  },
  computed: {
    classList() {
      return [
        'i-cell',
        {
          'i-cell--clickable': this.clickable
        }
      ]
    },
    leftIconClassName() {
      return `fa fw fa-${this.icon}`
    },
    clickable() {
      return this.isLink || this.to
    },
    hdIsShow() {
      return this.title || this.$slots.title || this.desc
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
      if (this.to) this.$router[this.replace ? 'replace' : 'push'](this.to)
    }
  }
}
</script>
