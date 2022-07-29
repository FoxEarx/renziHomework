<template>
  <header class="header">
    <h1 :style="`color:${$store.state.skin.color.yellow}`">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="itemname"
      @keydown.enter="addItem"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions: maptaskListActions } = createNamespacedHelpers('taskList')
// console.log(this.$store.state.skin.color.yellow)
export default {
  data() {
    return {
      itemname: '',
      id: 1,
    }
  },

  methods: {
    ...maptaskListActions(['additemState']),
    addItem() {
      if (this.$store.state.taskList.List.length !== 0) {
        this.id = this.$store.state.taskList.List[0].id + 1
      }
      this.additemState({ name: this.itemname, done: false, id: this.id })
    },
  },
}
</script>
