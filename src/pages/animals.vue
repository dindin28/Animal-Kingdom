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
        src: "/src/assets/images/chamsters1.avif",
        link: "/products/chamsters1",
        caption: "Хом'як, що грається на колесі.",
      },
      {
        src: "/src/assets/images/chamsters2.avif",
        link: "/products/chamsters2",
        caption: "Хом'як, що спить у своєму гнізді.",
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
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/slicker.avif",
        link: "/products/slicker",
        caption: "Пуходірка",
        price: "100 грн",
      },
      {
        src: "/src/assets/images/leash.avif",
        link: "/products/leash",
        caption: "Поводок",
        price: "250 грн",
      },
      {
        src: "/src/assets/images/leash.avif",
        link: "/products/leash",
        caption: "Поводок",
        price: "250 грн",
      },
      {
        src: "/src/assets/images/leash.avif",
        link: "/products/leash",
        caption: "Поводок",
        price: "250 грн",
      },
      {
        src: "/src/assets/images/leash.avif",
        link: "/products/leash",
        caption: "Поводок",
        price: "250 грн",
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
