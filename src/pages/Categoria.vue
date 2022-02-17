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
          <div class="col-sm-6 p-0">
            <h1 class="d-none d-sm-block" style="font-size: 8vh">{{ categoryName }}</h1>
            <h2 class="d-block d-sm-none">{{ categoryName }}</h2>
          </div>
        </div>
        <div class="row offset-md-2">
          <div v-for="(product, index) in products" :key="index" class="col-sm-12 col-md-6">
            <img
              :src="product.product_image"
              class="img-fluid product-card-img"
              style="width: 390px; heigth: 550px"
            />
            <div class="mt-2 p-3">
              <h3>{{ product.product_name }}</h3>
              <p>{{ product.product_price }} Bs.</p>
              <button class="btn-product-card" style="background-color: #000">
                <router-link :to="'/product/' + product.id">Ver Producto</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from '@/config/site.config';

export default {
  name: 'CategoriaPage',
  props: ['id'],
  data() {
    return {
      userId: 24,
      products: [],
      productsRoutes: [],
      categoryName: '',
    };
  },
  methods: {
    cargarProductos(id) {
      api.get('categories/' + this.userId + '/products/' + id).then((response) => {
        this.products = response.data.products;
      });
    },
    findCategory(id) {
      api.get('categories/' + this.userId + '/getAll').then((response) => {
        for (let x in response.data.categories) {
          if (response.data.categories[x].id == id) {
            this.categoryName = response.data.categories[x].category_name;
            console.log(this.categoryName);
          }
        }
      });
    },
  },
  computed: {},
  watch: {},
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log(previousParams);
        this.cargarProductos(toParams.id);
        this.findCategory(toParams.id);
      },
    );
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.cargarProductos(this.id);
    api.get('categories/' + this.userId + '/products/' + this.id).then((response) => {
      for (let x in response.data.products) {
        this.productsRoutes.push({
          route: '/product/' + response.data.products[x].id,
        });
      }
    });
    this.findCategory(this.id);
  },

  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
