import renderer from 'react-test-renderer';
import Reducers from '../../reducers/';

describe('Reducers()',() => {
	it('Should not be modified',() => {
		expect(Reducers).toMatchSnapshot();
	})
})