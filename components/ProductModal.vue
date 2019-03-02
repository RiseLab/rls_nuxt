<template>
  <v-dialog width="800" v-model="productModal.show">
    <v-card class="pb-3">
      <v-card-text>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn icon @click="productModal.show = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-layout>
        <v-layout class="mb-3">
          <v-flex class="mr-4">
            <v-img width="400" height="300" contain :src="photo"></v-img>
          </v-flex>
          <v-flex>
            <div class="headline mb-3">{{ productModal.product.title }}</div>
            <div class="display-1 light-blue--text mb-3">
              {{ productModal.product.price }} &#8381;
            </div>
            <div>
              Производитель: <span class="deep-orange--text body-2">{{ productModal.product.brand }}</span><br>
              Наличие: <v-icon color="green">check</v-icon>
            </div>
            <v-divider class="my-3"/>
            <div>
              {{ productModal.product.info }}
            </div>
            <v-divider class="my-3"/>
            <v-layout>
              <v-text-field label="Количество" type="number" min="1" value="1" class="mr-2 pt-2"></v-text-field>
              <v-btn class="deep-orange white--text mt-2">В корзину</v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
        <div>
          {{ productModal.product.description }}
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ProductModal',

    props: {
      productModal: Object
    },

    computed: {
      photo: function () {
        if (typeof this.productModal.product.photos !== 'undefined') {
          return (this.productModal.product.photos.length > 1 ? this.productModal.product.photos[1].full : this.productModal.product.photos[0])
        }
        return ''
      }
    }
  }
</script>

<style scoped>

</style>
