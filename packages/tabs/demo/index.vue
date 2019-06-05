<template>
  <div class="demo-tab">
    <demo-block title="简单用法">
      <i-tab v-model="active1" @change="(index) => { this.$toast('Current: ' + index) }">
        <i-tab-pane label="Vue">Vue</i-tab-pane>
        <i-tab-pane label="React">React</i-tab-pane>
        <i-tab-pane label="Angular">Angular</i-tab-pane>
      </i-tab>
    </demo-block>
    <demo-block title="样式风格">
      <i-tab v-model="active2" type="card" color="#f86f74">
        <i-tab-pane label="Vue">Vue</i-tab-pane>
        <i-tab-pane label="React">React</i-tab-pane>
        <i-tab-pane label="Angular">Angular</i-tab-pane>
      </i-tab>
    </demo-block>
    <demo-block title="横向滚动">
      <i-tab v-model="active3" color="#88dfb9" active-color="#88dfb9" inactive-color="#999" animated>
        <i-tab-pane label="洗护">洗护</i-tab-pane>
        <i-tab-pane label="生鲜">生鲜</i-tab-pane>
        <i-tab-pane label="男装">男装</i-tab-pane>
        <i-tab-pane label="女装">女装</i-tab-pane>
        <i-tab-pane label="手机">手机</i-tab-pane>
        <i-tab-pane label="零食">零食</i-tab-pane>
        <i-tab-pane label="果饮">果饮</i-tab-pane>
      </i-tab>
    </demo-block>
    <demo-block title="自定义标签">
      <i-tab v-model="active4" color="#ffb572" active-color="#ffb572">
        <i-tab-pane>
          <span slot="label"><i class="fa fa-fw fa-tag"></i>&nbsp;label1</span>
          label1
        </i-tab-pane>
        <i-tab-pane>
          <span slot="label"><i class="fa fa-fw fa-tag"></i>&nbsp;label2</span>
          label2
        </i-tab-pane>
      </i-tab>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: 0,
      active2: 0,
      active3: 0,
      active4: 0
    }
  }
}
</script>

<style lang='scss'>
.demo-tab {
  .i-tab__panel {
    // font-size: 12px;
  }
}
</style>
