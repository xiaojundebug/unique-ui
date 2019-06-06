<template>
  <header class="demo-header">
    <div class="demo-header__left" @click="$emit('click-left')">
      <i class="fa fa-fw fa-angle-left"></i>
    </div>
    <div class="demo-header__title">{{ title }}</div>
    <div class="demo-header__right">
      <i class="fa fa-fw fa-home"></i>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-header {
  position: relative;
  height: 50px;
  padding: 0 0.8em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  .demo-header__left {
    width: 30px;
    i {
      font-size: 24px;
    }
  }
  .demo-header__right {
    width: 30px;
    i {
      font-size: 18px;
    }
  }
}
</style>

