<template>
  <div class="home">
    <h1>Random Cocktails</h1>
    <button @click="getCocktails">Refresh Cocktails</button>
    <div class="cocktails-grid">
      <CocktailCard v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted  } from 'vue';
import useCocktailAPI from '@/composables/CocktailAPI';
import CocktailCard from '@/components/CocktailCard.vue';

export default {
  components: {
    CocktailCard
  },
  setup() {
    const cocktails = ref([]);
    const { fetchRandomCocktails } = useCocktailAPI();

    const init = async () => {
      await getCocktails();
    };

    const getCocktails = async () => {
      cocktails.value = await fetchRandomCocktails();
    };

    onMounted(init);

    return { cocktails, getCocktails };
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
.cocktails-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
@/composables/CocktailAPI