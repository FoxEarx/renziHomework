export default {
  namespaced: true,
  state: {
    List: [
      {
        name: '吃饭',
        done: false,
        id: 1,
      },
      {
        name: '睡觉',
        done: false,
        id: 2,
      },
      {
        name: '打豆豆',
        done: false,
        id: 3,
      },
    ],
  },
  mutations: {
    itemState(state, index) {
      console.log(state.List)
      state.List[index].done = !state.List[index].done
    },
    delitem(state, index) {
      state.List = state.List.filter((ele) => ele.id !== index)
    },
    additem(state, payload) {
      state.List.unshift(payload)
    },
  },
  actions: {
    DyitemState(context, index) {
      context.commit('itemState', index)
    },
    delitemState(context, index) {
      context.commit('delitem', index)
    },
    additemState(context, payload) {
      context.commit('additem', payload)
    },
  },
}
