<template>
  <div class="cocktail-card">
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="cocktail-image"/>
    <h2>{{ cocktail.strDrink }}</h2>
    <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
    <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
    <h3>Ingredients:</h3>
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">
        {{ ingredient }}
      </li>
    </ul>
    <p><strong>Instructions:</strong> {{ cocktail.strInstructions }}</p>
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
          ingredients.push(measure ? `${measure} ${ingredient}` : ingredient);
        }
      }
      return ingredients;
    }
    
  }
};
</script>

<style scoped>
.cocktail-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  text-align: center;
}

.cocktail-image {
  width: 100%;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
