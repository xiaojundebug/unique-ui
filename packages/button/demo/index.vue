<template>
  <div class="demo-button">
    <demo-block title="按钮类型">
      <div class="demo-button__row">
        <i-button type="default">默认按钮</i-button>
        <i-button type="primary">主要按钮</i-button>
      </div>
    </demo-block>
    <demo-block title="使用图标">
      <div class="demo-button__row">
        <i-button type="default">
          <i-icon name="search"></i-icon>
          <span>搜索</span>
        </i-button>
        <i-button type="default">
          <i-icon name="upload"></i-icon>
          <span>上传</span>
        </i-button>
      </div>
    </demo-block>
    <demo-block title="禁用状态">
      <div class="demo-button__row">
        <i-button type="primary" disabled>禁用状态</i-button>
      </div>
    </demo-block>
    <demo-block title="加载状态">
      <div class="demo-button__row">
        <i-button type="default" loading>加载状态</i-button>
      </div>
    </demo-block>
    <demo-block title="圆角按钮">
      <div class="demo-button__row">
        <i-button type="default" round>圆角按钮</i-button>
      </div>
    </demo-block>
    <demo-block title="按钮尺寸">
      <div class="demo-button__row">
        <i-button type="default" size="large">大号按钮</i-button>
      </div>
      <div class="demo-button__row">
        <i-button type="default" size="normal">正常按钮</i-button>
        <i-button type="default" size="small">小型按钮</i-button>
        <i-button type="default" size="mini">迷你按钮</i-button>
      </div>
    </demo-block>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-button {
  &__row {
    padding: 0 1em 1em 1em;
    .i-button:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>

