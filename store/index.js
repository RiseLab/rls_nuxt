import axios from 'axios'

export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories: function (state, data) {
    state.categories = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    await axios.get('https://test.riselab.ru/api/v1/category.php')
      .then(response => {
        response.data.forEach(function (item, i, arr) {
          item.to = '/catalog/' + (item.alias || item.id)
        })
        commit('setCategories', response.data)
      })
  }
}
