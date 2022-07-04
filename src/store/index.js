import Vue from 'vue'
import Vuex from 'vuex'
import saverouter from'./saverouter'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    saverouter,
    login
  }
})
