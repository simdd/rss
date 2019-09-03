const actions = {
  async getSubjects({ state, commit, dispatch }) {
    const ret = await window.apis.getSubjects()
    commit('setSubjects', {
      list: ret.subjects
    })

    if (ret.subjects.length) {
      commit('setSid', {
        sid: ret.subjects[0]._id
      })
      dispatch('getArticles', { sid: ret.subjects[0]._id })
    }
  },

  async getArticles({ state, commit, dispatch }, payload) {
    commit('setSid', {
      sid: payload.sid
    })
    commit('setAidx', {
      aidx: -1
    })
    commit('setPreview', {
      preview: ''
    })
    commit('setArticle', {
      list: []
    })
    const ret = await window.apis.getArticles({
      query: `?sid=${payload.sid}`
    })
    commit('setArticle', {
      list: ret.articles
    })
  }
}

export default actions
