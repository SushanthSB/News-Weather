import { FETCH } from '../actions'

export const initialState = {data:[]};

export default(state=initialState, action) => {
	switch(action.type) {
		case FETCH: {
			state= {...state,  data:action.payload.articles}
			break;
		}
		default: {
			state={...state}
			break;
		}
	}
	return state;
}
