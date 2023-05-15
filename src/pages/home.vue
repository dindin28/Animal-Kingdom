<template lang="pug">
.container
  .container.col-xxl-10
    .row.align-items-center.g-5
      .col-12.col-sm-7.col-lg-8
        img.d-block.mx-lg-auto.img-fluid(src="/src/assets/images/int_facts.avif", alt="Animal Kingdom") 
      .col-lg-4.col-sm-5.py-5
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
    .row.d-flex.justify-content-center
      .col-4.col-sm-6.col-md-3.p-2(v-for="category in categories" :key="category.link")
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
    .row.my-4
      .col.px-1(v-for="newItem in newItems" :key="newItem.link")
        .col-md-12.col-12.mb-4
          a(:href="newItem.link")
            img.img-fluid.img-grow(:src="newItem.src", width="160", alt="Animal Kingdom")
            p.pt-3.text-dark {{ newItem.title }}
  .p-2
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          src: "/src/assets/images/chamsters.avif",
          link: "/animals/chamsters",
        },
        {
          src: "/src/assets/images/cats.avif",
          link: "/animals/cats",
        },
        {
          src: "/src/assets/images/dogs.avif",
          link: "/animals/dogs",
        },
        {
          src: "/src/assets/images/fishes.avif",
          link: "/animals/fishes",
        },
        {
          src: "/src/assets/images/birds.avif",
          link: "/animals/birds",
        },
        {
          src: "/src/assets/images/turtles.avif",
          link: "/animals/turtles",
        },
        {
          src: "/src/assets/images/other.avif",
          link: "/animals/other",
        },
      ],
      topItems: [
        {
          src: "/src/assets/images/aquarium.avif",
          link: "/products/aquarium",
          title: "Акваріум",
        },
        {
          src: "/src/assets/images/birdCage.avif",
          link: "/products/birdCage",
          title: "Клітка для папуги",
        },
        {
          src: "/src/assets/images/bowl.avif",
          link: "/products/bowl",
          title: "Набір мисок",
        },
        {
          src: "/src/assets/images/leash.avif",
          link: "/products/leash",
          title: "Повідець на рулетці",
        },
        {
          src: "/src/assets/images/slicker.avif",
          link: "/products/slicker",
          title: "Пуходірка",
        },
      ],
      newItems: [
        {
          src: "/src/assets/images/aquarium.avif",
          link: "/products/aquarium",
          title: "Акваріум",
        },
        {
          src: "/src/assets/images/birdCage.avif",
          link: "/products/birdCage",
          title: "Клітка для папуги",
        },
        {
          src: "/src/assets/images/bowl.avif",
          link: "/products/bowl",
          title: "Набір мисок",
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
