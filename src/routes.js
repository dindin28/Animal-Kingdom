export default [
  {
    path: '/',
    name: 'Home',
    component: () => import("./pages/home.vue"),
  },
  {
    path: "/animals/:animalId",
    component: () => import("./pages/animals.vue"),
    name: 'Animals',
  },
  {
    path: "/products/:productId",
    component: () => import("./pages/products.vue"),
    name: 'Products',
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import("./pages/basket.vue"),
  },
];