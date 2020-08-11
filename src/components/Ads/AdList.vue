<template>
  <v-container>
    <v-row v-if="!loading && myAds.length !== 0">
      <v-col sm="6" offset-sm="3">
        <h1 class="secondary--text mb-3">My ads</h1>

        <v-card
          elevation="10"
          class="mb-3"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <v-row>
            <v-col sm="4" class="pl-5">
              <v-img
                :src="ad.imageSrc"
                height="150px"
              >
              </v-img>
            </v-col>
            <v-col sm="8" class="pl-0">
              <v-card-text>
                <h2 class="primary--text">{{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </v-card-text>
              <v-card-actions class="pt-4">
                <v-spacer></v-spacer>
                <v-btn
                  class="info"
                  :to="'/ad/' + ad.id"
                >Open</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="!loading && myAds.length === 0">
      <v-col sm="6" offset-sm="3">
        <h1 class="primary--text">You have no ads</h1>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-row
          class="loader"
          align="center"
          justify="center"
          >
          <v-progress-circular
            size="90"
            width="4"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
