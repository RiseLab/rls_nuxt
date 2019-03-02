<template>
  <v-hover>
    <v-card class="pt-3 mx-auto" height="100%" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
      <v-img class="mx-3" height="150" max-height="150" contain :src="(typeof product.photos[1] !== 'undefined') ? product.photos[1].small : product.photos[0]" />
      <v-card-title class="pb-0 grow align-start" primary-title>
        {{ product.title }}
      </v-card-title>
      <v-card-actions>
                <span class="subheading ml-2 light-blue--text">
                  {{ product.price }} &#8381;
                </span>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="deep-orange">add_shopping_cart</v-icon>
        </v-btn>
        <v-btn icon @click="showProductModal">
          <v-icon>zoom_out_map</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'ProductCard',

    props: {
      product: Object
    },

    methods: {
      showProductModal () {
        this.$emit('showProductModal', this.product)
      }
    }
  }
</script>

<style scoped>
.v-card {
  display: flex;
  flex-direction: column;
}
</style>
