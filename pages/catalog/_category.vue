<template>
  <v-container fluid grid-list-lg>
    <span class="headline">
      {{ meta.headline }}
      <template v-if="title">
        <span class="mx-1 deep-orange--text text--lighten-2">/</span>
        {{ title }}
      </template>
    </span>
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
  import ProductCard from '../../components/ProductCard'
  import ProductModal from '../../components/ProductModal'
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
          headline: 'Каталог'
        }
      }
    },
    async asyncData ({ params }) {
      let response = await axios.get(`https://test.riselab.ru/api/v1/product.php?id=${params.category}`)
      return { products: response.data }
    },
    methods: {
      showProductModal (product) {
        this.productModal = {
          show: true,
          product: product
        }
      }
    },
    computed: {
      title: function () {
        let title = null
        this.$store.state.categories.forEach(function (item, i, arr) {
          if (item.to === this.$route.path) {
            title = item.title
          }
        }, this)
        return title
      }
    }
  }
</script>

<style scoped>

</style>
