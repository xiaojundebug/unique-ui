<template>
  <div class="demo-slide">
    <demo-block title="简单用法">
      <i-slide style="height: 200px;">
        <i-slide-item>1</i-slide-item>
        <i-slide-item>2</i-slide-item>
        <i-slide-item>3</i-slide-item>
        <i-slide-item>4</i-slide-item>
      </i-slide>
    </demo-block>
    <demo-block title="自定义指示器">
      <i-slide style="height: 200px;">
        <i-slide-item>1</i-slide-item>
        <i-slide-item>2</i-slide-item>
        <i-slide-item>3</i-slide-item>
        <i-slide-item>4</i-slide-item>
        <div slot="indicator" slot-scope="props" style="position: absolute; bottom: 10px; right: 10px; padding: 2px 6px; background: rgba(0, 0, 0, .2); color: #fff;">
          {{ props.active + 1 }} / 4
        </div>
      </i-slide>
    </demo-block>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../theme/common/var';

.demo-slide {
  .i-slide-item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
    color: #fff;
    &:nth-child(odd) {
      background-color: lighten($primary-color, 20%);
    }
    &:nth-child(even) {
      background-color: lighten($primary-color, 30%);
    }
  }
}
</style>
