import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../../components/Dropdown';

test('renders dropdown', () => {
  const wrapper = shallow(<Dropdown />);
		expect(wrapper.exists()).toBe(true);
});
