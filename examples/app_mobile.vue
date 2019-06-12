<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <!-- <div class="touch-point" /> -->

    <i-nav-bar
      v-show="showNavBar"
      fixed
      :title="title"
      left-arrow
      @click-left="goBack"
      @click-right="$router.push('/')"
    >
      <i class="fa fa-fw fa-home" style="fontSize: 18px; marginRight: 10px" slot="right"></i>
    </i-nav-bar>
    <router-view></router-view>

    <template v-if="!isMobile">
      <i-button class="float-button" @click="showQRCode" color="#88dfb9" circle>
        <i-icon name="qrcode" size="23px"/>
      </i-button>
      <i-modal v-model="show" close-on-click-overlay confirm-text="CLOSE" style="width:250px">
        <img :src="QRCodeDataURL" alt="qrcode" style="display:block;width:100%">
      </i-modal>
    </template>
  </div>
</template>

<script>
import { isMobile } from './utils'
import QRCode from 'qrcode'

export default {
  name: 'App',
  data() {
    return {
      isMobile,
      show: false,
      QRCodeDataURL: ''
    }
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
    },
    showQRCode() {
      QRCode.toDataURL(location.href, {
        width: 250,
        color: {
          dark: '#197777'
        }
      }).then(url => {
        this.QRCodeDataURL = url
      })
      this.show = true
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
  cursor: default !important;
  user-select: none;
}

#app {
  .float-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 9;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    opacity: 0.3;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  .i-button:not(.i-button--large) {
    margin-left: 1rem !important;
  }
}

// .touch-point {
//   position: absolute;
//   z-index: 9999;
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   background-color: #000;
//   opacity: 0;
//   transition: opacity 80ms;
//   pointer-events: none;
// }

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
