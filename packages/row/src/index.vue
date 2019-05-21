<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IRow',
  props: {
    gutter: [Number, String],
    justify: String,
    align: String
  },
  computed: {
    classList() {
      return [
        'i-row',
        {
          [`i-row--justify-${this.justify}`]: this.justify,
          [`i-row--align-${this.align}`]: this.align
        }
      ]
    }
  },
  methods: {}
}
</script>

