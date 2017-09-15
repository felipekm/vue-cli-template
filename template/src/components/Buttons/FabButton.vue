<template lang="pug">
  md-speed-dial#fab.md-fab-bottom-right(md-open="hover")
    md-button.md-fab.md-primary(md-fab-trigger @click.native="show")
      slot
        md-icon {{ icon || 'add' }}
</template>

<script>
export default {
  name: 'fab-button',
  props: ['icon'],
  methods: {
    show() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-speed-dial
  position fixed
.md-speed-dial > button > i
  position absolute !important
  color #fff !important
  margin 15px 16px
.md-button
  background-color: #2196F3 !important
</style>
