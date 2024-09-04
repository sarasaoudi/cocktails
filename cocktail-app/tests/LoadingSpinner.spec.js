import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

describe('LoadingSpinner.vue', () => {
  it('should render correctly', () => {
    const wrapper = mount(LoadingSpinner);
    expect(wrapper.exists()).toBe(true);
  });

  it('should have the spinner class', () => {
    const wrapper = mount(LoadingSpinner);
    expect(wrapper.find('.loading-spinner').exists()).toBe(true);
  });
});
