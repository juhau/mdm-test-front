import Vue from "vue";
import Vuex from "vuex";
import productModule from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    products: productModule,
  },
});
