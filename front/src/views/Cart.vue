<template>
  <div>
    <h1>Welcome to cart</h1>
    <template v-if="isLoading">
          <p>Chargement en cours ...</p>
    </template>
    <table class="items" v-else>
      <thead>
      <tr>
        <th>Image</th>
        <th>Nom</th>
        <th>Prix</th>
        <th>Quantité</th>
        <th>Suppression</th>
        <th>Référence</th>
      </tr>
      </thead>
      <tbody>
      <CartItem
        v-for="product of productsArray"
        :key="product.reference"
        :reference="product.reference"
        :image="product.images[0].xsmall"
        :name="product.name"
        :quantity="product.qty"
        :price="product.price"
      />
      </tbody>
      <tfoot>
      <tr>
        <th>Total</th>
        <td colspan="5">{{ cartTotalPrice | currency }}</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";

export default {
  components: { CartItem },
  data() {
    return {
      isLoading: false,
    };
  },
  filters: {
    currency: (value) => {
      const formatter = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
      return formatter.format(value);
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsArray() {
      return this.$store.getters.productsArray;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("fetchCartProducts");
    this.isLoading = false;
  },
};
</script>

<style lang="scss" scoped>
table, th, tr{
  border: 1px solid;
}
table {
  border-collapse: collapse;
}
</style>
