<template lang="pug">
footer
  .container
    .row.row-cols-1.row-cols-md-2.g-4
      .col
        .quick-nav
          h2.fw-light.text-decoration-underline Швидка навігація
          ul
            li Головна
            li Відгуки
            li Правила магазину
        .general-info
          h2.fw-light.text-decoration-underline Загальна інформація
          p.d-flex.align-items-center.mb-2
            i.bi.bi-door-closed.icon-style.text-light.me-2
            span м. Київ, вул. Хрещатик, 21
          p.d-flex.align-items-center.mb-2
            i.bi.bi-telephone.icon-style.text-light.me-2
            a.link-secondary(href="tel:+380501234567") +38 (050)-123-45-67
          p.d-flex.align-items-center
            i.bi.bi-envelope.icon-style.text-light.me-2
            a.link-secondary(href="mailto:email.help@gmail.com") email.help@gmail.com
      .col
        h2.fw-light.text-decoration-underline Ми на карті
        img(src="../assets/images/GoogleMapTA.avif", alt="Google Maps", class="map-image mb-3")
        h2.fw-light.text-decoration-underline Графік роботи
        ul
          li Будні дні: 8:00 - 20:00
          li Вихідні дні: 10:00 - 18:00
    hr  
    .text-center
      span.text-nowrap.d-inline-block.me-4
        i.bi.bi-telegram.icon-style
      span.text-nowrap.d-inline-block.me-4
        i.bi.bi-instagram.icon-style
      span.text-nowrap.d-inline-block
        i.bi.bi-whatsapp.icon-style
      p.fw-light.mt-3 @Copyright. All rights reserved.
  .p-2
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
*
  color: white
p
  margin-bottom: 0

.map-image
  width: 100%
  max-width: 350px
  height: auto

.icon-style
  font-size: 2rem
</style>
  