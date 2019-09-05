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
    if (payload.sid === state.sid) {
      return null
    }
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
  },

  async postSubjects({ state, commit, dispatch }, payload) {
    const ret = await window.apis.postSubjects({
      body: {
        url: payload.url
      }
    })

    const subjects = state.subjects.slice()
    subjects.unshift(ret.subject)

    commit('setSubjects', {
      list: subjects
    })
  }
}

export default actions
