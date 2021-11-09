import Vue from 'vue'
import Vuex from 'vuex'

import story from './story'
import search from './search'
import commons from './searchCommons'
import stories from './searchStories'
import article from './article'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    story,
    search,
    article,
    commons,
    stories
  }
})
