<template lang="pug">
  div.hello-dialog
    md-dialog
      // Title
      md-dialog-title \{{ message }}

      // Content
      md-dialog-content \{{ message }}
    snackbar(ref="snackbar")
</template>

<script>

export default {
  name: 'group-dialog',
  data() {
    return {
      message: 'Olá sou uma modal de exemplo'
    }
  },
  methods: {
    open() {
      this.$refs['groupDialog'].open()
    },
    close() {
      this.$refs['groupDialog'].close()
    },
    onOpen() {
      setTimeout(() => {
        this.$refs.snackbar.show('Teste snackbar')
      }, 2000)
    },
    onClose(type) {
      console.log(type)
    }
  }
}
</script>

<style lang="stylus">
</style>
