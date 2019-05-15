<template>
  <div class="demo-field">
    <demo-block title="简单用法">
      <i-cell-group>
        <i-field v-model="value1" label="账号" clearable></i-field>
      </i-cell-group>
    </demo-block>
    <demo-block title="原生属性">
      <i-cell-group>
        <i-field v-model="value2" label="Password" type="password" clearable></i-field>
        <i-field label="用户名" disabled value="该输入框已禁用"></i-field>
      </i-cell-group>
    </demo-block>
    <demo-block title="多行输入">
      <i-cell-group>
        <i-field
          v-model="value3"
          type="textarea"
          rows="4"
          placeholder="这是一个textarea，rows设置为了4"
          clearable
        ></i-field>
      </i-cell-group>
    </demo-block>
    <demo-block title="自定义内容">
      <i-cell-group>
        <i-field v-model="value4" label="手机号" placeholder="请输入手机号" clearable>
          <img
            slot="icon"
            style="height: 24px; vertical-align: middle;"
            src="data:image/png;base64,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"
            alt="left-icon"
          >
          <i-button slot="right-icon" type="primary" size="small">发送验证码</i-button>
        </i-field>
      </i-cell-group>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-field {
}
</style>
