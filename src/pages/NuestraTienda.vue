<template>
  <div
    class="row about-us-title d-flex justify-content-center align-items-center p-md-5"
    style="background-color: #ed7b49"
  >
    <div class="col-md-6 about-us-section">
      <h6 class="text-center mt-5 pb-md-4">el concepto de</h6>
      <h1 class="text-center pb-md-4" style="font-size: 10vh">Nuestra Tienda</h1>
      <h6 class="text-center mb-5">Un espacio wild para todos</h6>
    </div>
  </div>
  <div
    class="row about-us-img"
    style="
      background-image: url(https://static.wildsouls.gr/app/uploads/2020/11/out_store_1.jpg);
    "
  ></div>
  <div
    class="row about-us-title d-flex justify-content-center align-items-center p-md-5"
    style="background-color: #ed7b49"
  >
    <div class="col-md-6 about-us-section">
      <h5 class="mt-5">
        Esto es lo que queríamos que consiguiera nuestra tienda: Ser Wild y amigable al mismo
        tiempo, simple pero indudablemente única.
      </h5>
      <h5 class="mb-5">
        Un lugar al que quieres volver. Un lugar que te llena de energía salvaje para empezar tu día
        a día o terminarlo.
      </h5>
    </div>
  </div>
  <div
    class="row about-us-title d-flex justify-content-center align-items-center p-md-5"
    style="background-color: #000"
  >
    <div class="col-md-6 about-us-section">
      <h1 class="my-5 d-sm-block d-none" style="color: #fff">
        Eres nuestro invitado, es nuestra prioridad que conozca nuestra filosofía y pruebe nuestros
        productos.
      </h1>
      <h5 class="my-5 d-sm-none d-block" style="color: #fff">
        Eres nuestro invitado, es nuestra prioridad que conozca nuestra filosofía y pruebe nuestros
        productos.
      </h5>
    </div>
  </div>

  
  <div
    class="row about-us-img d-none d-sm-block"
    style="
      background-image: url(https://static.wildsouls.gr/app/uploads/2020/11/store_3.jpg);
    "
  ></div>

  <div
    class="row about-us-title d-flex justify-content-center align-items-center p-md-5"
    style="background-color: #be5a4b"
  >
    <div class="col-md-3 d-none d-sm-block">
      <img src="..\assets\images\almond.svg" />
    </div>
    <div class="col-md-6 about-us-section">
      <h2 class="mb-5">
        Usted y sus amigos pueden sentarse en nuestras mesas para disfrutar de una taza de nuestro café orgánico y tomar un refrigerio vegano de nuestro amplio menú de mantequillas de nueces.<br />
        Nos encantaría hablar contigo sobre nuestros 5 preciados tesoros, alrededor de los cuales gira todo nuestro mundo salvaje. Intercambiaremos ideas y compartiremos contigo recetas que nunca pensaste que existían y ciertamente nunca imaginaste lo increíblemente deliciosas que son en realidad.
        
      </h2>
    </div>
    <div class="col-md-3 d-none d-sm-block">
      <img src="..\assets\images\seed-1.svg" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'NuestraTiendaPage',
  data() {
    return {};
  },
  methods: {},
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
