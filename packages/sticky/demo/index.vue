<template>
  <div class="demo-sticky">
    <demo-block title="上下滑动以查看效果">
      <i-sticky :top="0">
        <i-tag type="info">top: 0</i-tag>
      </i-sticky>
      <p v-for="item in 3">{{ item }}</p>
      <i-sticky :top="60">
        <i-tag type="warning">top: 60px</i-tag>
      </i-sticky>
      <p v-for="item in 6">{{ item }}</p>
      <i-sticky :top="100">
        <img src="https://s1.ax2x.com/2018/11/10/5m6blY.jpg" alt="5m6blY.jpg" style="border: 1px solid #eee;" />
      </i-sticky>
      <p v-for="item in 8">{{ item }}</p>
      <i-sticky :top="300">
        <i-tag type="success">top: 300px</i-tag>
      </i-sticky>
      <p v-for="item in 9">{{ item }}</p>
      <i-sticky :top="350">
        <i-tag type="danger">top: 350px</i-tag>
      </i-sticky>
      <p v-for="item in 20">{{ item }}</p>
    </demo-block>
  </div>
</template>
