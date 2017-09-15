<template lang="pug">
  div
    md-dialog.hello-dialog(:md-open-from="from" :md-close-to="from" @open="onOpen" @close="onClose" ref="helloDialog")
      // Title
      md-dialog-title \{{ message }}

      // Content
      md-dialog-content \{{ message }}
    snackbar(ref="snackbar")
</template>

<script>

export default {
  name: 'hello-dialog',
  components: {
    Snackbar: require('@/components/SnackBar.vue')
  },
  data() {
    return {
      message: 'Olá sou uma modal de exemplo'
    }
  },
  methods: {
    open() {
      this.$refs['helloDialog'].open()
    },
    close() {
      this.$refs['helloDialog'].close()
    },
    onOpen() {
      setTimeout(() => {
        this.$refs.snackbar.show('Teste snackbar')
      }, 1000)
    },
    onClose(type) {
      console.log(type)
    }
  }
}
</script>

<style lang="stylus">
</style>
