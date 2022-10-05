import {flushPromises, mount } from '@vue/test-utils'
import Dashboard from '../../src/views/Dashboard/DashBoard.vue'

test('dashboard', async () => {
    const wrapper = mount(Dashboard, {})
    
    expect(wrapper.find('#dash-title').text()).toBe('lorem ipsum')
    expect(wrapper.find('#title-section1').text()).toBe('Browse Top Product Types')
    expect(wrapper.find('#section1-item1').text()).toBe('Item 1')
    expect(wrapper.find('#section1-item2').text()).toBe('Item 2')
    expect(wrapper.find('#section1-item3').text()).toBe('Item 3')
    expect(wrapper.find('#section1-item4').text()).toBe('Item 4')
    expect(wrapper.find('#section1-item5').text()).toBe('Item 5')
    expect(wrapper.find('#title-section2').text()).toBe('Explore Popular Product Categories')
    expect(wrapper.find('#title-section3').text()).toBe('Product Benefit')
    expect(wrapper.find('#section3-content-title').text()).toBe('Best Price')
    expect(wrapper.find('#section3-content').text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis est')
    expect(wrapper.find('#title-section4').text()).toBe('Discover More Products and Services')
    expect(wrapper.find('.dash-card').text()).toBe('Best PriceLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis est Curabitur placerat ac nibh at ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tempor mollis massa')
    await flushPromises()
    await flushPromises()
    await flushPromises()
    await flushPromises()

    await wrapper.find('.section3-btn').trigger('click')
    expect(wrapper.find('img[alt="Empty"]').attributes().src).toBe('https://picsum.photos/100/100')
})