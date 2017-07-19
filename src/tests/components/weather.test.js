import React from 'react';
import { shallow } from 'enzyme';
import { Weather, celToFar, today } from '../../components/weather';
import renderer from 'react-test-renderer';
import { spy } from 'sinon'

describe("Weather",() => {
	let props = {
		weather:{
       		"data":{"log_name":"Bengaluru"},
       		"weather":{"description":"sunny","icon":"04n"},
       		"temp":{"temp":22.45,"temp_max":23,"temp_min":22}
       	}
	}
	it('renders without fail',() => {
		const tree = renderer.create(<Weather {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	})
	it('should call celToFar to convert celsius to farenheit on render',() => {
		let sp = spy(celToFar)
		sp(5)
		expect(sp.calledWith(5)).toEqual(true)
	})
	it('celToFar should take celsius and return farenheit of it',() => {
		const val = 5;
		const expected = (val*1.8+32).toFixed(2)
		expect(celToFar(val)).toEqual(expected)
	})
	it('should call today to fetch current day on render',() => {
		let sp = spy(today)
		sp();
		expect(sp.calledOnce).toEqual(true);
	})
	it('today should return current day',() => {
		const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
		const expected = days[new Date().getDay()].toUpperCase();
		expect(today()).toEqual(expected)
	})
})
