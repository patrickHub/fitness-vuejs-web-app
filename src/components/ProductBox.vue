<template>
 <div class="card mb-4 shadow-sm" style="max-width:350px;">
<div class="card-header">
<h4 class="my-0 font-weight-normal">{{product.name}}</h4>
</div>
<div class="card-body">
<img class="img-fluid" alt="product.name" :src="require(`../assets/${product.url}`)"  style="max-width:308px; max-height:308px;">
<router-link :to="{ path: `/products/${product.id}` }" class="btn btn-lg btn-block btn-outline-danger mt-5">More options</router-link>
</div>
</div>
</template>

<script>
export default {
  name: 'ProductBox',
  props: ['product']
}
</script>
