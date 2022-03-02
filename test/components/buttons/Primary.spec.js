import { mount, shallowMount } from '@vue/test-utils';
import Primary from '@/components/buttoms/Primary.vue';

describe('Components / buttons / Primary', () => {
  test('Component is a Vue instance', () => {
    const wrapper = mount(Primary);
    expect(wrapper.vm).toBeTruthy();
  });
  test('Component is rendered', () => {
    const wrapper = shallowMount(Primary);
    expect(wrapper.find('.message').exists()).toBe(true);
  });
});
