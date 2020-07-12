<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
          ></v-text-field>
          <v-textarea
            label="Ad description"
            name="description"
            type="text"
            :rules="[v => !!v || 'Description is required']"
            v-model="description"
          ></v-textarea>
        </v-form>
        <v-row>
          <v-col>
            <v-btn class="warning">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="pt-3">
          <v-col>
            <img src="" height="100">
          </v-col>
        </v-row>
        <v-row class="pt-3">
          <v-col>
            <v-switch
              v-model="promo"
              label="Add to promo"
              color="primary"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row class="pt-3">
          <v-col>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid || loading"
              class="success"
              @click="createAd"
              :loading="loading"
            >
              Create ad
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://miro.medium.com/max/3920/1*Vc0m5dS9SlhieEbR6n8wFg.jpeg'
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
