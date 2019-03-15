<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <i-nav-bar v-show="showNavBar" fixed :title="title" left-arrow @click-left="goBack" @click-right="$router.push('/')">
      <i class="fa fa-fw fa-home" style="fontSize: 18px; marginRight: 10px" slot="right"></i>
    </i-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$route.name
    },
    showNavBar() {
      return !this.$route.meta.hideNavBar
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #fafafa;
  color: #34495e;
  font-size: 14px;
  -webkit-tap-highlight-color: transparent;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
