<template lang="pug">
header.navbar.navbar-expand-lg.navbar-light.flex-column.flex-lg-row.py-lg-3.py-2
  .container
    .d-flex.align-items-center
      a.navbar-brand(href="/")
        img(src="/src/assets/images/лого.png", height="63", alt="Animal Kingdom")
      h1.flex-grow-1 Animal Kingdom
    ul.navbar-nav.ml-auto.mb-2.mb-lg-0
      li.nav-item
        a.nav-link(href="/") Головна
      li.nav-item
        a.nav-link(href="/reviews") Відгуки
      li.nav-item
        a.nav-link(href="/rules") Правила Магазину
      li.nav-item
        a.nav-link(href="#")
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
</style>
  