const actions = {
  async getSubjects({ state, commit }) {
    const ret = await window.apis.getSubjects()
    commit('setSubjects', {
      list: ret.subjects
    })
  }
}

export default actions
