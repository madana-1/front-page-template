import { createNamespacedHelpers } from 'vuex'
// App
const {
  mapGetters: mapAppGetters,
  mapActions: mapAppActions
} = createNamespacedHelpers('App')

// Music
const {
  mapGetters: mapMusicGetters
} = createNamespacedHelpers('Music')

// System
const {
  mapGetters: mapSystemGetters
} = createNamespacedHelpers('System')

export {
  mapAppGetters,
  mapAppActions,
  mapMusicGetters,
  mapSystemGetters
}
