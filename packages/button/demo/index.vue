<template>
  <div class="demo-button">
    <demo-block title="按钮类型">
      <i-button type="default">默认按钮</i-button>
      <i-button type="primary">主要按钮</i-button>
      <i-button type="info">信息按钮</i-button>
      <i-button type="danger">危险按钮</i-button>
      <i-button type="warning">警告按钮</i-button>
    </demo-block>
    <demo-block title="空心按钮">
      <i-button type="primary" plain>空心按钮</i-button>
      <i-button type="danger" plain>空心按钮</i-button>
    </demo-block>
    <demo-block title="虚线按钮">
      <i-button type="primary" dashed>虚线按钮</i-button>
      <i-button type="danger" dashed>虚线按钮</i-button>
    </demo-block>
    <demo-block title="圆形按钮">
      <i-button type="primary" circle><i-icon name="search" /></i-button>
      <i-button type="danger" circle><i-icon name="search" /></i-button>
    </demo-block>
    <demo-block title="圆角按钮">
      <i-button type="primary" round>圆角按钮</i-button>
      <i-button type="danger" round>圆角按钮</i-button>
    </demo-block>
    <demo-block title="按钮状态">
      <i-button type="primary" disabled>禁用状态</i-button>
      <i-button type="danger" loading>加载状态</i-button>
    </demo-block>
    <demo-block title="自定义颜色">
      <i-button color="steelblue">自定义颜色</i-button>
      <i-button color="whitesmoke" text-color="rosybrown" round>自定义颜色</i-button>
      <i-button color="thistle" dashed circle><i-icon name="heart-o" /></i-button>
    </demo-block>
    <demo-block title="按钮尺寸">
      <section style="padding:0 14px">
        <i-button type="default" size="large">大号按钮</i-button>
      </section>
      <i-button type="default" size="normal">正常按钮</i-button>
      <i-button type="default" size="small">小型按钮</i-button>
      <i-button type="default" size="mini">迷你按钮</i-button>
    </demo-block>
    <br>
    <br>
    <br>
  </div>
</template>

<style lang="scss" scoped>
.demo-button {
  .i-button {
    margin-bottom: 10px;
  }
}
</style>

