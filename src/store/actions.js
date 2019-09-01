const actions = {
  getDemo({ state, dispatch }, text) {
    dispatch('setPreview', { text: text })
  }
}

export default actions
