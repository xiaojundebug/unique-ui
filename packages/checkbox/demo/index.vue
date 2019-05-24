<template>
  <div class="demo-checkbox">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-checkbox v-model="value1">{{ value1 }}</i-checkbox>
      </div>
    </demo-block>
    <demo-block title="自定义颜色">
      <div class="wrapper">
        <i-checkbox v-model="value2" color="#49b683">{{ value2 }}</i-checkbox>
      </div>
    </demo-block>
    <demo-block title="自定义状态值">
      <div class="wrapper">
        <i-checkbox v-model="value3" :true-value="1" :false-value="0">value: {{ value3 }}</i-checkbox>
      </div>
    </demo-block>
    <demo-block title="禁用">
      <div class="wrapper">
        <i-checkbox v-model="value4" disabled>disabled</i-checkbox>
      </div>
    </demo-block>
    <demo-block title="自定义图标">
      <div class="wrapper">
        <i-checkbox v-model="value5">
          <template slot="icon" slot-scope="props">
            <i-icon :name="props.value ? 'heart' : 'heart-o'" size="24px" color="#ab97c3" />
            <span>{{ props.value }}</span>
          </template>
        </i-checkbox>
      </div>
    </demo-block>
    <demo-block title="Checkbox 组">
      <div class="wrapper">
        <i-checkbox-group v-model="value6" :max="3">
          <i-checkbox name="a">a</i-checkbox>
          <i-checkbox name="b">b</i-checkbox>
          <i-checkbox name="c">c</i-checkbox>
          <i-checkbox name="d">d</i-checkbox>
        </i-checkbox-group>
        <p>当前选择：{{ value7 }}</p>
      </div>
    </demo-block>
    <demo-block title="搭配 Cell 使用">
      <i-cell-group>
        <i-cell title="A" is-link @click="_=>$refs.a.toggle()">
          <i-checkbox slot="right-icon" v-model="value7" ref="a" />
        </i-cell>
        <i-cell title="B" is-link @click="_=>$refs.b.toggle()">
          <i-checkbox slot="right-icon" v-model="value8" ref="b" />
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
      value3: 0,
      value4: false,
      value5: false,
      value6: ['b', 'c'],
      value7: false,
      value8: true
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-checkbox {
  .wrapper {
    padding: 0 1em;
  }
}
</style>
