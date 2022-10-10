<template>
  <header>
      <h1>My Shop</h1>
      <TheNavBar />
  </header>
</template>

<script>
import TheNavBar from './TheNavBar.vue';

export default {
  name: 'Header',
  components: {
    TheNavBar,
  },
};
</script>

<style lang="scss" scoped>

</style>
