<template>
  <nav class="doc-nav">
    <div class="doc-nav__group" v-for="group in navConfig">
      <h3>{{ group.groupName }}</h3>
      <ul>
        <li class="doc-nav__item" v-for="nav in group.list">
          <router-link @click.native="$emit('click', nav.routePath)" :to="nav.routePath">{{ nav.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import navConfig from 'examples/nav.config'
export default {
  data() {
    return {
      navConfig
    }
  }
}
</script>

<style lang="scss" scoped>
.doc-nav {
  width: 200px;
  height: 100%;
  padding: 35px 0;
  border-right: 1px solid #f1f4f8;
  overflow-y: auto;
  h3 {
    color: #6a7b83;
    font-weight: 300;
    text-shadow: 0 0 0.5px rgba(0, 0, 0, 1);
    font-size: 20px;
  }
  .doc-nav__item {
    a {
      display: block;
      height: 40px;
      line-height: 40px;
      color: #455a64;
      opacity: 0.8;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      transition: opacity 0.2s;
      &.router-link-active,
      &:hover {
        color: #ff7e4a;
      }
    }
  }
}
</style>

