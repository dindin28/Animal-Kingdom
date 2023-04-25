<template lang="pug">
.container.pt-3
  h2.mb-4 Кошик
  .table-responsive
    table.table.table-striped
      thead
        tr
          th
          th Продукт
          th Ціна
          th Кількість
          th Видалити
      tbody
        tr(v-for="(item, index) in cartItems" :key="item.title")
          td
            img.img-fluid(:src="item.src" alt="item.title" width="150")
          td.align-middle {{ item.title }}
          td.align-middle {{ item.price }}
          td.align-middle
            input.form-control.w-25.w-md-25(type="number" min="1" v-model.number="item.quantity" @change="updateQuantity(item)")
          td.align-middle
            button.btn.btn-danger.btn-sm(@click="removeFromCart(index)") Видалити
  h4.mb-3
    .d-flex.justify-content-between
      span Загальна вартість: 
      span {{ total }} грн
  .d-flex.justify-content-between
    a.col-5(href="/")
      button.btn.btn-secondary.btn-block Повернутися до покупок
    a.col-5.text-end(v-if="cartItems.length" href="/order")
      button.btn.btn-success.btn-block Оформити замовлення
  .p-5
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  created() {
    if (!import.meta.env.SSR) {
      this.cartItems = JSON.parse(localStorage.getItem("basket"));
    }
  },
  computed: {
    total() {
      if (!this.cartItems) return 0;
      return this.cartItems.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.quantity,
        0
      );
    },
  },
  methods: {
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("basket", JSON.stringify(this.cartItems));
    },
    updateQuantity(item) {
      const cart = JSON.parse(localStorage.getItem("basket") || "[]");
      const existingItem = cart.find(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItem) {
        existingItem.quantity = item.quantity;
        localStorage.setItem("basket", JSON.stringify(cart));
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.table
  margin-bottom: 2rem
</style>
