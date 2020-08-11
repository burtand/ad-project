<template>
  <v-container>
    <v-row>
      <v-col sm="6" class="xs-text-center" v-if="loading">
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
      <v-col sm="6" offset-sm="3" v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list
          subheader
          two-line
          flat
        >

            <v-list-item
              v-for="order in orders"
              :key="order.id">
              <template>
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    @click="markDone(order)"
                    :input-value="order.done"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    :to="'/ad/' + order.adId"
                    class="primary">Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>

        </v-list>
      </v-col>
      <v-col sm="6" class="xs-text-center" v-else>
        <h1 class="text--secondary">You have no orders</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
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
