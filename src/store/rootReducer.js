import { combineReducer } from 'redux';
import weatherDataReducer from './weather-data/weatherDataReducers';

export default combineReducer({
	weatherDataStore: weatherDataReducer,
});