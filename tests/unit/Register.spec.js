import {flushPromises, mount } from '@vue/test-utils'
import Registerpage from '../../src/views/Register/Registerpage.vue'

test('registerpage', async () => {
    const wrapper = mount(Registerpage, {})

    const promises = [
        wrapper.find('input[name="username"]').setValue('testestest'),
        wrapper.find('input[name="email"]').setValue('email@email.com'),
        wrapper.find('input[name="password"]').setValue('password'),
        wrapper.find('input[name="confirm"]').setValue('password'),
    ]

    const checkInput = wrapper.find('input[type="checkbox"]')

    await Promise.all(promises)

    await wrapper.find('#register-btn').trigger('click')

    await flushPromises()
    await flushPromises()
    await flushPromises()
    await flushPromises()

    await checkInput.setChecked()

    await flushPromises()
    await flushPromises()
    await flushPromises()
    await flushPromises()

    expect(checkInput.element.checked).toBeTruthy()

    expect(wrapper.find('input[name="username"]').element.value).toBe('testestest')
    expect(wrapper.find('input[name="email"]').element.value).toBe('email@email.com')
    expect(wrapper.find('input[name="password"]').element.value).toBe('password')
    expect(wrapper.find('input[name="confirm"]').element.value).toBe('password')
    expect(wrapper.find('#username').text()).toBe('Username')
    expect(wrapper.find('#email').text()).toBe('Email address')
    expect(wrapper.find('#password').text()).toBe('Password')
    expect(wrapper.find('#confirm-password').text()).toBe('Confirm Password')
})