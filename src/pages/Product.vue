<template>
<div class="row" style="background-color:#fee799">
  <div class="col-12">
    <div class="container" >
    <div class="row d-flex align-items-center m-5" style="height: 80vh">
      <div class="col-sm-12 col-md-5">
        <h1>{{ product.product_name }}</h1>
        <p>{{product.product_description}}</p>
      </div>
      <div class="col-sm-12 col-md-4">
        <img :src="product.product_image" class="product-img-info img-fluid" />
      </div>
      <div class="col-sm-12 col-md-3" align="center">
        <h2 class="text-right">{{ product.product_price }} Bs.</h2>
        <button class="btn-product-buy m-2" align="center" @click="buyProduct()">
          Comprar ahora
        </button>
        <button class="btn-product-buy m-2" align="center"  @click="addToCart(product.id, product)">
          Añadir a mi carrito
        </button>
        
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
  name: 'ProductPage',
  props: ['id'],
  data() {
    return {
      product: {},
      phone: '59174913903',
      productsCart: storageGet('cart') || [],
    };
  },
  methods: {
    buyProduct(){
      let message = '¡Hola! quiero comprar el producto: ' + this.product.product_name + ' por el precio de ' + this.product.product_price + " Bs.";
      let link = 'https://api.whatsapp.com/send?phone=' + this.phone + '&text=' + encodeURIComponent(message);
      window.location = link;
    },
    addToCart(id, product) {
      let newProduct = {
        id: product.id,
        product_name: product.product_name,
        product_price: product.product_price,
        product_image: product.product_image,
        quantity: 1,
      };
      let currentProductsCart = storageGet('cart') || [];
      if (!currentProductsCart.find((prod) => prod.id === id)) {
        let newProductsCart = [...currentProductsCart, newProduct];
        this.productsCart = newProductsCart;
        storageSave('cart', newProductsCart);
      }
    },
    
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.scrollTo({top:0, behavior: 'smooth'});
    api
      .get('products/getProduct/' + this.id)
      .then((response) => (this.product = response.data.product));
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
