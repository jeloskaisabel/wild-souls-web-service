<template>
  <div
    class="row about-us-title d-flex justify-content-center align-items-center p-md-5"
    style="background-color: #fceeea"
  >
    <div class="col-md-6 about-us-section">
      <h6 class="text-center mt-5 pb-md-4">{{ recipe.recipe_category }}</h6>
      <h1 class="text-center pb-md-4 d-none d-sm-block" style="font-size: 8vh">
        {{ recipe.recipe_name }}
      </h1>
      <h2 class="text-center pb-md-4 d-block d-sm-none mb-5 mt-5">{{ recipe.recipe_name }}</h2>
      <h6 class="text-center">Tiempo de preparación: {{ recipe.recipe_preparation_time }}</h6>
      <h6 class="text-center">Porciones: {{ recipe.recipe_portions }}</h6>
      <h6 class="text-center">Dificultad: {{ recipe.recipe_difficult }}</h6>
    </div>
  </div>
  <div class="row" style="background-color: #fceeea">
    <div
      class="col-sm-12 col-md-5 d-flex align-items-center"
      style="background-color: #f5afb9; border-top-right-radius: 250px; height: 100vh"
    >
      <div class="container">
        <div class="row d-flex px-md-5 mx-md-5 justify-content-center">
          <div class="col-sm-12 col-md-12">
            <h6>Ingredientes</h6>
            <ul style="list-style: disc">
              <li
                v-for="(ingredient, index) in recipe.recipe_ingredients"
                :key="index"
                class="ingredient"
              >
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="col-sm-12 col-md-8 p-sm-2 p-md-5 m-md-5">
          <h2>Instrucciones</h2>
          <ul style="list-style: disc">
            <li v-for="(instruction, index) in recipe.recipe_instructions" :key="index">
              {{ instruction }}
            </li>
          </ul>
          <h2>¡Disfruta!</h2>
          <img :src="recipe.recipe_image" class="img-fluid" style="height: 60vh" align="center" />
        </div>
      </div>
    </div>
  </div>
  <div class="row py-5" style="background-color: #fceeea">
    <div class="col-12">
      <div class="container">
        <div class="row">
          <h1 class="pb-md-4 d-none d-sm-block" style="font-size: 8vh">
        Productos Wild en uso
      </h1>
      <h2 class="text-center  d-block d-sm-none mb-5 mt-5">Productos Wild en uso</h2>
      <h6 class="pb-md-4">Usa nuestros productos:</h6>
          <div v-for="(product, index) in productsInUse" :key="index" class="col-sm-12 col-md-4">
            <img :src="product.product_image" class="img-fluid product-card-img" />
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
import json from '../recipes.json';
import { api } from '@/config/site.config';

export default {
  name: 'RecetaPage',
  props: ['id'],
  data() {
    return {
      recipe: json.recipes[this.id - 1],
      productsInUse: [],
    };
  },
  methods: {
    loadProductsInUse() {
      for (let productId of this.recipe.recipe_products_in_use) {
        api.get('products/getProduct/' + productId)
          .then((response) => {
            this.productsInUse.push(response.data.product);
          });
      }
    }
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.loadProductsInUse();
  },
};
</script>

<style scoped></style>
