export default [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/home.vue"),
  },
  {
    path: "/animals/:animalId",
    component: () => import("./pages/animals.vue"),
    name: "Animals",
  },
  {
    path: "/products/:productId",
    component: () => import("./pages/products.vue"),
    name: "Products",
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("./pages/basket.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("./pages/order.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("./pages/reviews.vue"),
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => import("./pages/rules.vue"),
  },
];
