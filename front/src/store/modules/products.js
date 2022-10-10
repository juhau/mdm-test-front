import http from "@/api/axios-base";
import { CART_PRODUCTS_URL } from "@/constants/urls";

export default {
  state: {
    products: new Map(),
  },
  getters: {
    productsArray: (state) => Array.from(state.products.values()),
    cartTotalPrice: (state, getters) => getters.productsArray.reduce(
      (total, product) => total + product.price.base.amount * product.qty,
      0,
    ),
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchCartProducts({ commit }) {
      const response = await http.get(CART_PRODUCTS_URL);
      const products = new Map(Object.entries(response.data));
      console.log(products);
      commit("setProducts", products);
    },
    async updateProductQuantity({ state, commit }, payload) {
      const { reference, quantity } = payload;
      const productItem = state.products.get(reference);
      if (productItem.qty + quantity >= 0) {
        productItem.qty += quantity;
        const products = new Map(state.products);
        commit("setProducts", products);
        await http.patch(CART_PRODUCTS_URL, {
          [reference]: { ...productItem },
        });
      }
    },
    async removeProduct({ state, commit }, reference) {
      state.products.delete(reference);
      const products = new Map(state.products);
      commit("setProducts", products);
      // TODO Seems doesn't work
      // await axios.delete("http://localhost:3000/cart", reference);
    },
  },
};
