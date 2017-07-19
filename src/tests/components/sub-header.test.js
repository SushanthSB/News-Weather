import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import SubHeader from '../../components/sub-header'

describe('SubHeader()',() => {
	const props = {
		news_source:['google-news', 'the-hindu']
	}
	it('should render without fail',() => {
		const wrapper = shallow(<SubHeader {...props} />)
		expect(wrapper).toHaveLength(1)
	})
	it('should not get modified',() => {
		const tree = renderer.create(<SubHeader {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	})
})