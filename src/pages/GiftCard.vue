<template>
  <div class="row" style="background-color: #bd5b4c">
    <div class="col-12 gift-card-hero">
      <div class="row">
        <div class="col-sm-7 py-5 gift-card-title" style="background-color: #ed7b49"></div>
      </div>
    </div>
  </div>

  <div class="row" style="background-color: #ed7b49">
    <div class="col-12">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1 class="d-none d-sm-block" style="font-size: 8vh">¡Construye tu propio Gift Box¡</h1>
            <h1 class="d-block d-sm-none">¡Construye tu propio Gift Box¡</h1>
          </div>
        </div>
        <div class="row d-flex justify-content-center py-4">
          <div class="col-sm-3">
            <h2>1.</h2>
            <p>
              Piensa bien quién será el destinatario de la caja de regalo Wild. y elige los
              productos en base a su Wildness!
            </p>
          </div>
          <div class="col-sm-3">
            <h2>2.</h2>
            <p>
              Agregue a la nota lo que desea escribir en Wild Card Postal y lo haremos con nuestras
              propias manos. ¡No olvide firmar! PD: El recibo le será enviado por correo
              electrónico.
            </p>
          </div>
          <div class="col-sm-3">
            <h2>3.</h2>
            <p>¡Cuenta con nosotros!</p>
            <ul class="p-0">
              <h6></h6>
              <li class="d-block d-inline-block">
                <h6><i class="bi bi-heart-fill"></i>Wild Box</h6>
              </li>
              <li class="d-block d-inline-block">
                <h6><i class="bi bi-heart-fill"></i>Wild Card Postal</h6>
              </li>
              <li class="d-block d-inline-block">
                <h6><i class="bi bi-heart-fill"></i>Stickers wild</h6>
              </li>
              <li class="d-block d-inline-block">
                <h6><i class="bi bi-heart-fill"></i>Wild box</h6>
              </li>
              <li class="d-block d-inline-block">
                <h6><i class="bi bi-heart-fill"></i>Adornos wild</h6>
              </li>
              <li class="d-block d-inline-block">
                <h6><i class="bi bi-heart-fill"></i>Embalaje wild</h6>
              </li>
              <li class="d-block d-inline-block">
                <h6><i class="bi bi-heart-fill"></i>mucho cariño wild</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row" style="background-color: #ed7b49">
    <div class="col-12">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-3">
            <h2>Buscar</h2>
            <input
              type="text"
              placeholder="Ingrese el producto"
              class="px-5 py-3 my-3 search"
              v-model="searchText"
              v-on:keyup.enter="searchProduct()"
              @keydown.enter.prevent=""
            />
            <h2>Detalles de la orden:</h2>
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
                <div>
                  <h3 class="my-3 mx-2" style="font-size: 18px">{{ prodCart.product_name }}</h3>
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
            <h2>Mi amigo wild es:</h2>
            <p>Ingresa el nombre de tu amigo Wild</p>
            <input
              type="text"
              class="px-5 py-3 my-3 search"
              v-model="wildFriend"
            />
            <h2>Dedicatoria</h2>
            <p>Escribe una dedicatoria para tu amigo Wild</p>
            <textarea
              type="text"
              rows="5"
              placeholder="Escribe una dedicatoria"
              class="px-5 py-3 my-3 message-input"
              v-model="dedication"
            />
            <button class="btn-product-buy m-2" align="center" @click="submitOrder()">
              Realizar Pedido
            </button>
          </div>
          <div class="col-sm-12 col-md-9 d-flex flex-wrap">
            <div v-for="(product, index) in products" :key="index" class="col-sm-12 col-md-4 px-4">
              <img
                :src="product.product_image"
                class="img-fluid"
                style="width: 220px; height: 240px; border-radius: 275px"
              />
              <div class="mt-2 p-3">
                <h3>{{ product.product_name }}</h3>
                <p>{{ product.product_price }} Bs.</p>
                <button
                  @click="addCart(product.id, product)"
                  class="btn-product-card"
                  style="background-color: #000; color: #fff"
                >
                  Agregar producto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from '@/config/site.config';
import { storageSave, storageGet } from '@/services/storage.js';
export default {
  name: 'GiftCardPage',
  data() {
    return {
      userId: 24,
      productsCart: storageGet('wildBox') || [],
      products: [],
      searchText: null,
      wildFriend: '',
      dedication: '',
      wildBoxOrder : '',
      phone: '59174913903',
    };
  },
  methods: {
    cargarProductos() {
      api.get('products/' + this.userId + '/getAll').then((response) => {
        this.products = response.data.products;
      });
    },
    searchProduct() {
      if (this.searchText !== '') {
        let apiParams = {
          s: this.searchText,
        };
        api.get('products/' + this.userId + '/search', { params: apiParams }).then((response) => {
          this.products = response.data.products;
        });
      } else {
        this.cargarProductos();
      }
    },
    addCart(id, product) {
      let newProduct = {
        id: product.id,
        product_name: product.product_name,
        product_price: product.product_price,
        product_image: product.product_image,
        quantity: 1,
      };
      let currentProductsCart = storageGet('wildBox') || [];
      if (!currentProductsCart.find((prod) => prod.id === id)) {
        let newProductsCart = [...currentProductsCart, newProduct];
        this.productsCart = newProductsCart;
        storageSave('wildBox', newProductsCart);
      }
    },
    addAmount(id) {
      let currentProductsCart = storageGet('wildBox');
      currentProductsCart.forEach((currentProd) => {
        if (currentProd.id === id) {
          currentProd.quantity = currentProd.quantity + 1;
        }
      });
      this.productsCart = [...currentProductsCart];
      storageSave('wildBox', currentProductsCart);
    },
    decreaseAmount(id) {
      let currentProductsCart = storageGet('wildBox');
      currentProductsCart.forEach((currentProd) => {
        if (currentProd.id === id && currentProd.quantity > 0) {
          currentProd.quantity = currentProd.quantity - 1;
        }
      });
      this.productsCart = [...currentProductsCart];
      storageSave('wildBox', currentProductsCart);
    },
    removeProduct(id) {
      let currentProductsCart = storageGet('wildBox');
      currentProductsCart.splice(
        currentProductsCart.findIndex(function (i) {
          return i.id === id;
        }),
        1,
      );
      this.productsCart = [...currentProductsCart];
      storageSave('wildBox', currentProductsCart);
    },
    productsOrder(){
      for(let x in this.productsCart){
        this.wildBoxOrder += '-' + this.productsCart[x].quantity + ' '+ this.productsCart[x].product_name + '\n';
      }
    },
    submitOrder(){
        this.productsOrder();
        let message = 'Mi Wild Box debe contener:\n' + this.wildBoxOrder + '\nMi amigo wild es: ' + this.wildFriend + '\nLa dedicatoria es: ' + this.dedication;
        let link = 'https://api.whatsapp.com/send?phone=' + this.phone + '&text=' + encodeURIComponent(message);
        window.location = link;
        console.log(message);
      },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.cargarProductos();
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
