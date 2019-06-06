<template>
  <div class="demo-switch">
    <demo-block title="简单用法" padded>
      <i-switch v-model="value1"></i-switch>
    </demo-block>
    <demo-block title="禁用状态" padded>
      <i-switch v-model="value2" disabled></i-switch>
    </demo-block>
    <demo-block title="加载状态" padded>
      <i-switch v-model="value3" loading></i-switch>
    </demo-block>
    <demo-block title="自定义颜色" padded>
      <i-switch v-model="value4" active-color="#409eff" inactive-color="#f86f74"></i-switch>
    </demo-block>
    <demo-block title="搭配 Cell 使用">
      <i-cell-group>
        <i-cell title="允许通知">
          <i-switch slot="value" v-model="value5" active-color="#24bc59" inactive-color="#f86f74"></i-switch>
        </i-cell>
      </i-cell-group>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: false
    }
  }
}
</script>
