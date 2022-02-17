<template>
  <!--Hero-->
  <div class="row">
    <header
      class="hero"
      style="
        background-image: url('https://static.wildsouls.gr/app/uploads/2021/02/wildSoulsHero-Image-1.jpg');
      "
    >
      <h1 class="text-center pt-5 section-title">Wild Souls</h1>
    </header>
  </div>

  <!--Fin hero-->
  <!--Highlights-->

  <div class="row py-3" style="background-color: #be5a4b">
    <div class="col-12">
      <div class="container">
        <div class="row d-flex align-content-center align-items-center">
          <div class="col-md-4 col-xl-5" align="center">
            <div class="badge">
              <img class="badge-circle d-block" src="..\assets\images\no-circle.png" />
            </div>
          </div>
          <div class="col-md-8 col-xl-7" align="center">
            <h1 class="mb-2">¡Wild Souls es saludable y natural¡</h1>
            <p>
              Siempre encontras nuestros productos en su forma natural. Sin aditivos ni preservantes
            </p>
          </div>
        </div>
      </div>
    </div>

    <vue3-marquee>
      <div v-for="(product, index) in products" :key="index" class="m-4" style="width: 24rem">
        <img :src="product.product_image" class="img-fluid product-card-img" />
        <div class="mt-2 p-3">
          <h3>{{ product.product_name }}</h3>
          <p>{{ product.product_price }} Bs.</p>
          <button class="btn-product-card" style="background-color: #000">
            <router-link :to="'/product/' + product.id">Ver Producto</router-link>
          </button>
        </div>
      </div>
    </vue3-marquee>
  </div>

  <!--Fin Highlights-->
  <!--Sobre nosotros-->
  <div
    class="row d-flex align-content-center align-items-center"
    style="background-color: #ed7b49; height: 100vh"
  >
    <div class="col-12">
      <div class="container">
        <div class="row d-flex align-content-center align-items-center">
          <div class="col-sm-12 col-md-4 col-xl-6" align="center">
            <h1 class="section-title d-sm-block d-none m-2">La filosofía de <br />Wild Souls</h1>
            <h1 class="d-sm-none d-block text-center m-2">La filosofía de <br />Wild Souls</h1>
            <p class="text-left">
              Nuestra filosofía está presente en todas las etapas de nuestra producción. Nos
              esforzamos por contribuir a la creación de un mundo mejor.
            </p>
            <button class="btn-nav m-2">
              <router-link to="/sobre-nosotros" @click="$scrollToTop">Ver más</router-link>
            </button>
          </div>
          <div class="col-sm-12 col-md-8 col-xl-6 my-3 d-sm-block d-none" align="center">
            <swiper
              :effect="'cards'"
              :grabCursor="true"
              class="mySwiper"
              style="width: 540px; height: 657px"
            >
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2021/02/Layer-2-620x754.jpg');
                "
              ></swiper-slide>
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2021/02/Layer-0-620x754.jpg');
                "
              ></swiper-slide>
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2021/02/Layer-1-620x754.jpg');
                "
              ></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Fin sobre nosotros-->
  <!--Gifts-->
  <div class="row" style="background-color: #be5a4b">
    <div
      class="col-sm-12 col-md-7 d-flex align-items-center"
      style="background-color: #abafd6; border-top-right-radius: 250px; height: 100vh"
    >
      <div class="container">
        <h1 class="section-title d-sm-block d-none m-2 text-center">Halva <br />Silvestre</h1>
        <h1 class="d-sm-none d-block mt-5 pt-5">Halva <br />Silvestre</h1>
        <div class="row d-flex px-md-5 mx-md-5 align-items-center justify-content-center">
          <div class="col-sm-12 col-md-5">
            <h2>Una semilla mágica</h2>
            <p>
              No es un postre ni un refrigerio, ni una comida propiamente dicha. Sin embargo, son
              todos estos simultáneamente. Es lo que quieres que sea.
            </p>
            <p style="font-size: 20px">500g. | 30Bs.</p>
            <button class="btn-nav">
              <router-link to="/categoria/40">¡Pruebalo¡</router-link>
            </button>
          </div>
          <div class="col-sm-12 col-md-5 d-sm-block d-none">
            <img src="..\assets\images\wild-halva.png" class="img-fluid" />
          </div>
          <div class="col-sm-12 col-md-5 p-3 d-block d-sm-none" align="center">
            <img src="..\assets\images\wild-halva.png" class="img-fluid" style="height: 200px" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center"
      style="height: 100vh"
    >
      <div class="container">
        <div
          class="col-sm-12 col-md-8 p-4 m-md-5"
          style="background-color: #ec4844; height: auto"
          align="center"
        >
          <img src="..\assets\images\gift-card.png" class="img-fluid" width="200px" />
          <h2 class="text-center mt-2 px-4 mb-3">Demúestra tu amor con una Gift Card</h2>
        </div>
      </div>
    </div>
  </div>
  <!--Fin gifts-->

  <!--El concepto de la tienda-->
  <div
    class="row d-flex align-content-center align-items-center"
    style="background-color: #ed7b49; height: 100vh"
  >
    <div class="col-12">
      <div class="container">
        <div class="row d-flex align-content-center align-items-center">
          <div class="col-sm-12 col-md-4 col-xl-6">
            <h1 class="section-title d-sm-block d-none m-2">Nuestra tienda</h1>
            <h1 class="d-sm-none d-block text-center m-2">Nuestra tienda</h1>
            <p class="text-left">
              Te invitamos a explorarlo, vivirlo y fotografiarlo. Pero ojo, ¡es muy adictivo!
            </p>
            <button class="btn-nav m-2">
              <router-link to="/nuestra-tienda">Ver más</router-link>
            </button>
          </div>
          <div class="col-sm-12 col-md-8 col-xl-6 my-3 d-sm-block d-none" align="center">
            <swiper
              :effect="'cards'"
              :grabCursor="true"
              class="mySwiper"
              style="width: 540px; height: 657px"
            >
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2020/11/store_1-620x787.jpg');
                "
              ></swiper-slide>
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2020/11/store_2-1-620x781.jpg');
                "
              ></swiper-slide>
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2020/11/store_4-620x825.jpg');
                "
              ></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Fin el concepto de la tienda-->

  <!--5 sabores-->
  <div class="row" style="background-color: #ed7b49">
    <div
      class="col-sm-12 col-md-7 d-flex align-items-center"
      style="background-color: #be5a4b; border-top-right-radius: 250px; height: 100vh"
    >
      <div class="container">
        <h1 class="section-title d-sm-block d-none m-2 text-center">Nueces <br />Silvestres</h1>
        <h1 class="d-sm-none d-block mt-5 pt-5">Nueces <br />Silvestres</h1>
        <div class="row d-flex px-md-5 mx-md-5 align-items-center justify-content-center">
          <div class="col-sm-12 col-md-5">
            <h2>Almendra Tostada</h2>
            <p>
              Todos los tesoros están escondidos en un cofre. Respectivamente, nuestros tesoros
              están encerrados en su caparazón salvaje.
            </p>
            <p style="font-size: 20px">250g. | 40Bs.</p>
            <button class="btn-nav">
              <router-link to="/categoria/41">¡Pruebalo¡</router-link>
            </button>
          </div>
          <div class="col-sm-12 col-md-5 d-sm-block d-none">
            <img src="..\assets\images\almond.png" class="img-fluid" />
          </div>
          <div class="col-sm-12 col-md-5 p-3 d-block d-sm-none" align="center">
            <img src="..\assets\images\almond.png" class="img-fluid" style="height: 200px" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center"
      style="height: 100vh"
    >
      <div class="container">
        <div class="col-sm-12 col-md-8 p-sm-2 p-md-5 m-md-5">
          <h6>¡DESCUBRE NUESTROS PRODUCTOS A TRAVÉS DE LOS 5 TESOROS DE LA NATURALEZA!</h6>
          <ul class="sabores-list">
            <li><a href="#">Sésamo</a></li>
            <li><a href="#">Maní</a></li>
            <li><a href="#">Almendra</a></li>
            <li><a href="#">Avellana</a></li>
            <li><a href="#">Cayú</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--Fin 5 sabores-->
  <!--5 tesoros-->
  <div
    class="row d-flex align-content-center align-items-center"
    style="background-color: #be5a4b; height: 100vh"
  >
    <div class="col-12">
      <div class="container">
        <div class="row d-flex align-content-center align-items-center">
          <div class="col-sm-12 col-md-4 col-xl-6">
            <h1 class="section-title d-sm-block d-none m-2">Los 5 tesoros</h1>
            <h1 class="d-sm-none d-block text-center m-2">Los 5 tesoros</h1>
            <p class="text-left">
              Como dijo Hipócrates, somos lo que comemos. Veamos qué sucede al comer estos tesoros
              SALVAJES.
            </p>
            <button class="btn-nav m-2">
              <router-link to="/los-cinco-tesoros">Ver más</router-link>
            </button>
          </div>
          <div class="col-sm-12 col-md-8 col-xl-6 my-3 d-sm-block d-none" align="center">
            <swiper
              :effect="'cards'"
              :grabCursor="true"
              class="mySwiper"
              style="width: 540px; height: 657px"
            >
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2021/02/Frame-1-3-620x716.png');
                "
              ></swiper-slide>
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2021/02/Frame-2-4-620x716.png');
                "
              ></swiper-slide>
              <swiper-slide
                style="
                  background-image: url('https://static.wildsouls.gr/app/uploads/2021/02/Frame-3-3-620x716.png');
                "
              ></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Fin 5 tesoros-->
  <!--Recetas-->
  <div class="row" style="background-color: #f5afb9">
    <div class="col-12">
      <div class="container">
        <div class="col-12 offset-md-2 offset-xl-4 col-md-8 offset-xl-5 col-xl-7 pt-4" align="left">
          <h1 class="mb-2">Recetas Wild</h1>
          <p>
            ¡Echa un vistazo a nuestra cocina wild! Obtenga ideas sobre cómo convertir su propia
            cocina en una COCINA WILD.
          </p>
        </div>
      </div>
    </div>
    <vue3-marquee>
      <div  v-for="(recipe, index) in recipes" :key="index" class="m-5">
        
          <router-link :to="'/receta/' + recipe.id"
          ><img class="recipe-card-img pt-2 pb-1" :src="recipe.recipe_image"
        /></router-link>
       
        
        <div class="product-card-caption mt-2" style="width: 445px">
          <p class="text-right">{{ recipe.recipe_category }}</p>
          <h2 class="text-right">
            {{recipe.recipe_name }}
          </h2>
        </div>
      </div>
    </vue3-marquee>
  </div>
  <!--Fin recetas-->
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

import { api } from '@/config/site.config';
import json from '../recipes.json';

export default {
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      mensaje: 'Hola!',
      userId: 24,
      idCategory1: 37,
      idCategory2: 38,
      products: [],
      productsRoutes: [],
      recipes: json.recipes,
    };
  },
  methods: {
    cargarProductos(id) {
      api.get('categories/' + this.userId + '/products/' + id).then((response) => {
        this.products = response.data.products;
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.cargarProductos(this.idCategory1);
    api.get('categories/' + this.userId + '/products/' + this.id).then((response) => {
      for (let x in response.data.products) {
        this.productsRoutes.push({
          route: '/product/' + response.data.products[x].id,
        });
      }
    });
  },
};
</script>

<style scoped></style>
