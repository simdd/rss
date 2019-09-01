const mutations = {
  setSubjects(state, payload) {
    state.subjects = payload.list
  },
  setPreview(state, payload) {
    state.preview = payload.text
  }
}

export default mutations
