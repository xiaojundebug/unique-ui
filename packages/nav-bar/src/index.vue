<template>
  <div :class="classList">
    <div class="i-nav-bar__inner">
      <div
        class="i-nav-bar__left"
        @click="handleClickLeft">
        <slot name="left">
          <i
            class="i-nav-bar__arrow fa fa-fw fa-angle-left"
            v-if="leftArrow"></i>
          <span
            class="i-nav-bar__text"
            v-if="leftText">{{ leftText }}</span>
        </slot>
      </div>
      <div class="i-nav-bar__title ellipsis">
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        class="i-nav-bar__right"
        @click="handleClickRight">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'INavBar',
  props: {
    title: String,
    leftArrow: Boolean,
    leftText: String,
    fixed: Boolean
  },
  computed: {
    classList() {
      return [
        'i-nav-bar',
        {
          'i-nav-bar--fixed': this.fixed
        }
      ]
    }
  },
  methods: {
    handleClickLeft(ev) {
      this.$emit('click-left', ev)
    },
    handleClickRight(ev) {
      this.$emit('click-right', ev)
    }
  }
}
</script>
