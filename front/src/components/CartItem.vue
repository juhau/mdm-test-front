<template>
        <tr>
          <td>
            <img :src="image" :alt="name">
          </td>
          <td>{{ name }}</td>
          <td>{{ price.base.formatted }}</td>
          <td>
            <button @click="() => updateProductQuantity(reference, +1)">+</button>
            {{ quantity }}
            <button @click="() => updateProductQuantity(reference, -1)">-</button>
          </td>
          <td>
            <button @click="() => removeProduct(reference)">Suppimer</button>
          </td>
          <td>{{ reference }}</td>
        </tr>
</template>

<script>
export default {
  props: ["name", "reference", "price", "image", "quantity"],
  methods: {
    updateProductQuantity(reference, quantity) {
      const payload = { reference, quantity };
      this.$store.dispatch("updateProductQuantity", payload);
    },
    removeProduct(reference) {
      this.$store.dispatch("removeProduct", reference);
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  border: 1px solid;
}
</style>
