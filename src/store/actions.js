const actions = {
  async getSubjects({ state, commit, dispatch }) {
    const ret = await window.apis.getSubjects()
    commit('setSubjects', {
      list: ret.subjects
    })

    if (ret.subjects.length) {
      dispatch('getArticles', { sid: ret.subjects[0]._id })
    }
  },

  async getArticles({ state, commit, dispatch }, payload) {
    const ret = await window.apis.getArticles({
      query: `?sid=${payload.sid}`
    })
    commit('setArticle', {
      list: ret.articles
    })
  }
}

export default actions
