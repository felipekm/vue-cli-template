<template lang="pug">
  div#app
    {{#vuematerial}}
    navbar(@openSidenav="openSidenav")
    side-nav(ref="sidenav")
    {{/vuematerial}}
    {{#router}}
    transition(name="fade")
      keep-alive
        router-view.routes
    {{else}}
    home.routes
    {{/router}}
</template>

<script>
export default {
  name: 'app',
  components: {
{{#vuematerial}}    Navbar  : require('@/components/Header/NavBar'),
    SideNav : require('@/components/SideNav/SideNav.vue'){{/vuematerial}}{{#router}}{{else}}{{#vuematerial}},{{/vuematerial}}
    Home    : require('./views/Home.vue'){{/router}}
  }{{#vuematerial}},
  methods: {
    openSidenav() {
      this.$refs.sidenav.toggle()
    }
  }{{/vuematerial}}
}
</script>

<style lang="stylus">
*
  box-sizing border-box
body
  overflow-y auto

#app, hml, .routes
  overflow hidden

#app, body
  font-family 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

  width 100%

ul
  list-style-type none
  padding 0
  margin 0
.routes
  padding-top 64px
{{#vuematerial}}
.md-list-item
  z-index unset{{/vuematerial}}
</style>
