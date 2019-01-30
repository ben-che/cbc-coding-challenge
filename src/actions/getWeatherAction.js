import { GET_WEATHER } from './types';
import axios from 'axios';
const convert = require('xml-js');

const apiKey = 'abf7c64fa93e226c7739cfbfc5a6e62f';

export function getWeather(lat, lon) {
	return function(dispatch) {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&mode=xml`
			)
			.then((res) => {
				let jsonData = JSON.parse(
					convert.xml2json(res.data, { compact: true })
				);
				console.log(jsonData);
				dispatch({
					type: GET_WEATHER,
					payload: { ...jsonData.current }
				});
			})
			.catch((e) => console.log(e));
	};
}
