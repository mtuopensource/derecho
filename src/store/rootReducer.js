import { combineReducers } from 'redux';
import weatherDataReducer from './weather-data/weatherDataReducers';

export default combineReducers({
	weatherDataStore: weatherDataReducer,
});