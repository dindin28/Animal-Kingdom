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
  catFood: {
    src: "/src/assets/images/cat-food.png",
    link: "/products/cat-food",
    title: "Корм для котів",
    description:
      "Корм для котів - це спеціальний продукт, призначений для годування котів, який містить всі необхідні поживні речовини для здоров'я та добробуту тварини. Корм може бути в сухій або вологій формі, в залежності від вимог та вподобань кота.",
    usage:
      "Корм для котів є основним джерелом поживних речовин для кота, тому важливо вибрати якісний продукт. Корм потрібно давати у відповідних кількостях та відповідно до потреб кота.",
    price: "50 грн",
  },
  dogFood: {
    src: "/src/assets/images/dog-food.png",
    link: "/products/dog-food",
    title: "Корм для собак",
    description:
      "Корм для собак - це спеціально складений продукт, який містить необхідну кількість поживних речовин та вітамінів для здорового розвитку тварини. Корм може бути виготовлений з різних інгредієнтів, таких як м'ясо, злаки, овочі та фрукти.",
    usage:
      "Корм є основним джерелом поживних речовин для собак, тому важливо вибирати якісний продукт, який задовольняє потреби тварини. Корм може бути використаний як єдиний вид харчування, або як доповнення до раціону.",
    price: "200 грн",
  },
  catHammock: {
    src: "/src/assets/images/cat-hammock.png",
    link: "/products/cat-hammock",
    title: "Гамак для кішок",
    description:
      "Гамак для кішок - це спеціальний меблевий виріб, призначений для відпочинку та розваг тварини. Гамак складається з тканини, яка натягнута на металеву раму, та кріпиться до стіни або меблів.",
    usage:
      "Гамак для кішок є чудовим місцем для відпочинку та гри для тварини. Він може бути розташований у будь-якому місці, де кішка любить проводити час, наприклад, на підвіконні або біля вікна.",
    price: "200 грн",
  },
  dogCollar: {
    src: "/src/assets/images/dog-collar.avif",
    link: "/products/dog-collar",
    title: "Кличка для собаки",
    description:
      "Кличка для собаки - це спеціальний аксесуар, який надівається на шию тварини та використовується для ідентифікації та контролю над твариною. Клички можуть бути виготовлені з різних матеріалів, таких як шкіра, нейлон, або метал.",
    usage:
      "Кличка є необхідним аксесуаром для будь-якої собаки, оскільки вона допомагає ідентифікувати тварину, а також може бути використана для контролю та підтримання безпеки тварини.",
    price: "50 грн",
  },
  litterBox:
  {
    src: "/src/assets/images/litter-box.avif",
    link: "/products/litter-box",
    title: "Туалет для кішок",
    description:
      "Компактний туалет для кішок з високими бортиками та сіткою для утримання наповнювача.",
    price: "500 грн",
  },
  scratchingPost:
  {
    src: "/src/assets/images/scratching-post.png",
    link: "/products/scratching-post",
    title: "Дерев'яний скретчер",
    description:
      "Дерев'яний скретчер для кішок з м'якою тканиною та гойдалкою для гри.",
    price: "800 грн",
  },
  dogHouse:
  {
    src: "/src/assets/images/dog-house.png",
    link: "/products/dog-house",
    title: "Будка для собак",
    description:
      "Комфортна будка для собак з віконцями та дверима, що запобігають попаданню опадів.",
    price: "3000 грн",
  },
  fishFood:
  {
    src: "/src/assets/images/fish-food.png",
    link: "/products/fish-food",
    title: "Корм для риб",
    description:
      "Корм для різних видів риб з відповідними поживними речовинами та вітамінами.",
    price: "70 грн",
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

      similarProducts.sort(() => Math.random() - 0.5);

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
