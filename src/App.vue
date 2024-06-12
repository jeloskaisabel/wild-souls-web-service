<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-nav d-md-flex justify-content-between py-4"
          id="navbarNavAltMarkup"
        >
          <a @click.prevent="showOffcanvasMenu1()" class="nav-item nav-link">Productos</a>
          <template v-for="(navOption, index) in navOptions" :key="index">
            <div>
              <a>
                <router-link
                  class="nav-link"
                  :class="this.$route.path === navOption.route ? 'active' : ''"
                  :to="navOption.route"
                >
                  {{ navOption.text }}
                </router-link>
              </a>
            </div>
          </template>
          <a @click.prevent="showOffcanvasMenu2()" class="nav-item nav-link">Carrito</a>
        </div>
      </div>
    </nav>
    <div
      class="offcanvas offcanvas-start p-5"
      :class="showMenu1 ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showMenu1 ? 'visible' : 'hidden' }"
      style="background-color: #ed7b49"
    >
      <div align="right">
        <button class="btn-close text-reset" @click.prevent="showOffcanvasMenu1()"></button>
      </div>

      <div class="offcanvas-header">
        <h5 class="offcanvas-title m-3" id="">Categorías</h5>
      </div>
      <div class="offcanvas-body mx-3 mb-3">
        <template v-for="(navOption, index) in categoriesMenu" :key="index">
          <div class="mb-2">
            <h3>
              <a>
                <router-link
                  class="categories-menu-item"
                  :class="this.$route.path === navOption.route ? 'active' : ''"
                  :to="navOption.route"
                  @click.prevent="showOffcanvasMenu1()"
                >
                  {{ navOption.text }}
                </router-link>
              </a>
            </h3>
          </div>
        </template>
      </div>
    </div>
    <!--OffCanvas Cart-->
    <div
      class="offcanvas offcanvas-end p-5"
      :class="showMenu2 ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showMenu2 ? 'visible' : 'hidden' }"
      style="background-color: #e9a8c6"
    >
      <div align="right">
        <button class="btn-close text-reset" @click.prevent="showOffcanvasMenu2()"></button>
      </div>

      <div class="offcanvas-header">
        <h5 class="offcanvas-title m-3" id="">Mi carrito</h5>
      </div>
      <div class="offcanvas-body mx-2 mb-3">
        <ul class="p-0">
          <li
            v-for="(prodCart, index) in productsCart"
            :key="index"
            class="d-flex align-items-center"
          >
            <div>
              <a @click="removeProduct(prodCart.id)"
                ><i class="bi bi-x" style="font-size: 35px"></i
              ></a>
            </div>
            <div class="mx-2">
              <h3 style="font-size: 18px">{{ prodCart.product_name }}</h3>
              <p class="mb-3"><small>{{ prodCart.product_price }} Bs.</small></p>
            </div>
            <div class="d-flex flex-column">
              <a @click="addAmount(prodCart.id)" class="text-center"
                ><i class="bi bi-plus" style="font-size: 30px; color: #000"></i
              ></a>
              <div class="amount">{{ prodCart.quantity }}</div>
              <a @click="decreaseAmount(prodCart.id)" class="text-center"
                ><i class="bi bi-dash" style="font-size: 30px; color: #000"></i
              ></a>
            </div>
          </li>
        </ul>
        <div>
          <h3>Total: {{ totalPrice }} <small>Bs.</small></h3>
        </div>
        <button class="btn-product-buy my-4" align="center" @click="submitOrder()">
          Ordenar ahora
        </button>
        <div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid" style="background-color: #be5a4b">
    <div class="col-12">
      <div class="container-fluid">
        <div class="row" align="center">
          <img src="./assets/images/logo.svg" class="my-5" height="200" />
        </div>
        <div class="row d-flex d-flex justify-content-center">
          <div class="col-md-4 col-xl-5">
            <div class="d-none d-xl-block mb-lg-5">
              <h1>¡Mantente Wild!</h1>
              <div class="d-flex align-items-center">
                <form>
                  <input class="input-email" placeholder="Escribe tu email" type="email" />
                  <a><i class="bi bi-arrow-right-circle-fill send-mail"></i></a>
                </form>
              </div>
            </div>
            <div class="d-none d-xl-block mb-lg-5">
              <h2>Síguenos</h2>
              <ul class="social-media-list">
                <li>
                  <a><i class="bi bi-facebook"></i></a>
                </li>
                <li>
                  <a><i class="bi bi-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 offset-xl-1 col-xl-3 m-lg-0">
            <div class="d-none d-xl-block mb-lg-5">
              <h2>Productos</h2>
              <ul class="list-footer-products">
                <li><a href="#">Mantequilla de sésamo/tahini</a></li>
                <li><a href="#">Mantequilla de nuez</a></li>
                <li><a href="#">Miel</a></li>
                <li><a href="#">Mermeladas</a></li>
                <li><a href="#">Halva</a></li>
                <li><a href="#">Frutos secos</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-xl-3">
            <div class="d-none d-xl-block mb-lg-5">
              <h2>Contactanos</h2>
              <ul class="list-footer-products">
                <li><a href="#">wildsouls@info.com</a></li>
                <li><a href="#">+591-74913903</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './assets/scss/stylesheet.scss';
