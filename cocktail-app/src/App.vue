<template>
  <div class="app">
    <CocktailList :cocktails="cocktails" @select-cocktail="selectCocktail" />
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

    const selectCocktail = (cocktail) => {
      selectedCocktail.value = cocktail;
    };

    init();

    return { cocktails, selectedCocktail, selectCocktail };
  }
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efcad4; /* Apply the background color here */
}


</style>
