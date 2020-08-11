import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken4,
        secondary: colors.indigo.accent4,
        warning: colors.amber.darken4,
        success: colors.green.darken3
      }
    }
  }
})
