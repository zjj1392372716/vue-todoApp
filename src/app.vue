<template>
  <div id="app">
    <div class="cover">
      <m-header></m-header>
      <todo></todo>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import MHeader from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default {
  data() {
    return {}
  },
  components: {
    MHeader,
    Footer,
    Todo
  }
};
</script>

<style lang="stylus" scoped>
#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  .cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #555
    opacity 0.5
    z-index 1
</style>
