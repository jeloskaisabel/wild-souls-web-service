<template>
  <div
    class="row about-us-title d-flex justify-content-center align-items-center p-md-5"
    style="background-color: #e9a8c6"
  >
    <div class="col-md-6 about-us-section">
      <h1 class="text-center pb-md-4 mt-5" style="font-size: 10vh">Recetas Wild</h1>
      <p class="text-center">
        ¡Echa un vistazo a nuestra cocina wild! Obtenga ideas sobre cómo convertir su propia cocina
        en una COCINA WILD.
      </p>
    </div>
  </div>
  <div class="row pb-5" style="background-color: #e9a8c6">
    <div class="col-12">
      <div class="container">
        <div class="row">
          <div
            v-for="(recipe, index) in recipes"
            :key="index"
            class="col-sm-12 col-md-6 py-sm-3 py-md-4"
          >
            <router-link :to="'/receta/' + recipe.id" style="color: #000">
              <img
                :src="recipe.recipe_image"
                class="img-fluid"
                style="height: 50vh"
                align="center"
              />
              <p class="mt-4">{{ recipe.recipe_category }}</p>
              <div style="width: 400px" class="d-none d-sm-block">
                <h2 style="font-size: 4vh">{{ recipe.recipe_name }}</h2>
              </div>
              <div style="width: 250px" class="d-block d-sm-none">
                <h2>{{ recipe.recipe_name }}</h2>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from '../recipes.json';

export default {
  name: 'RecetasPage',
  data() {
    return {
      recipes: json.recipes,
    };
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(this.recipes);
  },
};
</script>

<style scoped></style>
