<template>
  <v-dialog width="600px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="success">
        Buy
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-card-title>
          <h3 class="primary--text">Do you wan't to buy it?</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            label="You name"
            name="name"
            type="text"
            v-model="name"
          ></v-text-field>
          <v-text-field
            label="Your phone"
            name="phone"
            type="text"
            v-model="phone"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          text
          @click="onCancel"
          :disabled="localLoading"
          >
            Close
          </v-btn>
          <v-btn
          class="success"
          @click="onSave"
          :disabled="localLoading"
          :loading="localLoading"
          >
            Buy it!
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      modal: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onCancel () {
      this.name = ''
      this.phone = ''
      this.modal = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.modal = false
          })
      }
    }
  }
}
</script>
