import MenuReducer, { initialState } from '../../reducers/menu-reducer';

describe('Reducers',() => {
	it('return initial state upon initialization',() => {
		expect(MenuReducer(undefined,{})).toEqual(initialState)
	})
	it('should return new state upon activaion',() => {
		const action = {
			type:'ACTIVATION', 
			term: 'term', 
			subterm: 'subterm'
		}
		const expected = {
			term: 'term',
			subterm: 'subterm'
		}
		expect(MenuReducer({},action)).toEqual(expected)
	})
})