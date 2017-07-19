import renderer from 'react-test-renderer';
import NewsSource from '../../reducers/news-source';

it("Array of sources should't alter",() => {
	expect(NewsSource()).toMatchSnapshot()
})