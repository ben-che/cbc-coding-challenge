import { combineReducers } from 'redux';
import getWeather from './getWeatherReducer';

export default combineReducers({
	getWeather: getWeather
});
