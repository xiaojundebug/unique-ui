<template>
  <div class="demo-nav" :class="{ 'demo-nav--expand': expand }">
    <div class="demo-nav__title" @click="toggleExpand">
      <span>{{ data.groupName }}</span>
      <i class="fa fa-lg fa-angle-down"></i>
    </div>
    <div class="demo-nav__collapse" :style="{ height: `${expand ? data.list.length * 50 : 0}px` }">
      <div class="demo-nav__item" v-for="nav in data.list" @click="goTo(nav.routePath)">
        <span>{{ nav.name }}</span>
        <i class="fa fa-lg fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default() {
        return {
          groupName: '',
          list: []
        }
      }
    }
  },
  data() {
    return {
      expand: false
    }
  },
  methods: {
    toggleExpand() {
      this.expand = !this.expand
    },
    goTo(routePath) {
      this.$router.push(routePath)
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-nav {
  background-color: #fff;
  margin-bottom: 12px;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  &.demo-nav--expand .demo-nav__title {
    color: #419aff;
    i {
      transform: rotate(-180deg);
    }
  }
  &:active {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.03);
  }
  .demo-nav__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    font-size: 16px;
    transition: color 0.3s;
    i {
      transition: transform 0.3s;
      color: #ccc;
    }
  }
  .demo-nav__collapse {
    transition: height 0.3s ease;
    overflow: hidden;
    .demo-nav__item {
      position: relative;
      height: 50px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:active {
        opacity: 0.5;
      }
      &:after {
        content: '';
        display: inline-block;
        height: 0;
        position: absolute;
        top: 0;
        right: 0;
        left: 20px;
        border-bottom: 1px solid #f1f1f1;
      }
      i {
        color: #ccc;
      }
    }
  }
}
</style>
