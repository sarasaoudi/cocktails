<template>
  <div v-if="visible" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="close">×</button>
      <CocktailDetail :cocktail="cocktail" />
    </div>
  </div>
</template>

<script>
import CocktailDetail from '@/components/CocktailDetail.vue';

export default {
  components: {
    CocktailDetail,
  },
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  border-radius: 20px;
  max-width: 40%;
  max-height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 20px 20px; /* Top padding ensures space between button and content */
  overflow-y: auto;
  box-sizing: border-box;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff6b6b;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.close-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.close-button:focus {
  outline: none;
}

@media (max-width: 768px) {
  .modal-content {
    width: 90vw;
    padding: 40px 15px 15px; /* Adjust padding */
  }

  .close-button {
    font-size: 20px;
    top: 5px;
    right: 5px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    width: 95vw;
    padding: 40px 10px 10px; /* Further adjust padding */
  }

  .close-button {
    font-size: 18px;
    top: 5px;
    right: 5px;
  }
}
</style>
