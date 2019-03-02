<template>
  <v-app>
    <navigation :navigation="navigation" />

    <v-toolbar clipped-left fixed app>
      <v-toolbar-side-icon @click="navigation.show = !navigation.show"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase ml-0">
        <span>RL</span><span class="font-weight-light">STORE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip class="mr-2">
        <v-avatar color="grey">
          <v-icon small color="white">location_city</v-icon>
        </v-avatar>
        <span class="pr-1">Пермь</span>
      </v-chip>
      <v-chip class="mr-2">
        <v-avatar color="grey">
          <v-icon small color="white">phone_iphone</v-icon>
        </v-avatar>
        <span class="pr-1">+7 (919) 499-71-24</span>
      </v-chip>
      <cart :cart="cart"/>
    </v-toolbar>

    <v-content v-scroll="onScroll">
      <nuxt />
    </v-content>

    <v-footer inset fixed app>
      <v-spacer></v-spacer>
      <span class="px-4">RiseLab &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-fab-transition>
      <v-btn color="light-blue" dark fixed bottom right fab class="mb-4" v-show="scrollTop" @click="$vuetify.goTo(0)">
        <v-icon>expand_less</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
  import Cart from '../components/Cart'
  import Navigation from '../components/Navigation'
  export default {
    components: { Navigation, Cart },
    data () {
      return {
        navigation: {
          show: true,
          items: [
            { title: 'Главная', icon: 'store', to: '/' },
            {
              icon: 'category',
              title: 'Каталог',
              to: '/catalog',
              open: true,
              children: this.$store.state.categories
            },
            {
              icon: 'info',
              title: 'Информация',
              to: '/info',
              open: false,
              children: [
                { title: 'Условия покупки', to: '/conditions' },
                { title: 'О магазине', to: '/about' },
                { title: 'Контакты', to: '/contacts' }
              ]
            },
            { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
          ]
        },
        scrollTop: false,
        cart: [
          {},
          {}
        ]
      }
    },
    methods: {
      onScroll () {
        this.scrollTop = window.pageYOffset >= 600
      }
    }
  }
</script>
