import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const languages = { zh: '中文', en: '英语' }

const store = new Vuex.Store({
  state: {
    q: '哈哈',
    language: {from: 'zh', to: 'en'},
    result: []
  },
  getters: {
    languageText: state => {
      return languages[state.language.to]
    }
  },
  mutations: {
    turn (state) {
      state.q = 'test'
    }
  }
})
export default store
