export default {
  namespaced: true,
  state: {
    color: {
      yellow: 'yellow',
    },
  },
  mutations: {
    changeColor(state) {
      state.color.yellow === 'yellow'
        ? (state.color.yellow = 'red')
        : (state.color.yellow = 'yellow')
    },
  },
  actions: {
    AchangeColor(context) {
      context.commit('changeColor')
    },
  },
}
