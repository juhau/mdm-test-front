<template>
  <div class="modal-container">
    <div class="modal">
      <p><slot/></p>
      <div class="buttons">
        <button @click="$emit('onConfirm', true)">Oui</button>
        <button @click="$emit('onConfirm', false)">Non</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: min(calc(100% - 20px), 600px);
  padding: 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.buttons {
  display: flex;
  justify-content: space-evenly;

  button {
    background-color: darkcyan;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: bold;
    border: none;
    transition: .3s;
    &:active {
      transform: scale(0.9);
    }
  }
}

</style>
