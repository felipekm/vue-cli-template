<template lang="pug">
  md-toolbar.row.justify-space-between.header(:class="{ 'header--hidden': nav }")
    md-button.md-icon-button(@click.native="$emit('openSidenav')")
      md-icon menu
    h3(@click="scrollTop") \{{ 'pling' | capitalize }}
    md-button.md-icon-button
      md-icon search
</template>

<script>
import { capitalize } from '@/utils/filters/string.js'

export default {
  name: 'nav-bar',
  filters: { capitalize },
  data() {
    return {
      nav: false
    }
  },
  methods: {
    scrollTop() {
      document.body.scrollTop = 0
    },
    handleScroll() {
      var st = document.body.scrollTop,
        navbarHeight = 64,
        delta = 5

      // garantindo que o scroll foi maior que o delta
      if (Math.abs(this.lastScrollTop - st) <= delta)
        return

      if (st > this.lastScrollTop && st > navbarHeight) {
        // Scroll Down
        this.nav = true
      } else {
        // Scroll Up
        if (st < this.lastScrollTop) {
          this.nav = false
        }
      }
      this.lastScrollTop = st
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('touchmove', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('touchmove', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
button
  margin-right 0px !important
h3
  flex-grow 1
  text-align left
  padding 0 10px

.md-toolbar
  color white !important

.header
  background #2196f3
  height 40px
  position fixed
  top 0
  width 100%
  z-index 3

.header--hidden
  transform perspective(500px) translate3d(0px, -64px, 0px)
</style>
