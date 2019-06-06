<template>
  <div class="demo-radio">
    <demo-block title="简单用法" padded>
      <i-radio-group v-model="value1">
        <i-radio :value="0">a</i-radio>
        <i-radio :value="1">b</i-radio>
        <i-radio :value="2">c</i-radio>
      </i-radio-group>
    </demo-block>
    <demo-block title="自定义颜色" padded>
      <i-radio-group v-model="value2">
        <i-radio :value="0" color="#2ab9cd">a</i-radio>
        <i-radio :value="1" color="#ff7e4a">b</i-radio>
        <i-radio :value="2" color="#93c653">c</i-radio>
      </i-radio-group>
    </demo-block>
    <demo-block title="禁用" padded>
      <i-radio-group v-model="value3" disabled>
        <i-radio :value="0">a</i-radio>
        <i-radio :value="1">b</i-radio>
        <i-radio :value="2">c</i-radio>
      </i-radio-group>
    </demo-block>
    <demo-block title="自定义图标" padded>
      <i-radio-group v-model="value4">
        <i-radio :value="0">
          <i-icon
            slot="icon"
            slot-scope="props"
            :name="props.checked ? 'heart' : 'heart-o'"
            size="18px"
            color="#f86f74"
          />a
        </i-radio>
        <i-radio :value="1">
          <i-icon
            slot="icon"
            slot-scope="props"
            :name="props.checked ? 'heart' : 'heart-o'"
            size="18px"
            color="#f86f74"
          />b
        </i-radio>
        <i-radio :value="2">
          <i-icon
            slot="icon"
            slot-scope="props"
            :name="props.checked ? 'heart' : 'heart-o'"
            size="18px"
            color="#f86f74"
          />c
        </i-radio>
      </i-radio-group>
    </demo-block>
    <demo-block title="搭配 Cell 使用">
      <i-radio-group v-model="value5">
        <i-cell-group>
          <i-cell title="A" is-link @click="value5 = 0">
            <i-radio slot="right-icon" :value="0"/>
          </i-cell>
          <i-cell title="B" is-link @click="value5 = 1">
            <i-radio slot="right-icon" :value="1"/>
          </i-cell>
        </i-cell-group>
      </i-radio-group>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 1,
      value4: 0,
      value5: 1
    }
  }
}
</script>

