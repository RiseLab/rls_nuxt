<template>
  <v-container fluid grid-list-lg>
    <span class="headline">{{ meta.headline }}</span>
    <v-icon class="ml-2">{{ meta.icon }}</v-icon>
    <v-divider class="my-3" />
    <v-layout wrap>
      <v-flex xs6 md3 v-for="(product, i) in products" :key="i">
        <product-card :product="product" @showProductModal="showProductModal" />
      </v-flex>
    </v-layout>
    <product-modal :productModal="productModal"></product-modal>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import ProductCard from '../components/ProductCard'
  import ProductModal from '../components/ProductModal'
  export default {
    components: { ProductCard, ProductModal },
    data () {
      return {
        products: null,
        productModal: {
          show: false,
          product: {}
        },
        meta: {
          headline: 'Случайные товары',
          icon: 'casino'
        }
      }
    },
    async asyncData () {
      let response = await axios.get('https://test.riselab.ru/api/v1/product.php')
      return { products: response.data }
    },
    methods: {
      showProductModal (product) {
        this.productModal = {
          show: true,
          product: product
        }
      }
    }
  }
</script>

<style scoped>

</style>
