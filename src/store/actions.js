const actions = {
  getDemo({ state, dispatch }) {
    return new Promise((resolve, reject) => {
      dispatch('unloadModule', { info: { name: 'test' } })
    })
  }
}

export default actions
