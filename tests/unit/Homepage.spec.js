import {flushPromises, mount } from '@vue/test-utils'
import Home from '../../src/views/Homepage/Home.vue'

test('homepage', async () => {
    const wrapper = mount(Home, {})
    
    expect(wrapper.find('#title').text()).toBe('Professional Airplane')
    expect(wrapper.find('#page-num').text()).toBe('Page 1 of 456')
    expect(wrapper.find('#total-item').text()).toBe('45539 products')
    expect(wrapper.find('img[alt="Empty"]').attributes().src).toBe('https://picsum.photos/400/200')

    await flushPromises()
    await flushPromises()
    await flushPromises()
    await flushPromises()

    await wrapper.find('.homepage-btn').trigger('click')
})