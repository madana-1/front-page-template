export default store => {
  window.loadMusic = () => {
    if (FPI.music) {
      store.dispatch('Music/setInfos', FPI.music)
    }
  }
}
