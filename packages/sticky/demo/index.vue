<template>
  <div class="demo-sticky">
    <demo-block title="上下滑动以查看效果">
      <p v-for="item in 3">*</p>
      <i-sticky :top="60">
        <i-tag type="info">top: 60px</i-tag>
      </i-sticky>
      <p v-for="item in 6">*</p>
      <i-sticky :top="100">
        <img src="https://s2.ax1x.com/2019/05/24/VivLrj.gif" alt="5m6blY.jpg" style="border: 1px solid #eee;" />
      </i-sticky>
      <p v-for="item in 8">*</p>
      <i-sticky :top="300">
        <i-tag type="success">top: 300px</i-tag>
      </i-sticky>
      <p v-for="item in 9">*</p>
      <i-sticky :top="350">
        <i-tag type="danger">top: 350px</i-tag>
      </i-sticky>
      <p v-for="item in 20">*</p>
    </demo-block>
  </div>
</template>
