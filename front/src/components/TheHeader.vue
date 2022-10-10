<template>
  <header>
    <div class="top-header">
      <h1>My Shop</h1>
      <button @click="onClickHandler">
        <img src="@/assets/shopping-cart.png" alt="Seen Cart"/>
        <span class="cart-items">{{ totalProducts }}</span>
      </button>
    </div>
    <TheNavBar />
    <Transition name="fade">
      <CartOverview
        v-if="menuOpened"
        @onClose="menuOpened = false"
      />
    </Transition>
  </header>
</template>

<script>
import TheNavBar from "./TheNavBar.vue";
import CartOverview from "./CartOverview.vue";

export default {
  name: "Header",
  data() {
    return {
      menuOpened: false,
    };
  },
  components: {
    CartOverview,
    TheNavBar,
  },
  methods: {
    onClickHandler() {
      this.menuOpened = true;
    },
  },
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

.top-header {
  display: flex;
  justify-content: center;
  h1 {
    margin-right: 15px;
  }
}

button {
  position: relative;
  background: none;
  border: none;
}

.cart-items {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-color: darkcyan;
  color: white;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: -10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
