import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export default function useCocktailAPI() {
  const fetchRandomCocktails = async (numb = 3) => {
    const requests = Array.from({ length: numb }, () => axios.get(API_URL));
  
    const results = await Promise.all(requests);
  
    return results.map(result => result.data.drinks[0]);
  };

  return { fetchRandomCocktails };
}
