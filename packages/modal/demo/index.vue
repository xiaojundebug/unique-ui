<template>
  <div class="demo-modal">
    <demo-block title="js调用">
      <div class="wrapper">
        <i-button @click="$modal.alert('Are you ok?', { title: '👽' })">alert</i-button>
        <i-button @click="$modal.confirm('大郎，起来喝药了', { title: '提示' })">confimr</i-button>
      </div>
    </demo-block>
    <demo-block title="异步关闭">
      <div class="wrapper">
        <i-button @click="asyncClose">异步关闭</i-button>
      </div>
    </demo-block>
    <demo-block title="组件调用">
      <div class="wrapper">
        <i-button @click="show = true">组件调用</i-button>
      </div>
    </demo-block>
    <i-modal v-model="show" closeOnClickOverlay confirmText="CLOSE" transition-name="modal" style="width:66%">
      <img src="https://xiaojun1994.top/images/avatar.jpg" alt="avatar" style="display:block;width:100%">
    </i-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    asyncClose() {
      this.$modal.alert('异步关闭', { title: '提示', autoClose: false }).then(close => {
        setTimeout(() => {
          close()
        }, 1000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-modal {
  .wrapper {
    padding: 0 1em;
  }
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.45s, transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
    transform: translate3d(-50%, 100%, 0) scale(0) skew(45deg, 45deg);
  }
}
</style>
