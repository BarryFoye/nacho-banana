export const state = () => ({
  marketDataTreeMap: [],
})

export const actions = {
  FILL_DATA_TREE_MAP({ commit, state }) {
    commit('SET_TREE_MAP_DATA')
  },
}

export const mutations = {}
