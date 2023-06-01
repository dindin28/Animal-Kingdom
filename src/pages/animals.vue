<template lang="pug">
.container.pt-5(v-if="animal")
  h1.text-center {{ animal.title }}
  .text-end.pe-5
    .btn-group.pe-5
      button.btn.btn-danger.dropdown-toggle(type='button' data-bs-toggle='dropdown' aria-expanded='false')
        | Сортувати
      ul.dropdown-menu
        li
          a.dropdown-item(href='#' @click.prevent="sortByPrice('asc')") За зростанням ціни
        li
          a.dropdown-item(href='#' @click.prevent="sortByPrice('desc')") За спаданням ціни
  .p-3
    .row
      .col-3.col-md-3(v-for="(image, index) in animal.images" :key="index")
        .text-center.m-3
          a(:href="image.link")
            img.img-grow.img-fluid(:src="image.src", width="180" alt="Animal Kingdom")
          p.pt-3 {{ image.caption }}
          span.small {{ image.price }}
  .p-2
</template>

<script>
const animalData = {
  chamsters: {
    title: "Хом'яки",
    text: "Хом'яки - це маленькі, хутряні гризуни, які стануть чудовими домашніми тваринами для людей всіх віків.",
    images: [
      {
        src: "/src/assets/images/hamsterCage.avif",
        link: "/products/hamsterCage",
        caption: "Домівка для хом'яка",
        price: "1200 грн",
      },
      {
        src: "/src/assets/images/hamsterFood.avif",
        link: "/products/hamsterFood",
        caption: "Їжа для хом'яків",
        price: "190 грн",
      },
    ],
  },
  cats: {
    title: "Коти",
    text: "Коти - розумні та незалежні тварини, відомі своєю іграшливістю та ласкавістю.",
    images: [
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/bowl.avif",
        link: "/products/bowl",
        caption: "Набір мисок",
        price: "300 грн",
      },
      {
        src: "/src/assets/images/leash.avif",
        link: "/products/leash",
        caption: "Повідець на рулетці",
        price: "250 грн",
      },
      {
        src: "/src/assets/images/catFood.avif",
        link: "/products/catFood",
        caption: "Корм для котів",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/catHammock.avif",
        link: "/products/catHammock",
        caption: "Гамак для кішок",
        price: "200 грн",
      },
      {
        src: "/src/assets/images/litterBox.avif",
        link: "/products/litterBox",
        caption: "Туалет для котів",
        price: "500 грн",
      },
      {
        src: "/src/assets/images/scratchingPost.avif",
        link: "/products/scratchingPost",
        caption: "Дерев'яний скретчер",
        price: "800 грн",
      },
    ],
  },
  dogs: {
    title: "Собаки",
    text: "Собаки - вірні та прив'язані тварини, відомі своєю відданістю та готовністю допомогти.",
    images: [
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/leash.avif",
        link: "/products/leash",
        caption: "Повідець на рулетці",
        price: "250 грн",
      },
      {
        src: "/src/assets/images/bowl.avif",
        link: "/products/bowl",
        caption: "Набір мисок",
        price: "300 грн",
      },
      {
        src: "/src/assets/images/dogFood.avif",
        link: "/products/dogFood",
        caption: "Корм собак",
        price: "200 грн",
      },
      {
        src: "/src/assets/images/dogCollar.avif",
        link: "/products/dogCollar",
        caption: "Кличка для собаки",
        price: "50 грн",
      },
      {
        src: "/src/assets/images/dogHouse.avif",
        link: "/products/dogHouse",
        caption: "Будка",
        price: "3000 грн",
      },
    ],
  },
  fishes: {
    title: "Риби",
    text: "Риби - тварини, що вражають своєю красою та грацією в водному середовищі.",
    images: [
      {
        src: "/src/assets/images/aquarium.avif",
        link: "/products/aquarium",
        caption: "Акваріум",
        price: "2000 грн",
      },
      {
        src: "/src/assets/images/fishFood.avif",
        link: "/products/fishFood",
        caption: "Корм для риб",
        price: "70 грн",
      },
    ],
  },
  birds: {
    title: "Птахи",
    text: "Птахи - граціозні та чарівні тварини, які вміють зворушувати своєю красою та голосами.",
    images: [
      {
        src: "/src/assets/images/birdCage.avif",
        link: "/products/birdCage",
        caption: "Клітка для птахів",
        price: "1500 грн",
      },
      {
        src: "/src/assets/images/birdFood.avif",
        link: "/products/birdFood",
        caption: "Корм для птахів",
        price: "120 грн",
      },
    ],
  },
  turtles: {
    title: "Черепахи",
    text: "Черепахи - тварини, що вражають своєю мудрістю та спокоєм.",
    images: [
      {
        src: "/src/assets/images/aquarium.avif",
        link: "/products/aquarium",
        caption: "Акваріум",
        price: "2000 грн",
      },
      {
        src: "/src/assets/images/turtleFood.avif",
        link: "/products/turtleFood",
        caption: "Корм для черепах",
        price: "119 грн",
      },
    ],
  },
  other: {
    title: "Інші тварини",
    text: "Тут продаються товари для різних видів тварин",
    images: [
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/horseSaddle.avif",
        link: "/products/horseSaddle",
        caption: "Сідло для коней",
        price: "599 грн",
      },
    ],
  },
};

export default {
  async prefetch({ to }) {
    const { animalId } = to.params;
    const animal = animalData[animalId];

    return { animal };
  },
  async mounted() {
    await import("bootstrap/js/dist/dropdown");
  },
  methods: {
    sortByPrice(order) {
      const sortedImages = this.animal.images.slice().sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        if (isNaN(priceA) || isNaN(priceB)) return 0;
        return order === "asc" ? priceA - priceB : priceB - priceA;
      });
      this.animal.images = [];
      this.animal.images = sortedImages;
    },
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
p
  margin-bottom: 0rem
img.img-grow
  -webkit-transition: all 0.7s ease
  transition: all 0.7s ease
  &:hover
    -webkit-transform: scale(1.2)
    transform: scale(1.2)
</style>
