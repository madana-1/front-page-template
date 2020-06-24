import { createNamespacedHelpers } from 'vuex'
// App
const {
  mapGetters: mapAppGetters,
  mapActions: mapAppActions
} = createNamespacedHelpers('App')

// Music
const {
  mapGetters: mapMusicGetters,
  mapActions: mapMusicActions
} = createNamespacedHelpers('Music')

export {
  mapAppGetters,
  mapAppActions,
  mapMusicGetters,
  mapMusicActions
}
