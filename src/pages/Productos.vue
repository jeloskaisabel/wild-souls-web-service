<template>
  <div class="row" style="background-color: #be5a4b">
    <div class="col-12 category-hero">
      <div class="row">
        <div class="col-sm-6 py-5 category-title" style="background-color: #be5a4b"></div>
      </div>
    </div>
  </div>

  <div class="row" style="background-color: #be5a4b">
    <div class="col-12">
      <div class="container">
        <div class="row">
          <div class="col-sm-5 p-0">
            <h1 class="d-none d-sm-block" style="font-size: 8vh">asd</h1>
            <h1 class="d-block d-sm-none">asdf</h1>
          </div>
        </div>
        <div class="row offset-md-2">
          <div v-for="(product, index) in products" :key="index" class="col-xs-12 col-md-6">
            <img :src="product.product_image" class="product-img img-fluid mt-4" />
            <div class="product-card-caption p-md-4">
              <h2 class="text-right mt-3">
                {{ product.product_name }}
              </h2>
              <p>{{ product.product_price }} Bs.</p>
            </div>
            <button class="btn-product-card " style="background-color: #acafd4">
              <router-link :to="productsRoutes[index].route">Ver producto</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ProductosPage',
  data() {
    return {
      userId: 24,
      products: [],
    };
  },
  methods: {
    
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.scrollTo({top:0, behavior: 'smooth'});
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
