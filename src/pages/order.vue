<template lang="pug">
div
  .container.shadow.bg-body.rounded.mt-4(style="max-width: 500px")
    form.p-2(@submit.prevent="submitOrder" v-if="!isOrdered")
      .form-group
        label(for="name") Ім'я та прізвище
        input.form-control#name(type="text" placeholder="Введіть ваше ім'я та прізвище" ref="nameInput")
      .form-group
        label(for="phoneNumber") Номер телефону
        input.form-control#phoneNumber(type="tel" placeholder="+380 95 123 45 67" ref="phoneInput")
      .form-group
        label(for="email") Електронна пошта
        input.form-control#email(type="email" placeholder="yourmail@gmail.com" ref="emailInput")
      .form-check.mb-3
        input.form-check-input#callBack(type="checkbox")
        label.form-check-label(for="callBack") Чи бажаєте вам перетелефонувати?
      .form-group
        label(for="deliveryMethod") Як бажаєте отримати товар?
        select.form-select#deliveryMethod
          option(value="courier") Кур'єром
          option(value="post") Поштою
          option(value="pickup") Самовивіз

      .form-group
        label(for="paymentMethod") Формат оплати
        select.form-select#paymentMethod
          option(value="immediately") Одразу
          option(value="onDelivery") При отриманні товару

      .form-group
        label(for="comment") Коментар
        textarea.form-control#comment(rows="3" placeholder="Введіть ваш коментар")

      .form-group
        label(for="address") Адреса (якщо кур'єр або пошта)
        input.form-control#address(type="text" placeholder="Введіть вашу адресу")

      button.btn.btn-primary.mb-2(type="submit") {{ isPackageOrdered ? 'Замовлення оформлено' : 'Відправити замовлення' }}
      .alert.alert-danger(role="alert" v-if="isAlert") Будь ласка, перевірте введені дані.
    .text-center.p-5(v-else)
      h4 Замовлення оформлено
      p Ваше замовлення успішно оформлено. Дякуємо за ваше звернення!
.p-4
</template>

<script>
export default {
  data() {
    return {
      isOrdered: false,
      isAlert: false,
    };
  },
  methods: {
    validateUkrainianPhoneNumber(phoneNumber) {
      const pattern = /^(\+38)?\d{10}$/;
      return pattern.test(phoneNumber);
    },
    validateForm() {
      const nameValid = this.$refs.nameInput.value.trim() !== "";
      const phoneValid = this.validateUkrainianPhoneNumber(this.$refs.phoneInput.value);
      const emailValid = this.$refs.emailInput.checkValidity();

      return nameValid && phoneValid && emailValid;
    },
    submitOrder() {
      if (this.validateForm()) {
        this.isOrdered = true;
        this.isAlert = false;
      } else {
        this.isAlert = true;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.form-group
  margin-bottom: 1rem
</style>
