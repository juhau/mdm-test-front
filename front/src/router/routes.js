const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/CartPage.vue"),
  },
];

export default routes;
