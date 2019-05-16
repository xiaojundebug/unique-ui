<template>
  <div class="demo-pupup">
    <demo-block title="位置">
      <div class="wrapper">
        <i-button @click="show1 = true">中</i-button>
        <i-button @click="show2 = true">上</i-button>
        <i-button @click="show3 = true">右</i-button>
        <i-button @click="show4 = true">下</i-button>
        <i-button @click="show5 = true">左</i-button>
      </div>
    </demo-block>
    <demo-block title="样式设置">
      <div class="wrapper">
        <i-button @click="show6 = true">show</i-button>
      </div>
    </demo-block>
    <i-popup :show="show1" @clickOverlay="show1 = false" position="center">
      <div class="popup-demo-content" style="height:200px">中</div>
    </i-popup>
    <i-popup :show="show2" @clickOverlay="show2 = false" position="top">
      <div class="popup-demo-content" style="height:100px">上</div>
    </i-popup>
    <i-popup :show="show3" @clickOverlay="show3 = false" position="right">
      <div class="popup-demo-content" style="width:50vw">右</div>
    </i-popup>
    <i-popup :show="show4" @clickOverlay="show4 = false" position="bottom">
      <div class="popup-demo-content" style="height:50vh">下</div>
    </i-popup>
    <i-popup :show="show5" @clickOverlay="show5 = false" position="left">
      <div class="popup-demo-content" style="width:50vw">左</div>
    </i-popup>
    <i-popup :show="show6" @clickOverlay="show6 = false" position="center" transition-name="zoomInUp" :overlayOpacity="0.85" overlayColor="#fff">
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
  .wrapper {
    padding: 0 1em;
  }
  .popup-demo-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 46px;
    background-color: #d6e09e;
    color: #fff;
  }
  .zoomInUp-enter-active,
  .zoomInUp-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .zoomInUp-enter,
  .zoomInUp-leave-to {
    opacity: 0;
    transform: translate3d(-50%, 100%, 0) scale(0);
  }

}
</style>
