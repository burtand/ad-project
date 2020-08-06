<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-carousel cycle>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
              <div class="car-link">
                <v-btn class="error"
                  :to="'/ad/' + ad.id"
                >{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          sm="4"
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card
            class="mx-auto"
            max-width="360"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.imageSrc"
            >
              <v-card-title>
                {{ad.title}}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>{{ad.description}}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                :to="'/ad/' + ad.id"
              >
                Open
              </v-btn>
              <app-buy-modal :ad="ad"></app-buy-modal>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row>
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
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .25);
    padding: 5px 15px;
    transform: translate(-50%, 0);
    border-top-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
