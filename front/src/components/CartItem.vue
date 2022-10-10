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
            <button @click="isModalOpen = true">Suppimer</button>
            <ConfirmModal
              v-if="isModalOpen"
              @onClose="isModalOpen = false"
              @onConfirm="($event) => onConfirmHandler($event, reference)"
            >
                êtes vous sur de vouloir supprimé
                l'article n°{{ reference }} ?
            </ConfirmModal>
          </td>
          <td>{{ reference }}</td>
        </tr>
</template>

<script>
import ConfirmModal from "./ConfirmModal.vue";

export default {
  components: { ConfirmModal },
  props: ["name", "reference", "price", "image", "quantity"],
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    updateProductQuantity(reference, quantity) {
      const payload = { reference, quantity };
      this.$store.dispatch("updateProductQuantity", payload);
    },
    removeProduct(reference) {
      this.$store.dispatch("removeProduct", reference);
    },
    onConfirmHandler(isConfirm, reference) {
      console.log(isConfirm, reference);
      if (isConfirm) {
        this.removeProduct(reference);
      }
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  border: 1px solid;
}
</style>
