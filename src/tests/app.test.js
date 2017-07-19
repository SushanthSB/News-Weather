import React from 'react';
import { App } from '../app'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

describe("App()",() => {
	let props = {
		news_source: ['bbc-news','the-hindhu'],
		category: ['general','business'],
		subCategory:[{'General':['subterm']}], 
       	menu:{'term':'subterm'},
       	dataFetch: spy(),
       	fetch:{data:[{autor:"Jeff"}]},
       	weatherFetch:spy(),
       	weather:{
       		"data":{"log_name":"Bengaluru"},
       		"weather":{"description":"sunny","icon":"04n"},
       		"temp":{"temp":22.45,"temp_max":23,"temp_min":22}
       	}
	}

	it("Should not get modified",() => {
		const tree = renderer.create(<App {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it("Should render without breaking",() => {
		const wrapper = shallow(<App {...props} />);
		expect(wrapper).toHaveLength(1);
	});
	it("ComponentDidMount should get called",() => {
		spy(App.prototype, "componentDidMount")
		mount(<App {...props} />)
		expect(App.prototype.componentDidMount.calledOnce).toEqual(true)
	})
})
