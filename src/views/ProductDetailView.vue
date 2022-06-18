<template>
<template v-for="product in products" :key="product.id">
<section v-if="product.id===id">
<div class ="container border-bottom pb-5 ">
<div class="my-5">
<router-link to="/products" class="float-start text-danger py-5">View all products</router-link>
</div>
<div class="row">
<div class="col-6">
<img class="img-fluid" alt="product.name" :src="require(`../assets/${product.url}`)">
</div>
<div class="col-6">
<h2 class="blog-post-title text-uppercase mb-3">{{ product.name }}</h2>
<h3 class="blog-post-title text-danger mb-3">CHF {{ product.price }}</h3>
<button class="btn btn-danger btn-md text-white text-uppercase my-5 p-2" @click="addToCart(product)">add to cart</button>
<p class="lead">{{ product.description }}</p>
</div>
</div>
</div>
</section>
</template>
</template>

<script>

import Products from '../data/Products.json'

export default {
  name: 'ProductDetailView',
  props: ['id'],
  data () {
    return {
      products: Products
    }
  },
  methods: {
    addToCart (product) {
      if (this.size !== '') {
        this.$store.commit({
          type: 'addToCart',
          id: product.id,
          name: product.name,
          price: product.price
        })
      }
    }
  }
}
</script>
