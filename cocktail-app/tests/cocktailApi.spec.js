import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import useCocktailAPI from '@/composables/CocktailAPI';

vi.mock('axios');

describe('cocktailApi.js', () => {
  it('should fetch random cocktails', async () => {
    const mockData = {
      data: {
        drinks: [
          { idDrink: '1', strDrink: 'Mojito' },
          { idDrink: '2', strDrink: 'Martini' },
        ]
      }
    };

    axios.get.mockResolvedValue(mockData);

    const { fetchRandomCocktails } = useCocktailAPI();
    const cocktails = await fetchRandomCocktails(2);

    expect(cocktails.length).toBe(2);
    expect(cocktails[0].strDrink).toBe('Mojito');
  });
});
