<template>
  <div :style="{ 'transform': style }" >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'hammer',
    data() {
      return {
        isSwipping: false,
        message: '',
        style: ''
      }
    },
    mounted() {
      import('hammerjs').then(Hammer => {
        this.hammer = new Hammer(this.$el)
        const maxDeltaLeft  = 150
        const maxDeltaRight = -150

        this.hammer.on('panright panleft', event => {
          if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
            this.style = 'translateX(0px)'

            return
          }
          if (event.deltaX > 0) {
            if (event.deltaX >= maxDeltaLeft) {
              this.style = 'translateX(150px)'

              this.$emit('onSwipping', event.deltaX)

              return
            }
          } else if (event.deltaX < 0) {
            if (event.deltaX <= maxDeltaRight) {
              this.style = 'translateX(-150px)'

              this.$emit('onSwipping', event.deltaX)

              return
            }
          }

          this.$emit('onSwipping', event.deltaX)

          this.style = 'translateX(' + event.deltaX + 'px)'
        })

        this.hammer.on('panend pancancel panup pandown', () => {
          this.style = 'translateX(0px)'
        })
      })
    }
  }
</script>
