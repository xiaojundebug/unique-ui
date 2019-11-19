<template>
  <nav class="doc-nav">
    <div class="doc-nav__group" v-for="group in navConfig">
      <h3>{{ group.groupName }}</h3>
      <ul>
        <li class="doc-nav__item" v-for="nav in group.list">
          <router-link
            @click.native="$emit('click', nav.routePath)"
            :to="nav.routePath"
          >{{ nav.name }}</router-link>
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
$primary-color: #ff924a;

.doc-nav {
  width: 200px;
  height: 100%;
  padding: 35px 0 35px 15px;
  border-right: 1px solid #f1f4f8;
  overflow-y: auto;
  h3 {
    color: #6a7b83;
    font-weight: 300;
    font-size: 20px;
  }
  .doc-nav__item {
    a {
      position: relative;
      display: block;
      height: 40px;
      line-height: 40px;
      color: #455a64;
      font-size: 14px;
      &.router-link-active,
      &:hover {
        color: $primary-color;
      }
      &.router-link-active::before {
        content: '';
        height: 50%;
        width: 3px;
        background-color: $primary-color;
        position: absolute;
        left: -15px;
        top: 25%;
      }
    }
  }
}
</style>

