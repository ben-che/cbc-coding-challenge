import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from './actions/getWeatherAction';
import Layout from './components/Layout';
import Loading from './components/Loading';
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
		if (Object.keys(this.props.weatherInfo).length === 0) {
			return (
				<div className="main-container">
					<Loading />
				</div>
			);
		}
		return (
			<div className="main-container">
				<Layout />
				<a className="website-link" href="https://benche.netlify.com">
					Made by Ben Che &rarr;
				</a>
			</div>
		);
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
