<template>
  <i-popup
    class="i-modal"
    :show="show"
    :overlay="overlay"
    :transition-name="transitionName"
    @clickOverlay="onClickOverlay"
    @touchmove.prevent
  >
    <slot name="title">
      <div
        class="i-modal__title hairline--b"
        v-if="titleIsShow">{{ title }}</div>
    </slot>

    <slot>
      <div class="i-modal__body">{{ text }}</div>
    </slot>

    <slot name="footer">
      <div class="i-modal__footer">
        <!-- confirm -->
        <template v-if="type === 'confirm'">
          <div class="i-modal__btn-group i-1px--t">
            <div
              class="i-modal__cancel-btn i-1px--r"
              @click="onCancel">{{ cancelText }}</div>
            <div
              class="i-modal__confirm-btn"
              @click="onConfirm">{{ confirmText }}</div>
          </div>
        </template>
        <!-- alert -->
        <div
          v-else
          class="i-modal__alert-btn i-1px--t"
          @click="onConfirm">{{ confirmText }}</div>
      </div>
    </slot>
  </i-popup>
</template>

<script>
import IPopup from 'unique-ui/packages/popup'

export default {
  name: 'IModal',
  components: { IPopup },
  model: {
    prop: 'show',
    event: 'toggle'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'alert'
    },
    title: String,
    text: String,
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    closeOnClickOverlay: Boolean,
    transitionName: String
  },
  computed: {
    titleIsShow() {
      return this.title || this.$slots.title
    }
  },
  methods: {
    onClickOverlay() {
      if (this.closeOnClickOverlay) {
        this.$emit('toggle', false)
        this.$emit('cancel')
      }
    },
    onCancel() {
      this.$emit('toggle', false)
      this.$emit('cancel')
    },
    onConfirm() {
      this.$emit('toggle', false)
      this.$emit('confirm')
    }
  }
}
</script>
