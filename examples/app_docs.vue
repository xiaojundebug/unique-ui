<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <doc-header />
    <doc-main>
      <doc-nav @click="handleNavChange" />
      <doc-container>
        <router-view />
      </doc-container>
      <doc-simulator :src="simulatorUrl" />
    </doc-main>
  </div>
</template>

<script>
import 'highlight.js/styles/solarized-dark.css'
import DocHeader from './components/doc-header'
import DocMain from './components/doc-main'
import DocNav from './components/doc-nav'
import DocContainer from './components/doc-container'
import DocSimulator from './components/doc-simulator'

export default {
  name: 'App',
  components: {
    DocHeader,
    DocMain,
    DocNav,
    DocContainer,
    DocSimulator
  },
  data() {
    return {
      simulatorUrl: `mobile.html${location.hash}`
    }
  },
  methods: {
    handleNavChange(routePath) {}
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
