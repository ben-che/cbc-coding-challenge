import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getWeather } from './actions/getWeatherAction';
import Layout from './components/Layout';
import Loading from './components/Loading';
import './App.css';

class App extends Component {
	componentDidMount() {
		axios
			.get('http://ip-api.com/json/')
			.then((res) => {
				console.log(res);
				this.props.getWeather(res.data.lat, res.data.lon);
			})
			.catch((e) => console.log(e));
	}

	render() {
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
