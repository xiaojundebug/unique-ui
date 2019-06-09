<template>
  <div class="i-table i-1px--t i-1px--b">
    <ul class="i-table__tr">
      <li
        class="i-table__th ellipsis"
        :style="getStyle(item)"
        v-for="item in columns"
        :key="item.key"
      >
        {{ item.title }}
      </li>
    </ul>
    <ul
      class="i-table__tr i-1px--t"
      v-for="(row, index) in data"
      :key="index"
      @click="$emit('click-row', row)"
    >
      <li
        class="i-table__td ellipsis"
        :style="getStyle(item)"
        v-for="item in columns"
        :key="item.key"
        v-html="item.render ? item.render(row[item.key]) : row[item.key]"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ITable',
  props: {
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getStyle(item) {
      const { width, align } = item

      return {
        width: (width || 100) + 'px',
        textAlign: align || 'left'
      }
    }
  }
}
</script>

