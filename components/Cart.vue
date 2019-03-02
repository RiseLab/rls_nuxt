<template>
	<v-chip>
		<v-avatar color="deep-orange">
			<v-icon small color="white">shopping_cart</v-icon>
		</v-avatar>
		<span class="pr-1">{{ title }}</span>
	</v-chip>
</template>

<script>
  import plural from 'plural-ru'

  export default {
    name: 'Cart',

    props: {
      cart: Array
    },

    computed: {
      title: function () {
        return this.cart.length ? this.cart.length + ' ' + plural(this.cart.length, 'товар', 'товара', 'товаров') : 'пусто'
      }
    }
  }
</script>

<style scoped>

</style>
