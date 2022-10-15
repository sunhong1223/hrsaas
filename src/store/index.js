import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 模块
  modules: {
    // 子模块
    app, // 折叠展开
    settings, // logo/头部
    user // 用户信息
  },
  getters // 快捷访问。相当于vue中的computed计算属性
})

export default store
