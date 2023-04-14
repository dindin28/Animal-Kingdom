<template lang="pug">
header.navbar.navbar-expand-lg.navbar-light.flex-column.flex-lg-row
  .container
    .d-flex.align-items-center
      a.navbar-brand(href="/")
        img(src="/src/assets/images/лого.png", height="43", alt="Animal Kingdom")
      h1.flex-grow-1.fw-bolder Animal Kingdom
    ul.navbar-nav.ml-auto.mb-2.mb-lg-0
      li.nav-item
        a.nav-link(href="/") Головна
      li.nav-item
        a.nav-link(href="/reviews") Відгуки
      li.nav-item
        a.nav-link(href="/rules") Правила Магазину
      li.nav-item
        a.nav-link(href="/basket")
          i.bi-cart2
</template>

<style lang="sass" scoped>
a
  color: #369
  transition: ease-in-out 0.1s
  &:hover
    color: #FFFFFF
h1
  font-size: calc(0.75rem + 0.3vw)
  margin-top: 0.75rem
</style>
