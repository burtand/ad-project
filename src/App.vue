<template>
<v-app>
  <v-card
    color="grey lighten-4"
    flat
    height="64px"
    tile
  >
    <v-toolbar height="64px" dark color="primary">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/"
          tag="span"
          class="pointer"
        >
          Ad application
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          depressed
          color="primary"
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>

  <v-container>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      color="primary"
      absolute
      dark
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line :class="'px-10'">
          <v-list-item-content>
            <v-list-item-title>Ad application</v-list-item-title>
            <v-list-item-subtitle>Main menu</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item
          link
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon color="white">{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
         </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>

  <v-content>
    <router-view></router-view>
  </v-content>

  <template v-if="error">
    <v-snackbar
      :color="'error'"
      :multi-line="true"
      :timeout="5000"
      :bottom="true"
      :value="true"
    >
      {{ error }}
      <v-btn
        dark
        text
        @click="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
  </template>

</v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Orders', icon: 'mdi-bookmark-multiple-outline', url: '/orders' },
          { title: 'New ad', icon: 'mdi-file-plus', url: '/new' },
          { title: 'My ads', icon: 'mdi-view-list-outline', url: '/list' }
        ]
      }

      return [
        { title: 'Login', icon: 'mdi-lock', url: '/login' },
        { title: 'Registration', icon: 'mdi-face', url: '/registration' }
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
