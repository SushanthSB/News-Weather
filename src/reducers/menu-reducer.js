import { ACTIVATION } from '../actions'

export const initialState = {term:'',subterm:''};

export default(state=initialState, action) => {
	switch(action.type) {
		case ACTIVATION: {
			state = {...state, term:action.term, subterm:action.subterm}
			break;
		}
		default: {
			state={...state}
			break;
		}
	}
	return state;
}
