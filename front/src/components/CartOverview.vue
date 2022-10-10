<template>
    <div class="container">
        <div class="panel">
            <div class="header">
              <h2>Table des produits</h2>
              <button @click="$emit('onClose')">
                <img src="@/assets/cancel.png" alt="close tab">
              </button>
            </div>
            <CartTable />
        </div>
    </div>
</template>

<script>
import CartTable from "./CartTable.vue";

export default {
  components: { CartTable },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.panel {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    background-color: white;
}

button {
  background: none;
  border: none;
  transition: 0.4s;
  &:active {
    transform: scale(0.9);
  }
}
</style>
