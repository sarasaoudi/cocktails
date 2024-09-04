<template>
  <div class="app">
    <CocktailList :cocktails="cocktails" @select-cocktail="selectCocktail" />

    <button class="refresh-button" @click="refreshCocktails">
      Refresh Cocktails
    </button>
    
    <CocktailModal
      v-if="selectedCocktail"
      :cocktail="selectedCocktail"
      :visible="!!selectedCocktail"
      @close="selectedCocktail = null"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import CocktailList from '@/components/CocktailList.vue';
import CocktailModal from '@/components/CocktailModal.vue';
import useCocktailAPI from '@/composables/CocktailAPI';

export default {
  mounted(){
      document.body.style.backgroundColor = '#efcad4';
    },
  components: {
    CocktailList,
    CocktailModal
  },
  setup() {
    const cocktails = ref([]);
    const selectedCocktail = ref(null);
    const { fetchRandomCocktails } = useCocktailAPI();

    const init = async () => {
      cocktails.value = await fetchRandomCocktails();
    };

    const refreshCocktails = async () => {
      cocktails.value = await fetchRandomCocktails();
    };

    const selectCocktail = (cocktail) => {
      selectedCocktail.value = cocktail;
    };

    init();

    return { cocktails, selectedCocktail, selectCocktail, refreshCocktails };
  }
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efcad4;
}

.refresh-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.refresh-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.refresh-button:focus {
  outline: none;
}
</style>
