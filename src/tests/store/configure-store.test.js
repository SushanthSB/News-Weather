import renderer from 'react-test-renderer';
import Store from '../../store/configure-store';

describe('Reducers()',() => {
	it('Should not be modified',() => {
		expect(Store).toMatchSnapshot();
	})
})