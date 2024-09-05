import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export default function useCocktailAPI() {
  let lastFetchedCocktails = [];

  const fetchRandomCocktails = async (numb = 3) => {
    const fetchCocktails = async (count) => {
      const requests = Array.from({ length: count }, () => axios.get(API_URL));
      const results = await Promise.all(requests);
      return results.map(result => result.data.drinks[0]);
    };

    let newCocktails = await fetchCocktails(numb);

    // filtrer les cocktails déjà récupérés
    newCocktails = newCocktails.filter(cocktail => 
      !lastFetchedCocktails.some(last => last.idDrink === cocktail.idDrink)
    );

    // Re-fetch
    while (newCocktails.length < numb) {
      const additionalCocktails = await fetchCocktails(numb - newCocktails.length);
      newCocktails = [
        ...newCocktails, 
        ...additionalCocktails.filter(cocktail => 
          !newCocktails.some(c => c.idDrink === cocktail.idDrink)
        )
      ];
    }

    newCocktails.sort((a, b) => a.strDrink.localeCompare(b.strDrink));

    lastFetchedCocktails = [...newCocktails];

    return newCocktails;
  };

  return { fetchRandomCocktails };
}
