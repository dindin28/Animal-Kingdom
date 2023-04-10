<template lang="pug">
div
  .bg-primary-subtle
    .container
      app-header
  .slot-background
    slot
  .p-2
  app-footer
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<style lang="sass" scoped>
.slot-background 
  background-image: url('/src/assets/images/background.png')
  background-size: cover
  background-position: center center
</style>
  