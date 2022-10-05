import {flushPromises, mount } from '@vue/test-utils'
import SearchBar from '../../src/views/shared/components/SearchBar.vue'

test('search-bar', async () => {
    const wrapper = mount(SearchBar, {})

    const promises = [
        wrapper.find('input[name="search"]').setValue('testestest')
    ]

    await Promise.all(promises)

    await wrapper.find('#btn-search').trigger('click')

    await flushPromises()
    await flushPromises()
    await flushPromises()
    await flushPromises()

    expect(wrapper.find('input[name="search"]').element.value).toBe('testestest')
})