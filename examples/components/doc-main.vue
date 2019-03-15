<template>
  <main class="doc-main">
    <div class="doc-main__inner">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.doc-main {
  min-width: 1500px;
  height: 0;
  flex: 1 1;
  .doc-main__inner {
    width: 1500px;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
  }
}
</style>
