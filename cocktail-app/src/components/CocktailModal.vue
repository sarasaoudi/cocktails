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
      CocktailDetail
    },
    props: {
      cocktail: {
        type: Object,
        required: true
      },
      visible: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
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
  }
  
  .modal-content {
    background: #fff;
    border-radius: 10px;
    max-width: 600px;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
  .modal-content {
    width: 90vw; /* Adjust width on smaller screens */
    padding: 15px; /* Adjust padding on smaller screens */
  }

  .close-button {
    font-size: 20px; /* Adjust font size for smaller screens */
    top: 5px;
    right: 5px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    width: 95vw;
  }

  .close-button {
    font-size: 18px; /* Further adjust font size */
    top: 5px;
    right: 5px;
  }
}
  </style>
  