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
            <v-btn class="warning" @click="triggerUpload">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <input
            type="file"
            style="display: none;"
            accept="image/*"
            ref="fileInput"
            @change="onFileChange">
          </v-col>
        </v-row>
        <v-row class="pt-3">
          <v-col>
            <img v-if="imageSrc"
            :src="imageSrc"
            height="100">
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
              :disabled="!valid || !image || loading"
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
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>
