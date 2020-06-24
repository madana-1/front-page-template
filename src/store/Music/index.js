const NO_TITLE = 'No Title'
const NO_ARTIST = 'No Artist'

const getInitialState = () => ({
  bundle: '',
  title: NO_TITLE,
  artist: NO_ARTIST,
  artwork: '',
  isPlaying: false
})

export default {
  namespaced: true,

  state: getInitialState(),

  getters: {
    bundle: ({ bundle }) => bundle,
    title: ({ title }) => title,
    artist: ({ artist }) => artist,
    artwork: ({ artwork }) => artwork,
    isPlaying: ({ isPlaying }) => isPlaying
  },

  mutations: {
    SET_INFOS (state, { title, artist, isPlaying, albumArt: artwork, musicBundle: bundle }) {
      if (title !== NO_TITLE) {
        state.bundle = bundle
        state.title = title
        state.artist = artist
        state.artwork = artwork
      }
      state.isPlaying = isPlaying
    }
  },

  actions: {
    setInfos ({ commit }, infos) {
      commit('SET_INFOS', infos)
    }
  }
}
