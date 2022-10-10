<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link to="/cart">
          Panier <span class="cart-items">{{ totalProducts }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    totalProducts() {
      return this.$store.getters.cartTotalProduct;
    },
  },
  async created() {
    await this.$store.dispatch("fetchCartProducts");
  },
};
</script>

<style lang="scss" scoped>
 ul {
   display: flex;
   list-style-type: none;
   justify-content: center;
 }

 li {
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 15px;
 }

 a {
   color: black;
   &.router-link-exact-active {
     color: #42b983;
   }
 }
 .cart-items {
   display: inline-block;
   background-color: darkcyan;
   color: white;
   padding: 5px;
   border-radius: 50%;
 }
</style>
