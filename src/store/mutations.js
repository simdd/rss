const mutations = {
  setSubjects(state, payload) {
    state.subjects = payload.list
  },
  setArticle(state, payload) {
    state.articles = payload.list
  },
  setPreview(state, payload) {
    state.preview = payload.text
  },
  setSid(state, payload) {
    state.sid = payload.sid
  },
  setAidx(state, payload) {
    state.aidx = payload.aidx
  }
}

export default mutations
