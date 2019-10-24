import {
	LOAD_WEATHER_DATA,
	LOAD_WEATHER_DATA_RESPONSE,
} from '../actionTypes';

const initialState = {};

export default (state = {}, action) => {
	switch (action.type) {
		case LOAD_WEATHER_DATA_RESPONSE:
			const daily = action.payload.daily;
			return {
				body: action.payload.body,
				status: action.payload.status === 200 ?
					'Success':
					'Failure',
				error: action.payload.error,
			};

		case LOAD_WEATHER_DATA:
			return {
				status: 'Pending',
			};
	}
};