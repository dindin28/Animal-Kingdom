<template lang="pug">
.container
  .row.align-items-center.py-5
    .col-12.col-md-6
      img.img-fluid(:src="product.src", width="530", :alt="product.title")
    .col-12.col-md-6
      h2 {{ product.title }}
      p.lead {{ product.price }}
      .badge.text-bg-danger(v-if="product?.inStock === false") Немає в наявності
      button.btn.btn-success.transition-button(v-else, @click.stop="buyItem" ) {{ addedToCart ? 'Додано в кошик' : 'Купити' }}
  .row.py-4
    .col-12
      h4 Опис товару:
      p {{ product.description }}
  .row.py-4
    .col-12
      h4 Кому знадобиться?
      p {{ product.usage }}
  .py-5
    h3 Схожі товари
    .row
      .col-12.col-md-3(v-for="similarProduct in similarProducts" :key="similarProduct.title")
        .text-center
          a(:href="similarProduct.link")
            img.img-fluid.img-grow(:src="similarProduct.src", width="180", :alt="similarProduct.title")
          h5.pt-3.text-center {{ similarProduct.title }}
          p.text-center.lead {{ similarProduct.price }}
</template>

<script>
const productsData = {
  aquarium: {
    src: "/src/assets/images/aquarium.avif",
    link: "/products/aquarium",
    title: "Акваріум",
    description:
      "Сучасний акваріум зі скла, ідеальний для різноманітних видів риб та рослин.",
    price: "2000 грн",
  },
  cage: {
    src: "/src/assets/images/cage.avif",
    link: "/products/cage",
    title: "Клітка для папуги",
    description:
      "Простора клітка для папуги з гойдалкою та кормушками для комфортного життя вашої птахи.",
    price: "1500 грн",
    inStock: false,
  },
  bowl: {
    src: "/src/assets/images/bowl.avif",
    link: "/products/bowl",
    title: "Набір мисок",
    description:
      "Набір з двох мисок для їжі та води, ідеальний для домашніх тварин.",
    price: "300 грн",
  },
  leash: {
    src: "/src/assets/images/leash.avif",
    link: "/products/leash",
    title: "Повідець на рулетці",
    description:
      "Зручний повідець на рулетці з блокуванням, що забезпечує комфортну прогулянку з вашим улюбленцем.",
    price: "250 грн",
  },
  slicker: {
    src: "/src/assets/images/slicker.avif",
    link: "/products/slicker",
    title: "Пуходірка",
    description:
      "Пуходірка - це пристрій для видалення непотрібних волосків з поверхні одягу, меблів, килимів, та інших текстильних виробів. Вона складається з ручки і спеціальної насадки з металевими або пластиковими зубцями, які здійснюють захоплення волосків і їх видалення.",
    usage:
      "Пуходірки є незамінними для тих, хто має домашніх тварин, так як вони допомагають збирати волоски і шерсть з одягу та меблів. Вони також корисні для видалення інших типів забруднень, таких як пил, бруд та плями.",
    price: "100 грн",
  },
};

export default {
  async prefetch({ to }) {
    const { productId } = to.params;
    const product = productsData[productId];

    return { product };
  },
  data() {
    return {
      addedToCart: false,
    };
  },
  methods: {
    buyItem() {
      this.addedToCart = true;

      const storedCart = JSON.parse(localStorage.getItem("basket") || "[]");
      const existingItemIndex = storedCart.findIndex(
        (item) => item.title === this.product.title
      );

      if (existingItemIndex >= 0) {
        storedCart[existingItemIndex].quantity += 1;
      } else {
        storedCart.push({ ...this.product, quantity: 1 });
      }

      localStorage.setItem("basket", JSON.stringify(storedCart));

      setTimeout(() => {
        this.addedToCart = false;
      }, 3000);
    },
  },
  computed: {
    similarProducts() {
      const similarProducts = Object.values(productsData).filter(
        (product) => product.title !== this.product.title
      );

      return similarProducts.slice(0, 4);
    },
  },
};
</script>

<style lang="sass" scoped>
.transition-button
  transition: background-color 0.3s, color 0.3s
  &:hover
    color: white
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
