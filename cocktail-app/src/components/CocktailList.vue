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
          @click="selectCocktail(cocktail)"
        >
          <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
          <p class="cocktail-title">{{ cocktail.strDrink }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cocktails: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        activeIndex: 1, 
      };
    },
    methods: {
      setActive(index) {
        this.activeIndex = index; 
      },
      clearActive() {
        this.activeIndex = null; 
      },
      selectCocktail(cocktail) {
        this.$emit('select-cocktail', cocktail);
        this.activeIndex = this.cocktails.findIndex(c => c.idDrink === cocktail.idDrink); 
      }
    },
    mounted() {
      this.activeIndex = 1;
    }
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
    height: 100vh;
  }
  
  .app-title{
    font-size: 70px;
    font-weight: bold;
    font-style: italic;
    color: white;
    text-align: center;
  }
  .carousel {
    margin-top: 10%;
    display: flex;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    flex: 0 0 150px; /* Adjusted size */
    margin: 0 10px;
    opacity: 0.7;
    height: auto;
    transform: scale(0.8);
    transition: transform 0.5s, opacity 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D5B3B3;
    border-radius: 25px;
  }
  
  .carousel-item.active {
    opacity: 1;
    transform: scale(1.2);
  }
  
  .carousel-item img {
    width: 150px; 
    height: 150px; 
    border-radius: 70px;
    margin: 15px;
  }
  
  .cocktail-title {
    margin-top: 10px;
    font-size: 20px;
    font-style: cursive;
    font-weight: bold;
    color: white;
    

  }
    @media (max-width: 768px) {
        .carousel {
            flex-wrap: wrap;
        }
        .carousel-item {
            flex: 0 0 100px;
            margin: 0 5px;
        }
        .carousel-item img {
            width: 100px;
            height: 100px;
        }

    }
  </style>
  