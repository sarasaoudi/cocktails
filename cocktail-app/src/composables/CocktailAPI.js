import axios from 'axios';

// get the api url from the environment variables
const API_URL = process.env.VUE_APP_ROOT_API;

export default function useCocktailAPI() {
  const fetchRandomCocktails = async (numb = 3) => {
    const requests = Array.from({ length: numb }, () => axios.get(API_URL));
  
    const results = await Promise.all(requests);
  
    return results.map(result => result.data.drinks[0]);
  };

  return { fetchRandomCocktails };
}
