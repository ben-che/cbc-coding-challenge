import { GET_WEATHER } from '../actions/types';

const defaultState = {
	weatherInfo: {}
};

export default function getWeather(state = defaultState, action) {
	switch (action.type) {
		case GET_WEATHER:
			return { ...state, weatherInfo: action.payload };
	}
	return state;
}
