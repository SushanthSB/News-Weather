import FetchReducer, { initialState } from '../../reducers/fetch-reducer';

describe('Fetch reducer',() => {
	it('should return initialState upon initialization',() => {
		expect(FetchReducer(undefined,{})).toEqual(initialState);
	})
	it('should return new state upon FETCH',() => {
		const action = {
			type:'FETCH', 
			payload:{'articles':['data','subterm']}
		}
		const expected = {
			data: ['data','subterm']
		}
		expect(FetchReducer({},action)).toEqual(expected)
	})
})