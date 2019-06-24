<template>
  <div class="i-uploader">
    <slot></slot>
    <input
      class="i-uploader__input"
      v-bind="$attrs"
      type="file"
      :accept="accept"
      :disabled="disabled"
      @change="onChange"
      ref="input"
    >
  </div>
</template>

<script>
export default {
  name: 'IUploader',
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    }
  },
  methods: {
    onChange(ev) {
      const files = Array.from(ev.target.files)

      if (this.disabled || !files.length) return
      if (!files || (this.beforeRead && !this.beforeRead(files))) return

      Promise.all(files.map(this.readFile)).then(contents => {
        let oversize = false
        const payload = files.map((file, index) => {
          if (file.size > this.maxSize) {
            oversize = true
          }
          return {
            file: files[index],
            content: contents[index]
          }
        })
        this.onAfterRead(payload, oversize)
      })
    },
    readFile(file) {
      return new Promise((resolve, reject) => {
        const { resultType } = this
        const reader = new FileReader()

        reader.onload = ev => resolve(ev.target.result)

        if (resultType === 'dataUrl') {
          reader.readAsDataURL(file)
        } else if (resultType === 'text') {
          reader.readAsText(file)
        }
      })
    },
    onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files)
      } else {
        this.$emit('change', files)
        this.$refs.input && (this.$refs.input.value = '')
      }
    }
  }
}
</script>
