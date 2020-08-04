<template>
  <v-dialog width="600px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="warning">
        Edit
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-card-title>
          <h3 class="text--primary">Edit ad</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            label="Title"
            name="title"
            type="text"
            v-model="editedTitle"
          ></v-text-field>
          <v-textarea
            label="Description"
            name="description"
            type="text"
            v-model="editedDescription"
          ></v-textarea>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="onCancel">Cancel</v-btn>
          <v-btn class="success" @click="onSave">Save</v-btn>
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    }
  },
  methods: {
    onCancel () {
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      this.modal = false
    },
    onSave () {
      if (this.editedTitle !== '' && this.editedDescription !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
        this.modal = false
      }
    }
  }
}
</script>
