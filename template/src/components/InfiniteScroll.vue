<template lang="pug">
  div.infinite-scroll
    slot
    md-spinner(md-indeterminate v-if="loading && !disableLoader")
</template>

<script>
  export default {
    name: 'infinite-scroll',
    data() {
      return {
        loading: false
      }
    },
    props: {
      // Pré distancia para considerar o fim do scroll
      distance: { type: Number, default: 60 },
      // Callback quando chega no fim do scroll
      onEnd: { type: Function, default: () => {} },
      // Callback quando o usuario sai do fim do scroll para cima
      onOutEnd: { type: Function, default: () => {} },
      // Stop callback watch
      stop: { type: Boolean, default: false },
      // Desabilita o loader visual
      disableLoader: { type: Boolean, default: false },
      // Habilita escuta no scroll do componente de infinite scroll
      watchInfiniteScroll: { type: Boolean, default: false }
    },
    methods: {
      handleScroll() {
        const scrollPos = this.getScrollPos()

        if (scrollPos === this.prevScrollPos)
          return

        const
          pageHeight   = this.$el.scrollHeight,
          clientHeight = this.$el.clientHeight

        if (this.isDownPage)
          this.checkOutEndScroll(scrollPos, pageHeight, clientHeight)

        if (this.updateInitiated)
          return

        // Scroll in limit zone
        if (window.innerHeight + scrollPos > this.$el.scrollHeight - this.distance) {
          this.isDownPage = this.loading = this.updateInitiated = true
          const done = this.onEnd()
          done && done.then ? done.then(this.enableScroll) : this.enableScroll()
        }

        this.prevScrollPos = scrollPos
      },
      checkOutEndScroll(scrollPos, pageHeight, clientHeight) {
        if (pageHeight - (scrollPos + clientHeight) > this.distance) {
          this.isDownPage = false
          this.onOutEnd()
        }
      },
      getScrollPos() {
        return this.elementToWatch.pageYOffset || this.elementToWatch.scrollTop
      },
      addScroll() {
        this.prevScrollPos = this.getScrollPos()
        this.elementToWatch.addEventListener('scroll', this.handleScroll)
        this.elementToWatch.addEventListener('touchmove', this.handleScroll)
      },
      removeScroll() {
        this.elementToWatch.removeEventListener('scroll', this.handleScroll)
        this.elementToWatch.removeEventListener('touchmove', this.handleScroll)
      },
      hasScroll(node = this.$el) {
        var overflowY = window.getComputedStyle(node)['overflow-y']

        return (overflowY === 'scroll' || overflowY === 'auto') && node.scrollHeight > node.clientHeight
      },
      enableScroll() {
        this.loading = false
        this.updateInitiated = typeof this.stop === 'boolean' ? this.stop : false
      },
      scrollToBottom() {
        setTimeout(() => {
          this.$el.scrollTop = this.$el.scrollHeight
        })
      }
    },
    mounted() {
      this.elementToWatch = this.hasScroll() || this.watchInfiniteScroll ? this.$el : window
      this.addScroll()
    },
    activated() {
      this.addScroll()
    },
    deactivated() {
      this.removeScroll()
    },
    beforeDestroy() {
      this.removeScroll()
    }
  }
</script>

<style lang="stylus" scoped>
.md-spinner
  margin-top 10px
</style>
