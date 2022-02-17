import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './pages/Home.vue';
import SobreNosotrosPage from './pages/SobreNosotros.vue';
import GiftCardPage from './pages/GiftCard.vue';
import ProductosPage from './pages/Productos.vue';
import RecetasPage from './pages/Recetas.vue';
import LoginPage from './pages/auth/Login.vue';
import CategoriaPage from './pages/Categoria.vue';
import ProductPage from './pages/Product.vue';
import NuestraTiendaPage from './pages/NuestraTienda.vue';
import LosCincoTesorosPage from './pages/LosCincoTesoros.vue';
import RecetaPage from './pages/Receta.vue';
import RegisterPage from './pages/auth/Register.vue';
import LoaderComponent from './components/Loader.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index';
import Vue3Marquee from "vue3-marquee";




// Importar
// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';

// ***********************************
// 1. Registro de Rutas para páginas
// ***********************************
const routes = [
  { path: '/', component: HomePage },
  //Sobre nosotros
  { path: '/sobre-nosotros', component: SobreNosotrosPage },
  //Gift Card
  { path: '/gift-card', component: GiftCardPage },
  //Productos
  { path: '/productos', component: ProductosPage },
  //Recetas
  { path: '/recetas', component: RecetasPage },
  //Categorias
  { path: '/categoria/:id', component: CategoriaPage, props: true },
  // Gestión de usuarios
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  //Producto - info
  { path: '/product/:id', component: ProductPage, props: true },
  //Nuestra tienda (Concepto)
  { path: '/nuestra-tienda', component: NuestraTiendaPage },
  //Los 5 tesoros
  { path: '/los-cinco-tesoros', component: LosCincoTesorosPage },
  //Receta - info
  { path: '/receta/:id', component: RecetaPage, props: true },
];
// ***********************************

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const app = createApp(App);

// ***********************************
// 2. Registro de Componentes Globales
// ***********************************
app.component('loader-component', LoaderComponent);
app.component('vue3-marquee', Vue3Marquee);



// ***********************************

app.use(router);
app.use(store);
app.mount('#app');

