<template>
  <i
    :class="classList"
    :style="style" />
</template>

<script>
export default {
  name: 'IIcon',
  props: {
    name: String,
    size: String,
    color: String
  },
  computed: {
    classList() {
      return [
        'i-icon',
        'fa',
        'fa-fw',
        {
          [`fa-${this.name}`]: this.name
        }
      ]
    },
    style() {
      return {
        fontSize: this.size,
        color: this.color
      }
    }
  }
}
</script>

