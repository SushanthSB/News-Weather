import React from 'react';
import SubMenu from '../../components/sub-menu';
import { shallow } from 'enzyme';
import { spy } from 'sinon'

describe('SubMenu()',() => {
	let props = {
		menu:{'term':'subterm'},
		subCategory:[{'General':['subterm']}]
	}
	it('should render without fail',() => {
		const wrapper = shallow(<SubMenu {...props} />)
		expect(wrapper).toHaveLength(1)
	})
	it('call subCategory() when rendered',() => {
		spy(SubMenu.prototype, 'subCategory');
		shallow(<SubMenu {...props} />);
		expect(SubMenu.prototype.subCategory.calledOnce).toEqual(true)
	})
	it('should activate clicked class',() => {
		props = {
			menu:{'term':'General','subterm':'subterm'},
			subCategory:[{'General':['subterm']}]
		}
		const wrapper = shallow(<SubMenu {...props} />)
		expect(wrapper.find('li').hasClass('active')).toEqual(true)
	})
	it('should activate clicked class',() => {
		props = {
			menu:{'term':'General','subterm':'term'},
			subCategory:[{'General':['subterm']}]
		}
		const wrapper = shallow(<SubMenu {...props} />)
		expect(wrapper.find('li').hasClass('in-active')).toEqual(true)
	})
	it('should handle onclick with parameters',() => {
		props = {
			menu:{'term':'General','subterm':'subterm'},
			subCategory:[{'General':['subterm']}],
			handleTerm: spy()
		}

		spy(SubMenu.prototype, 'handleClick');
		const wrapper = shallow(<SubMenu {...props} />);
		wrapper.find('li').forEach((node)=>{
			node.simulate('click');
			expect(SubMenu.prototype.handleClick.calledWith('General','subterm')).toEqual(true)
		});
	})
	it('calls handleTerm prop once click is handled',() => {
		shallow(<SubMenu {...props} />);
		expect(props.handleTerm.calledWith('General','subterm')).toEqual(true)
	})
})