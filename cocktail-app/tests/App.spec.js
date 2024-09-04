import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
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
});
