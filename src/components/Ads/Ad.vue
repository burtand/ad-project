<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card v-if="!loading">
          <v-img
            :src="ad.imageSrc"
            height="300px"
          ></v-img>
          <v-card-text>
            <h1 class="primary--text">{{ad.title}}</h1>
            <p>{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <appEditAdModal :ad="ad" v-if="isOwner"></appEditAdModal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else class="text-xs-center">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    appEditAdModal: EditAdModal
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
