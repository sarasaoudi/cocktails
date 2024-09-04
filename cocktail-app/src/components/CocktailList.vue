<template>
  <div class="carousel-container">
    <h1 class="app-title">Cocktail Bar</h1>
    <div class="carousel">
      <div
        v-for="(cocktail, index) in cocktails"
        :key="cocktail.idDrink"
        class="carousel-item"
        :class="{ active: index === activeIndex }"
        @mouseover="setActive(index)"
        @mouseleave="clearActive"
      >
        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="cocktail-image" />
        <p class="cocktail-title">{{ cocktail.strDrink }}</p>
        <div class="cocktail-detail">

          <p><strong>Instructions:</strong> {{ cocktail.strInstructions }}</p>
          <div v-if="getIngredients(cocktail).length" class="ingredients">

            <h4>Ingredients: </h4>

            <ul class="ingredient-list">
              <li v-for="(ingredient, index) in getIngredients(cocktail)" :key="index" class="ingredient-item">
                <img :src="getIngredientImage(ingredient.name)" :alt="ingredient.name" class="ingredient-image" />
                <p>{{ ingredient.measure }} {{ ingredient.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cocktails: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: null,
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },

    clearActive() {
      this.activeIndex = null;
    },

    getIngredients(cocktail) {
      const ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];

        if (ingredient) {
          ingredients.push({
            name: ingredient,
            measure: measure || '',
          });
        }
      }
      return ingredients;
    },

    getIngredientImage(ingredientName) {
      return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;
    },
  },
  mounted() {
    this.activeIndex = null;
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: auto;
}

.app-title {
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
  color: rgb(36, 34, 34);
  text-align: center;
  margin-bottom: 20px; 
}

.carousel {
  margin-top: 0; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 300px; 
  margin: 20px;
  opacity: 0.9;
  transform: scale(0.9);
  transition: transform 0.5s, opacity 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2a6a6;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.carousel-item.active {
  opacity: 1;
  transform: scale(1.1);
}

.cocktail-image {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 15px;
}

.cocktail-title {
  margin-top: 10px;
  font-size: 24px;
  font-style: fantasy;
  font-weight: bold;
  color: rgb(24, 1, 1);
  border-bottom: 2px solid black;
  padding-bottom: 5px;
}

.cocktail-detail {
  text-align: center;
  margin-top: 15px;
  font-size: 16px;
  font-style: fantasy;
  font-weight: bold;
  color: #302e2e;
}

.cocktail-detail h4 {
  margin-top: 10px;
  font-size: 18px;
  color: #0a0a0a;
  font-style: fantasy;
  font-weight: bold;
}

.ingredient-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
}

.ingredient-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
}

.ingredient-image {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.ingredient-item p {
  margin: 0;
  font-size: 14px;
  color: rgb(51, 50, 50);
  font-style: fantasy;
  font-weight: bold;
}
</style>
