<template lang="pug">
.container
  .row
    .col-sm-12.col-md-8
      img.img-fluid(src="/src/assets/images/int_facts.png", alt="Animal Kingdom") 
    .col-sm-12.col-md-3.d-flex.flex-column.justify-content-center.pt-md-5
      p 
        span На фотографії зображений 
        span.fw-bold дикий кіт.
      p 
        span.text-decoration-underline Цікавий факт: 
        | вони здатні рухатися дуже швидко та підніматися на високість. Вони можуть стрибати на відстань до 6 метрів у довжину та до 3 метрів у висоту, що дозволяє їм підкрадатися до жертви з-за кущів або з високих дерев.
  .text-center
    p.fw-bold Ласкаво просимо до нашого зоомагазину!
    span Ми пропонуємо широкий вибір товарів для тварин усіх видів та розмірів. Наші продукти включають корми, іграшки, аксесуари та багато іншого, що допоможе забезпечити вашому улюбленцю комфортне та здорове життя.
  .p-4
  .text-center 
    h2 Категорії
    .p-1
    .row
      .col(v-for="category in categories" :key="category.link")
        .col-12.col-md-12
          a(:href="category.link")
            img.img-fluid.img-grow(:src="category.src", width="160" alt="Animal Kingdom")
    .p-4
    h2  ТОП товарів за кількістью продажів
    .row.my-4
      .col.px-1(v-for="topItem in topItems.slice(0, 3)" :key="topItem.link")
        .col-md-12.col-12.mb-4
          a(:href="topItem.link")
            img.img-fluid.img-grow(:src="topItem.src", width="160", alt="Animal Kingdom")
            p.pt-3.text-dark {{ topItem.title }}
    .row.my-4
      .col.px-1(v-for="topItem in topItems.slice(3, 5)" :key="topItem.link")
        .col-md-12.col-12.mb-4
          a(:href="topItem.link")
            img.img-fluid.img-grow(:src="topItem.src", width="160", alt="Animal Kingdom")
            p.pt-3.text-dark {{ topItem.title }}
  .p-4
  .text-center 
    h2 Новинки
  .p-2
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          src: "/src/assets/images/chamsters.png",
          link: "/animals/chamsters",
        },
        {
          src: "/src/assets/images/cats.png",
          link: "/animals/cats",
        },
        {
          src: "/src/assets/images/dogs.png",
          link: "/animals/dogs",
        },
        {
          src: "/src/assets/images/fishes.png",
          link: "/animals/fishes",
        },
        {
          src: "/src/assets/images/birds.png",
          link: "/animals/birds",
        },
        {
          src: "/src/assets/images/turtles.png",
          link: "/animals/turtles",
        },
        {
          src: "/src/assets/images/other.png",
          link: "/animals/other",
        },
      ],
      topItems: [
        {
          src: "/src/assets/images/aquarium.png",
          link: "/products/aquarium",
          title: "Акваріум",
        },
        {
          src: "/src/assets/images/cage.png",
          link: "/products/cage",
          title: "Клітка для папуги",
        },
        {
          src: "/src/assets/images/bowl.png",
          link: "/products/bowl",
          title: "Набір мисок",
        },
        {
          src: "/src/assets/images/leash.png",
          link: "/products/leash",
          title: "Повідець на рулетці",
        },
        {
          src: "/src/assets/images/slicker.png",
          link: "/products/slicker",
          title: "Пуходірка",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@media (max-width: 576px)
  img.img-fluid
    height: auto
    max-width: 100%
  p + p
    margin-top: 1rem
a
  color: #369
img.img-grow
  -webkit-transition: all 0.7s ease
  transition: all 0.7s ease
  &:hover
    -webkit-transform: scale(1.2)
    transform: scale(1.2)
</style>
