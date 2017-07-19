import React from 'react';
import { shallow, mount } from 'enzyme'
import Menu from '../../components/menu'
import { spy } from 'sinon'

describe('Menu()',() => {
	
	let props = {
		category:[{'name':'General'}],
		handleTerm: spy(),
		menu:{'term':'subterm'},
		subCategory:[{'General':['subterm']}]
	}

	it('Should render without breaking',()=>{
		const wrapper = shallow(<Menu {...props} />);
		expect(wrapper).toHaveLength(1);
	}) 

	it('should call category() on render',() => {
		spy(Menu.prototype, 'category')
		shallow(<Menu {...props} />);
		expect(Menu.prototype.category.calledOnce).toEqual(true)
	})

	it('should render list elements',() => {
		const wrapper = shallow(<Menu {...props} />)
		expect(wrapper.children().type()).toEqual('li')
	})
	
	it('should activate clicked class',() => {
		let props = {
			category:[{'name':'General'}],
			handleTerm: spy(),
			menu:{'term':'General'},
			subCategory:[{'General':['subterm']}]
		}
		const wrapper = shallow(<Menu {...props} />)
		expect(wrapper.find('li').hasClass('active')).toEqual(true)
	})

	it('should di-activate remainig class',() => {
		const wrapper = shallow(<Menu {...props} />)
		expect(wrapper.find('li').hasClass('not-active')).toEqual(true)
	})

	it('calls handleTerm onClick',() => {
		spy(Menu.prototype, 'handleClick');
		const wrapper = mount(<Menu {...props} />);
		wrapper.find('li').forEach((node)=>{
			node.simulate('click');
			expect(Menu.prototype.handleClick.calledWith('General')).toEqual(true)
		});
	})
	
	it('calls componentDidMount',() => {
		spy(Menu.prototype, 'componentDidMount');
		mount(<Menu {...props} />);
		expect(Menu.prototype.componentDidMount.calledOnce).toEqual(true)
	})
	
	it('calls handleTerm prop once it mounts',() => {
		mount(<Menu {...props} />);
		expect(props.handleTerm.calledWith('General','subterm')).toEqual(true)
	})
})