<template lang="pug">
  md-snackbar(md-position="bottom center" ref="snackbar" md-duration="3000")
    span {{ message }}
</template>

<script>
export default {
  name: 'snackbar',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    show(message) {
      if (message) {
        this.message = message
        this.$refs.snackbar.open()
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
