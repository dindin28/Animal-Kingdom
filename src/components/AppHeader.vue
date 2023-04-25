<template lang="pug">
header.d-flex.flex-wrap.justify-content-center.py-3.border-bottom
  a.d-flex.align-items-center.mb-3.mb-md-0.me-md-auto.link-body-emphasis.text-decoration-none(href='/')
    img(src="/src/assets/images/лого.avif", height="43", alt="Animal Kingdom")
    h1.flex-grow-1.fw-bolder.ms-2 Animal Kingdom
  ul.nav.nav-pills
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
