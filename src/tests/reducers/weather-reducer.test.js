import WeatherReducer, { initialState } from '../../reducers/weather-reducer';

describe('Fetch reducer',() => {
	it('should return initialState upon initialization',() => {
		expect(WeatherReducer(undefined,{})).toEqual(initialState);
	})
	it('should return new state upon finding CITY',() => {
		const action = {
			type:'CITY', 
			payload:['','','','','subterm']
		}
		const expected = {
			data: 'subterm'
		}
		expect(WeatherReducer({},action)).toEqual(expected)
	})
	it('should return new state upon finding WEATHER forecast',() => {
		const action = {
			type:'WEATHER', 
			payload:{"main":"temp","weather":['wind']}
		}
		const expected = {
			weather: 'wind',
			temp: 'temp'
		}
		expect(WeatherReducer({},action)).toEqual(expected)
	})
})