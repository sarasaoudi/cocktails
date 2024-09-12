import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi} from 'vitest';
import App from '@/App.vue';
import CocktailList from '@/components/CocktailList.vue';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        stubs: {
          CocktailList: true,
        },
      },
    });
  });

  it('should mount successfully', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render CocktailList component', () => {
    expect(wrapper.findComponent(CocktailList).exists()).toBe(true);
  });

  it('should refresh button exists', () =>{
    const button_refresh = wrapper.find('.refresh-button');
    expect(button_refresh.exists()).toBe(true);
  } )

  it('should click on button', () =>{
    const spy = vi.spyOn(wrapper.vm, 'refreshCocktails')

    const button_refresh = wrapper.find('.refresh-button');
    button_refresh.trigger('click');

    expect(spy).toBeCalled();
  } )

});
