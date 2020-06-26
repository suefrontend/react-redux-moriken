import { INCREMENT, DECREMENT, RESET } from '../constants/acion-types';

const initialState = {
	count: 0,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + 1,
			};
		case DECREMENT:
			return {
				count: state.count - 1,
			};
		case RESET:
			return {
				count: 0,
			};
		default:
			return state;
	}
}

export default rootReducer;
