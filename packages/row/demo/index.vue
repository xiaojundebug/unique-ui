<template>
  <div class="demo-layout">
    <demo-block title="简单用法">
      <i-row>
        <i-col :span="8">span: 8</i-col>
        <i-col :span="8">span: 8</i-col>
        <i-col :span="8">span: 8</i-col>
      </i-row>
      <i-row>
        <i-col :span="5">span: 5</i-col>
        <i-col :span="15" :offset="4">span: 15, offset: 4</i-col>
      </i-row>
    </demo-block>
    <demo-block title="在列元素之间增加间距">
      <i-row :gutter="20">
        <i-col :span="8">span: 8</i-col>
        <i-col :span="8">span: 8</i-col>
        <i-col :span="8">span: 8</i-col>
      </i-row>
    </demo-block>
    <demo-block title="主轴对齐方式">
      <i-row>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
      </i-row>
      <i-row justify="center">
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
      </i-row>
      <i-row justify="end">
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
      </i-row>
      <i-row justify="space-around">
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
      </i-row>
      <i-row justify="space-between">
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
      </i-row>
    </demo-block>
    <demo-block title="交叉轴对齐方式">
      <i-row justify="center">
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span:<br>6</i-col>
      </i-row>
      <i-row justify="center" align="center">
        <i-col :span="6">span:<br>6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span: 6</i-col>
      </i-row>
      <i-row justify="center" align="bottom">
        <i-col :span="6">span: <br>6</i-col>
        <i-col :span="6">span: 6</i-col>
        <i-col :span="6">span<br>:<br>6</i-col>
      </i-row>
    </demo-block>
  </div>
</template>

<style lang="scss" scoped>
@import '../../theme/src/common/var';

.demo-layout {
  .i-col {
    line-height: 2;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;
    color: #fff;
    &:nth-child(odd) {
      background-color: #797e91;
    }
    &:nth-child(even) {
      background-color: #9599a8;
    }
  }
}
</style>
