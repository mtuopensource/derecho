import {
	LOAD_WEATHER_DATA,
	LOAD_WEATHER_DATA_RESPONSE,
} from '../actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case LOAD_WEATHER_DATA_RESPONSE:
			return {
				details: action.payload.body,
				status: action.payload.status === 200 ?
					'Success':
					'Failure',
				error: action.payload.error,
			};

		case LOAD_WEATHER_DATA:
			return {
				status: 'Pending',
			};
		default: return { ...state };
	}
};