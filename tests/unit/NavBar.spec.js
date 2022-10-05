import {flushPromises, mount } from '@vue/test-utils'
import NavBar from '../../src/views/shared/components/NavBar.vue'

test('search-bar', async () => {
    const wrapper = mount(NavBar, {})

    expect(wrapper.find('#title').text()).toBe('NavBar')
    expect(wrapper.find('#item1').text()).toBe('Dashboard')
    expect(wrapper.find('#item2').text()).toBe('Homepage')
    expect(wrapper.find('#item3').text()).toBe('Login')
    expect(wrapper.find('#item4').text()).toBe('Register')
})