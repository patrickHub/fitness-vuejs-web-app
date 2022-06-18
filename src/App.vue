<template>
  <nav class="navbar sticky-top bg-success p-3 ps-5 text-light">
    <router-link to="/" class="text-light ps-5">Fitness-shop</router-link>
    <ShoppingCartBox to="/about" class="text-light" :cart="shoppingCart" :total="totalAmount" />
  </nav>
  <router-view/>
</template>

<script>
import ShoppingCartBox from './components/ShoppingCartBox.vue'
export default {
  name: 'app',
  components: {
    ShoppingCartBox
  },
  computed: {
    shoppingCart () {
      return this.$store.state.cart
    },
    totalAmount () {
      return this.$store.getters.total
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
}

nav a.router-link-exact-active {
}
</style>
