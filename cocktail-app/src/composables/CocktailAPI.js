import axios from 'axios';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export default function useCocktailAPI() {

    let lastFetchedCocktails = new Set(); // Utilisation d'un Set pour stocker les ID des cocktails déjà récupérés (plus optimisé que de stocker le cocktail )

    const fetchRandomCocktails = async (numb = 3) => {
      const fetchUniqueCocktails = async () => {
        const cocktails = new Set(); 
        while (cocktails.size < numb) {  // Boucle jusqu'à ce que nous ayons le nombre souhaité de cocktails uniques
          const { data: { drinks } } = await axios.get(API_URL);
          const drink = drinks[0]; // On récupère le premier cocktail (car il n'y en a qu'un par appel)
          if (!lastFetchedCocktails.has(drink.idDrink)) cocktails.add(drink); // Si le cocktail n'a jamais été récupéré avant on l'ajoute au Set
        }
        return [...cocktails].sort((a, b) => a.strDrink.localeCompare(b.strDrink));  // Retourne un tableau trié des cocktails par ordre alphabétique de leur nom, j'ai garder localeCompare car elle permet de trier les chaînes de manière plus appropriée et puis si on veut utilisé une autre langue cela sera plus facile et plus lisible
      };
    
      const newCocktails = await fetchUniqueCocktails();
      newCocktails.forEach(cocktail => lastFetchedCocktails.add(cocktail.idDrink)); // On ajoute les nouveaux cocktails au Set
      return newCocktails;
    };
    
    return { fetchRandomCocktails };
}