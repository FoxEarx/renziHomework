<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in $store.state.taskList.List"
      :key="item.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" @click="ChangeState(index)" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delitem(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions: maptaskListActions } = createNamespacedHelpers('taskList')
export default {
  methods: {
    ...maptaskListActions(['DyitemState', 'delitemState']),
    ChangeState(id) {
      this.DyitemState(id)
      // this.itemState()
    },
    delitem(id) {
      this.delitemState(id)
    },
  },
}
</script>
