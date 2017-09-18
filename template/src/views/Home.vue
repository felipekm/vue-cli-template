<template lang="pug">
  div.hello
    // Title
    h1.md-display-1 \{{ msg }}

    // List
    {{#vuematerial}}
    md-list
      md-list-item(v-for="link in links" :key="link.url")
        md-icon link
        a(:href="link.url" target="_blank" rel="noopener") \{{link.label}}
        md-divider
    {{else}}
    ul
      li(v-for="link in links" :key="link.url")
        a(:href="link.url" target="_blank" rel="noopener") \{{link.label}}
        hr
    {{/vuematerial}}

    {{#vuematerial}}
    // Dialog
    hello-dialog(ref="dialog" from="#fab")

    // Fab button
    fab-button#fab(@click="$refs.dialog.open()"){{/vuematerial}}
</template>

<script>
  import api from '@/utils/api'

  export default {
    name: 'home',{{#vuematerial}}
    components: {
      FabButton   : require('@/components/Buttons/FabButton'),
      HelloDialog : require('@/components/Dialogs/HelloDialog')
    },{{/vuematerial}}
    data() {
      return {
        msg: 'Welcome to Your Pling PWA',
        links: []
      }
    },
    created() {
      api.getFakeLinks()
        .then(links => (this.links = links))
    }
  }
</script>

<style lang="stylus" scoped>
{{#unless vuematerial}}
.md-display-1
  font-size      34px
  font-weight    400
  letter-spacing 0
  line-height    40px{{/unless}}
</style>
