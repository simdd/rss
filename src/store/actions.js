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
    commit('setAdding', {
      adding: true
    })

    const ret = await window.apis
      .postSubjects({
        body: {
          url: payload.url
        }
      })
      .catch(e => {
        commit('setAdding', {
          badding: true
        })
      })

    if (!ret) {
      return
    }

    const subjects = state.subjects.slice()
    subjects.unshift(ret.subject)

    commit('setSubjects', {
      list: subjects
    })

    commit('setAdding', {
      adding: false
    })
  },

  async deleteSubjects({ state, commit, dispatch }, payload) {
    await window.apis.deleteSubjects({
      body: {
        id: payload.sid
      }
    })

    let _index = -1
    let _list = state.subjects.slice()
    state.subjects.map((item, index) => {
      if (item._id === payload.sid) {
        _index = index
      }
    })

    if (_index > -1) {
      _list.splice(_index, 1)

      commit('setSubjects', {
        list: _list
      })
    }
  }
}

export default actions
