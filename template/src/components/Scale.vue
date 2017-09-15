<template lang="pug">
  section.scale(:class="{ 'expand': isShow }")
    div(v-if="!isShow" @click="open")
      slot(name="preview")
    div(v-else)
      slot(name="expand")
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      open() {
        this.isShow = true
        this.$emit('open', 'open')
        this.changeBodyScroll('hidden')
      },
      close() {
        this.isShow = false
        this.$emit('open', 'close')
        this.changeBodyScroll('auto')
      },
      changeBodyScroll(value) {
        document.body.style['overflow-y'] = value
      }
    }
  }
</script>

<style lang="stylus" scoped>

.scale
  width 100%
  position relative
  top 0
  left 0
  transition width 0.2s, height 0.2s, top 0.2s
.expand
  height 100vh
  background #fff
  top -100px

.expand > div
  position fixed
  width 100vw
  height 100vh
  left 0
  background #fff
  overflow-y auto
  animation slide_to_top 0.2s ease 0s 1 normal running
  animation-fill-mode forwards
  z-index 5

@keyframes slide_to_top {
    0% {
        top 50%
    }
    100% {
        top 0
    }
}

</style>
