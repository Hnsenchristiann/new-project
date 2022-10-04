import {flushPromises, mount } from '@vue/test-utils'
import SearchBar from '../../src/views/shared/components/SearchBar.vue'

test('search-bar', async () => {
    const wrapper = mount(SearchBar, {
        global: {
            plugins: [...Object.values(options.plugins)],
            components: {...options.components}
        }
    })

    const promises = [
        wrapper.find('input[name="search"]').setValue('testestest')
    ]
    await nextTick()

    await Promise.all(promises)

    await wrapper.find('#btn-search').trigger('click')
})