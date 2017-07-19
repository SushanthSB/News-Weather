import React from 'react';
import News from '../../components/news'
import renderer from 'react-test-renderer'

describe('News()',() => {
	let props = {
		fetch:{"data":[{"title":"News"},{"description":"Dispay news"},{"url":"https://newsapi.or"}]}
	}
	it('should render without fail',() => {
		const tree = renderer.create(<News {...props} />).toJSON
		expect(tree).toMatchSnapshot();
	})
})