import {flushPromises, mount } from '@vue/test-utils'
import Login from '../../src/views/Login/Login.vue'

test('loginpage', async () => {
    const wrapper = mount(Login, {})

    const promises = [
        wrapper.find('input[name="email"]').setValue('email@email.com'),
        wrapper.find('input[name="password"]').setValue('password')
    ]

    const checkInput = wrapper.find('input[type="checkbox"]')

    await Promise.all(promises)

    await wrapper.find('#login-btn').trigger('click')

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
    
    expect(wrapper.find('input[name="email"]').element.value).toBe('email@email.com')
    expect(wrapper.find('input[name="password"]').element.value).toBe('password')

    expect(wrapper.find('#email').text()).toBe('Email address')
    expect(wrapper.find('#password').text()).toBe('Password')
    expect(wrapper.find('#remember').text()).toBe('Remember me')
    expect(wrapper.find('#forgot-pass').text()).toBe('Forgot password?')
    expect(wrapper.find('#no-account').text()).toBe(`Don't have account? Register`)
})