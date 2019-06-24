<template>
  <div class="demo-uploader">
    <demo-block title="简单用法" padded>
      <i-uploader @change="onChange">
        <i-icon name="camera" size="20px"></i-icon>
      </i-uploader>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: ''
    }
  },
  methods: {
    onChange(data) {
      this.src = data[0].content
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-uploader {
  .uploader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80px;
    height: 80px;
    border: 1px solid #eee;
    border-radius: 2px;
    background-color: #fff;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    span {
      font-size: 12px;
      margin-top: 10px;
    }
  }
}
</style>

