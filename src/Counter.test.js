import React from 'react'
import { shallow } from 'enzyme'

import Counter from './Counter'

it('renders correctly', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.find('#btn-test-add')).toHaveLength(1)
    expect(wrapper.find('#btn-test-sub')).toHaveLength(1)
    const text = wrapper.find('#count').text()
    expect(text).toEqual("0")
})