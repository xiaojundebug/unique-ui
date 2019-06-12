<template>
  <div class="demo-pupup">
    <demo-block title="位置">
      <i-button @click="show1 = true">中</i-button>
      <i-button @click="show2 = true">上</i-button>
      <i-button @click="show3 = true">右</i-button>
      <i-button @click="show4 = true">下</i-button>
      <i-button @click="show5 = true">左</i-button>
    </demo-block>
    <demo-block title="自定义样式">
      <i-button @click="show6 = true">自定义样式</i-button>
    </demo-block>
    <i-popup :show="show1" @click-overlay="show1 = false" position="center">
      <div class="popup-demo-content" style="height:200px">中</div>
    </i-popup>
    <i-popup :show="show2" @click-overlay="show2 = false" position="top">
      <div class="popup-demo-content" style="height:100px">上</div>
    </i-popup>
    <i-popup :show="show3" @click-overlay="show3 = false" position="right">
      <div class="popup-demo-content" style="width:70vw">右</div>
    </i-popup>
    <i-popup :show="show4" @click-overlay="show4 = false" position="bottom">
      <div class="popup-demo-content" style="height:50vh">下</div>
    </i-popup>
    <i-popup :show="show5" @click-overlay="show5 = false" position="left">
      <div class="popup-demo-content" style="width:70vw">左</div>
    </i-popup>
    <i-popup
      :show="show6"
      @click-overlay="show6 = false"
      position="center"
      transition-name="fade"
      :overlay-opacity="0.85"
      overlay-color="#fff"
    >
      <div class="popup-demo-content" style="height:200px"></div>
    </i-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-pupup {
  .popup-demo-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 46px;
    background-color: #88dfb9;
    color: #fff;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
