export const initialState = {data:'',weather:[],temp:[]};

export default(state=initialState, action) => {
	//console.log(action.payload)
	switch(action.type) {
		case 'CITY': {
			state = {...state, data:action.payload[4]}
			break;
		}
		case 'WEATHER': {
			state = {...state, weather: action.payload.weather[0], temp:action.payload.main}
			break;
		}
		default : {
			state = {...state}
			break;
		}
	}
	return state
}