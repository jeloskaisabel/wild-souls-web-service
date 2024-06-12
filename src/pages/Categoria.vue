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
              style="width: 390px; height: 550px"
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
      products: [],
      categoryName: '',
    };
  },
  methods: {
    cargarProductos(id) {
      api.get('categories/products/' + id).then((response) => {
        this.products = response.data.products;
      });
    },
    findCategory(id) {
      api.get('categories/getAll').then((response) => {
        for (let category of response.data.categories) {
          if (category.id == id) {
            this.categoryName = category.category_name;
          }
        }
      });
    },
  },
  watch: {
    '$route.params.id': function(newId) {
      this.cargarProductos(newId);
      this.findCategory(newId);
    }
  },
  created() {
    this.cargarProductos(this.id);
    this.findCategory(this.id);
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>

<style scoped></style>
