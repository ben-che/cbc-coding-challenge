import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from './actions/getWeatherAction';
import './App.css';

class App extends Component {
	componentDidMount() {
		this.getCoordinates()
			.then((res) => {
				this.props.getWeather(res.coords.latitude, res.coords.longitude);
			})
			.catch((e) => console.log(e));
	}

	getCoordinates() {
		return new Promise(function(resolve, reject) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	}

	render() {
		console.log(this.props);
		return <div className="App">Hello</div>;
	}
}

const mapStateToProps = (state) => ({
	weatherInfo: state.getWeather.weatherInfo
});

const mapDispatchToProps = (dispatch) => {
	return {
		getWeather: (lat, lon) => {
			dispatch(getWeather(lat, lon));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
