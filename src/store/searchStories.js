import { abortAllRequest } from '@utils/api'
import { searchStory } from '@server'

export default {
  namespaced: true,
  state: {
    loading: false,
    results: [],
    query: ''
  },
  mutations: {
    setLoading: (state, loading) => state.loading = loading,
    setQuery: (state, query) => state.query = query,
    setResults: (state, results) => state.results = results,
  },
  actions: {
    search: ({ commit }, query) => {
      const queryString = query.trim().toLowerCase();

      commit('setQuery', query)
      
      if ( !queryString ) {
        abortAllRequest();
        commit('setLoading', false)
        commit('setResults', []);
        return;
      }

      commit('setLoading', true)
      searchStory( queryString ).then( data => {
        if ( data.length ) {
          commit('setResults', Object.values(data).map(p => {
            const id = p.id[ p.id.length - 1];
            return {
              title: p.text,
              desc: `Story id: ${id}`,
              thumb: p.img,
              goto: { name: 'Story', params: { id } }
            }
          }))
        }
        commit('setLoading', false)
      })
      
    },
    clear: ({commit}) => {
      abortAllRequest();
      commit('setLoading', false);
      commit('setResults', []);
      commit('setQuery', '');
    }
  },
  getters: {
    loading: (state) => state.loading,
    results: (state) => state.results,
    query: (state) => state.query
  }
}
