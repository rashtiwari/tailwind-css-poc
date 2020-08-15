import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Test all positive scenario to render header', () => {
	it('renders header without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders an `.bg-white`', () => {
		const wrapper = shallow(<Header />);
		const classFor = wrapper.find('.bg-white');
		expect(classFor.exists()).toBe(true);
	});

	it('should not have class `.bg-white-888`', () => {
		const wrapper = shallow(<Header />);
		const classFor = wrapper.find('.bg-white-888');
		expect(classFor.exists()).toBe(false);
	});

	it('Test click event', () => {
		const wrapper = shallow(<Header />);
		wrapper.find('button').at(0).props().onClick();
		expect(wrapper.find('nav').props().className).toEqual('items-center block px-2 pt-4 pb-4 sm:flex sm:p-0');
	});
})