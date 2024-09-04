<template>
  <div class="app">
    <div class="content">
      <CocktailList :cocktails="cocktails" />    <!--  since its a props in the children components -->
    </div>
    <button class="refresh-button" @click="refreshCocktails" :class="{ spinning: isRefreshing }"> <!--  dynamically ad d a spinning -->
      <ChRefresh />
    </button>
    <LoadingSpinner v-if="isLoading" />
  </div>
</template>

<script>
import { ref } from 'vue';
import CocktailList from '@/components/CocktailList.vue';
import useCocktailAPI from '@/composables/CocktailAPI';
import { ChRefresh } from '@kalimahapps/vue-icons'; 
import LoadingSpinner from '@/components/LoadingSpinner.vue'; 

export default {
  mounted() {
    document.body.style.backgroundColor = '#efcad4';
  },
  components: {
    CocktailList,
    ChRefresh,
    LoadingSpinner
  },
  setup() {
    const cocktails = ref([]);
    const isRefreshing = ref(false);
    const { fetchRandomCocktails } = useCocktailAPI();
    const isLoading = ref(true); 

    const refreshCocktails = async () => {
      isLoading.value = true;
      cocktails.value = await fetchRandomCocktails();
      isLoading.value = false;
    };

    const init = async () => {
      cocktails.value = await fetchRandomCocktails();
      isLoading.value = false;
    };

    init();

    return { cocktails, refreshCocktails, isRefreshing, isLoading  };
  }
};
</script>

<style scoped>
.app {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #efcad4;
  overflow: hidden;
}

.content {
  flex: 1; 
  overflow-y: auto; 
  padding: 20px; 
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content::-webkit-scrollbar {
  display: none; 
}

.refresh-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  z-index: 1000;
}

.refresh-button:hover {
  background-color: #ff3b3b;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.refresh-button:focus {
  outline: none;
}

.refresh-button .spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive styling */
@media (max-width: 768px) {
  .refresh-button {
    top: auto;
    bottom: 20px;
    right: 20px;
  }
}
</style>
