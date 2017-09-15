<template lang="pug">
  div.hello
    h1 {{ msg }}
    h2 Essential Links
    ul
      li
        a(href="https://vuejs.org" target="_blank" rel="noopener") Core Docs
      li
        a(href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener") Docs for This Template

    h2 Ecosystem
    ul
      li
        a(href="http://router.vuejs.org/" target="_blank" rel="noopener") vue-router
      li
        a(href="http://vuex.vuejs.org/" target="_blank" rel="noopener") vuex
      li
        a(href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener") vue-loader
      li
        a(href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener") awesome-vue
    {{#vuematerial}}
    hello-dialog(ref="dialog")
    fab-button(@click="$refs.dialog.open()"){{/vuematerial}}
</template>

<script>
  export default {
    name: 'home',{{#vuematerial}}
    components: {
      FabButton   : require('@/components/Buttons/FabButton'),
      HelloDialog : require('@/components/Dialogs/HelloDialog')
    },{{/vuematerial}}
    data() {
      return {
        msg: 'Welcome to Your Pling PWA'
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
