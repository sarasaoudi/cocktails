import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CocktailList from '@/components/CocktailList.vue';

describe('CocktailList.vue', () => {
  const cocktails = [
    { idDrink: '1', strDrink: 'Mojito', strDrinkThumb: 'mojito.jpg', strInstructions: 'Mix it!' },
    { idDrink: '2', strDrink: 'Martini', strDrinkThumb: 'martini.jpg', strInstructions: 'Shake it!' },
  ];

  it('should render cocktails correctly', () => {
    const wrapper = mount(CocktailList, {
      props: {
        cocktails
      }
    });

    expect(wrapper.findAll('.carousel-item').length).toBe(cocktails.length);
  });

  it('should highlight cocktail on hover', async () => {
    const wrapper = mount(CocktailList, {
      props: {
        cocktails
      }
    });

    await wrapper.find('.carousel-item').trigger('mouseover');
    expect(wrapper.vm.activeIndex).toBe(0);
  });
});
