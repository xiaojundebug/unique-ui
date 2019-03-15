<template>
  <transition name="fade">
    <div
      v-if="show"
      :class="classList"
    >{{ msg }}</div>
  </transition>
</template>

<script>
export default {
  name: 'IToast',
  props: {
    position: String
  },
  data() {
    return {
      show: false,
      msg: ''
    }
  },
  computed: {
    classList() {
      return ['i-toast', `i-toast--${this.position}`]
    }
  },
  methods: {}
}
</script>
