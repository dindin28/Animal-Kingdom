<template lang="pug">
.container.pt-3
  h2.mb-4 Кошик
  .row
    .col-12.col-md-8
      table.table.table-striped
        thead
          tr
            th Продукт
            th Ціна
            th Кількість
            th Видалити
        tbody
          tr(v-for="(item, index) in cartItems" :key="item.title")
            td {{ item.title }}
            td {{ item.price }}
            td {{ item.quantity }}
            td
              button.btn.btn-danger.btn-sm(@click="removeFromCart(index)") Видалити
    .col-12.col-md-4
      h4.mb-3 Загальна вартість: {{ total }}
      button.btn.btn-success.btn-block(@click="checkout") Оформити замовлення
</template>

<script>
export default {
  async prefetch({ initialState }) {

    console.log(initialState.products);

    const cartItems = initialState.products;

    return {
      cartItems,
    };
  },
  computed: {
    total() {
      if (!this.cartItems) {
        return 0;
      }
      return this.cartItems.reduce(
        (sum, item) => sum + parseFloat(item.price),
        0
      );
    },
  },
  methods: {
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    checkout() {
      // Handle the checkout process here
    },
  },
};
</script>

<style lang="sass" scoped>
.table
  margin-bottom: 2rem
</style>
