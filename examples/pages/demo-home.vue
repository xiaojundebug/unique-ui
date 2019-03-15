<template>
  <div class="demo-home">
    <h1 class="title"><img src="../assets/images/logo2.png" alt="logo" class="logo"></h1>
    <p class="desc">移动端 Vue 组件库</p>
    <demo-nav v-for="(group, index) in navConfig" :key="index" :data="group" />
  </div>
</template>

<script>
import 'highlight.js/styles/solarized-dark.css'
import DemoNav from '../components/demo-nav'
import navConfig from 'examples/nav.config'

export default {
  name: 'App',
  components: {
    DemoNav
  },
  data() {
    return {
      navConfig: navConfig.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-home {
  height: 100%;
  padding: 15px;
  overflow-y: auto;
  .title {
    margin: 50px 0 0 0;
    text-align: center;
    .logo {
      height: 130px;
    }
  }
  .desc {
    margin: 20px 0 50px 0;
    text-align: center;
  }
}
</style>
