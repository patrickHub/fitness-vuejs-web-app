<template>
  <div class="card-deck container d-flex flex-wrap justify-content-between mb-3 mt-3 text-center">
  <ProductBox v-for="product in products" :key="product.id"
    :product="product"
  />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductBox from '@/components/ProductBox.vue'
import Products from '../data/Products.json'

export default {
  name: 'ProductCatalogView',
  components: {
    ProductBox
  },
  data () {
    return {
      products: Products
    }
  }
}

</script>
