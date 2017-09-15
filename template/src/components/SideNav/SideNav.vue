<template lang="pug">
  md-sidenav.md-left(ref="leftSidenav" @open="changeBodyScroll('hidden')" @close="changeBodyScroll('auto')")
    div.row.main-content
      // Current app content
      div.content
        // Toolbar
        md-toolbar.md-small.no-color
          md-list-item.app-title.md-toolbar-container
            span.app-title-child {{name}}
        // Mailboxes
        md-list
          md-list-item(v-for="item in items")
            md-icon.md-primary {{ item.icon }}
            span {{ item.text }}
</template>

<script>

export default {
  name: 'sidenav',
  data() {
    return {
      items: [{ icon: 'email', text: 'Item' }]
    }
  },
  methods: {
    toggle() { this.$refs.leftSidenav.toggle() },
    changeBodyScroll(value) {
      document.body.style['overflow-y'] = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-sidenav.md-active
  width 100vw
  height 100vh

.md-sidenav, .md-sidenav >>> .md-sidenav-content
  max-width 70%
  height 100vh
  position fixed
  z-index 12

.md-sidenav >>> .md-sidenav-content
  overflow-y hidden

.main-content
  overflow-y hidden

.md-sidenav >>> .md-backdrop
  width 100vw
  z-index 11

.md-toolbar-container, .md-icon
  color white
.md-icon-button
  margin 0 -8px 0 0

.content
  width 100%

.md-toolbar
  background-color white !important
  border-bottom 1px solid #f3ecec
.app-title >>> div
  padding-left 8px
.app-title-child
  font-size 22px
  color #757575
  margin-top 5px
</style>
