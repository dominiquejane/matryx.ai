<template lang="html">
  <div class="counter__container">
    <span class="counter__counter" >{{ counter }}</span>
    /
    <span class="counter__total">{{ total }} ETH Purchased</span>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    current: Number,
    total: Number
  },
  data () {
    return {
      counter: 0
    }
  },
  mounted () {
    setTimeout(() => {
      // var timer = (this.current / 5000)

      const counter = setInterval(() => {
        if (this.counter < this.current - 100) {
          this.counter = this.counter + 100
        } else {
          this.counter++
        }
        if (this.counter >= this.current) {
          clearCounter()
        }
      }, 100)

      function clearCounter () {
        clearInterval(counter)
      }
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
  .counter {
    color: #FFF;
  }
</style>
