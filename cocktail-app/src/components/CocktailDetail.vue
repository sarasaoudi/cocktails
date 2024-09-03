<template>
  <div class="cocktail-detail">
    <button class="close-button" @click="$emit('close')">&times;</button>
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="cocktail-image" />
    <h2>{{ cocktail.strDrink }}</h2>
    <p>{{ cocktail.strInstructions }}</p>
    
    <div v-if="ingredients.length" class="ingredients">
      <h3>Ingredients</h3>
      <div class="ingredient-list">
        <div v-for="(ingredient, index) in ingredients" :key="index" class="ingredient-item">
          <img :src="getIngredientImage(ingredient.name)" :alt="ingredient.name" class="ingredient-image" />
          <p>{{ ingredient.measure }} {{ ingredient.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cocktail: {
      type: Object,
      required: true
    }
  },
  computed: {
    ingredients() {
      const ingredients = [];

      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];

        if (ingredient) {
          ingredients.push({
            name: ingredient,
            measure: measure || ''
          });
        }
      }

      return ingredients;
    }
  },
  methods: {
    getIngredientImage(ingredientName) {
      return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Small.png`;
    }
  }
};
</script>

<style scoped>
.cocktail-detail {
  position: relative;
  width: 100%;
  max-width: 500px;
  text-align: center;
  background: #FAF3F3;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cocktail-image {
  width: 60%;
  border-radius: 30px;
  max-height: 400px;
  object-fit: cover;
}

p {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  color: rgb(124, 120, 120);
}

.cocktail-detail h2, h3 {
  margin: 20px 0;
  font-size: 24px;
  font-style: fantasy;
  font-size: 30px;
  font-weight: bold;
}

.ingredients {
  margin-top: 20px;
}

.ingredient-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.ingredient-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ingredient-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.ingredient-image {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  transition: transform 0.3s ease;
}

.ingredient-item:hover .ingredient-image {
  transform: rotate(5deg);
}

.ingredient-item p {
  margin: 0;
  font-size: 16px;
  color: rgb(124, 120, 120);
}

/* Close Button Styling */
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
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
  .cocktail-detail {
    padding: 20px;
  }

  .cocktail-detail h2 {
    font-size: 20px;
  }

  .ingredient-item p {
    font-size: 14px;
  }

  .ingredient-image {
    width: 40px;
    height: 40px;
  }

  .close-button {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
</style>
