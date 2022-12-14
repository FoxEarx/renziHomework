import Vue from 'vue'
import Vuex from 'vuex'
import taskList from './modules/taskList'
import skin from './modules/skin'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    taskList,
    skin,
  },
  plugins: [createVuexPersisted()],
})