import { api } from '@/config/site.config';
import { storageSave, storageGet } from '@/services/storage.js';

export default {
  name: 'App',
  data() {
    return {
      categoriesMenu: [],
      showMenu1: false,
      showMenu2: false,
      productsCart: storageGet('cart') || [],
      cartOrder: '',
      phone: '59174913903',
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
    showOffcanvasMenu1() {
      this.showMenu1 = !this.showMenu1;
    },
    showOffcanvasMenu2() {
      this.showMenu2 = !this.showMenu2;
    },
    addAmount(id) {
      let currentProductsCart = storageGet('cart');
      currentProductsCart.forEach((currentProd) => {
        if (currentProd.id === id) {
          currentProd.quantity++;
        }
      });
      this.productsCart = [...currentProductsCart];
      storageSave('cart', currentProductsCart);
    },
    decreaseAmount(id) {
      let currentProductsCart = storageGet('cart');
      currentProductsCart.forEach((currentProd) => {
        if (currentProd.id === id && currentProd.quantity > 0) {
          currentProd.quantity--;
        }
      });
      this.productsCart = [...currentProductsCart];
      storageSave('cart', currentProductsCart);
    },
    removeProduct(id) {
      let currentProductsCart = storageGet('cart');
      currentProductsCart = currentProductsCart.filter(prod => prod.id !== id);
      this.productsCart = [...currentProductsCart];
      storageSave('cart', currentProductsCart);
    },
    productsOrder() {
      this.cartOrder = this.productsCart.map(product => `- ${product.quantity} ${product.product_name}`).join('\n');
    },
    submitOrder() {
      this.productsOrder();
      let message = `¡Hola Wild Souls!\nQuiero ordenar:\n${this.cartOrder}\nTOTAL: ${this.totalPrice} Bs.`;
      let link = `https://api.whatsapp.com/send?phone=${this.phone}&text=${encodeURIComponent(message)}`;
      window.location = link;
      console.log(message);
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    navOptions() {
      let navOptions = [
        { route: '/', text: 'Inicio' },
        { route: '/sobre-nosotros', text: 'Sobre nosotros' },
        { route: '/gift-card', text: 'Gift Card' },
        { route: '/recetas', text: 'Recetas' },
      ];
      if (this.loggedIn) {
        navOptions = [...navOptions];
      }
      return navOptions;
    },
    totalPrice() {
      return this.productsCart.reduce((totalPrice, p) => {
        return totalPrice + parseFloat(p.product_price) * p.quantity;
      }, 0).toFixed(2);
    },
  },
  mounted() {
    api.get('categories/getAll').then((response) => {
      this.categoriesMenu = response.data.categories.map(category => ({
        route: `/categoria/${category.id}`,
        text: category.category_name,
      }));
    });
  },
};
</script>

<style scoped></style>
