<template>
  <section class="real-app">
    <input type="text"
          class="add-input"
          autofocus="autofocus"
          placeholder="接下来要做什么?"
          @keyup.enter="addTodo($event)">
    <items :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="del"></items>
    <tabs @clearAllCompleted="clearAllCompleted"
          :filter="filters" 
          :todos="todos" 
          @toggle="toggleFilter"></tabs>
  </section>
</template>
 
<script>
import Items from './item.vue'
import Tabs from './tabs.vue'
let id = 0;
export default {
  data () {
    return {
      todos: [],
      filters: 'all'
    }
  },
  computed: {
    filteredTodos() {
      if (this.filters === 'all') {
        return this.todos
      }
      const completed = this.filters === 'completed';

      // 将todos数组中，completed为true的值过滤出来，并返回一个新数组
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
    },
    del (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      // findIndex方法接受一个函数，返回对应元素的索引值，
      /* 获取数组中年龄大于 18 的第一个元素索引位置
      var ages = [3, 10, 18, 20];
 
        function checkAdult(age) {
            return age >= 18;
        }
        
        function myFunction() {
            document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
        }

        // 2
      */
    },
    toggleFilter(state) {
      this.filters = state
    },
    clearAllCompleted() {
     // 给todos赋一个新的值（即todo.completed为false的值）
    this.todos = this.todos.filter(todo => todo.completed === false)
    } 
  },
  components: {
    Items,
    Tabs
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  width: 700px
  margin: 0px auto
  box-shadow : 0 0 5px #666666
  .add-input
    position: relative
    margin: 0
    width: 100%
    font-size: 20px
    font-family: inherit
    font-weight: inherit
    line-height: 1.4em
    border: 0
    outline: none
    color: inherit
    box-sizing: border-box
    font-smoothing: antialiased
    padding: 16px 16px 16px 60px
    border: none
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>
