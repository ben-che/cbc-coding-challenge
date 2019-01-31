import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Layout.css';
import snow from './assets/snow.jpeg';
import rain from './assets/rain.jpeg';
import sun from './assets/sun.jpeg';

class Layout extends Component {
	state = {
		displayCelsius: true
	};

	renderBackground() {
		// 6xx = snow
		if (this.props.weatherInfo.weather._attributes.number[0] === '6') {
			return (
				<div
					className="layout-background"
					style={{ backgroundImage: `url(${snow})` }}
				/>
			);
		}
		// 5xx = rain
		else if (this.props.weatherInfo.weather._attributes.number[0] === '5') {
			return (
				<div
					className="layout-background"
					style={{ backgroundImage: `url(${rain})` }}
				/>
			);
		}

		return (
			<div
				className="layout-background"
				style={{ backgroundImage: `url(${sun})` }}
			/>
		);
	}

	renderCurrentTemperature() {
		if (this.state.displayCelsius) {
			return (
				this.props.weatherInfo.temperature._attributes.value - 273.15
			).toFixed(1);
		}

		return (
			(this.props.weatherInfo.temperature._attributes.value - 273.15) *
				(9 / 5) +
			32
		).toFixed(1);
	}

	renderLowTemperature() {
		if (this.state.displayCelsius) {
			return (
				this.props.weatherInfo.temperature._attributes.min - 273.15
			).toFixed(1);
		}

		return (
			(this.props.weatherInfo.temperature._attributes.min - 273.15) *
				(9 / 5) +
			32
		).toFixed(1);
	}

	renderHighTemperature() {
		if (this.state.displayCelsius) {
			return (
				this.props.weatherInfo.temperature._attributes.max - 273.15
			).toFixed(1);
		}

		return (
			(this.props.weatherInfo.temperature._attributes.max - 273.15) *
				(9 / 5) +
			32
		).toFixed(1);
	}

	renderTemperatureControl() {
		if (this.state.displayCelsius) {
			return (
				<React.Fragment>
					C | &nbsp;
					<span
						className="inactive-temp"
						onClick={() => {
							this.handleTempChange();
						}}
					>
						F
					</span>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				F |&nbsp;
				<span
					className="inactive-temp"
					onClick={() => {
						this.handleTempChange();
					}}
				>
					C
				</span>
			</React.Fragment>
		);
	}

	handleTempChange() {
		this.setState({
			displayCelsius: !this.state.displayCelsius
		});
	}

	render() {
		console.log(this.props.weatherInfo);
		return (
			<div className="layout-container">
				{this.renderBackground()}
				<p>
					{this.props.weatherInfo.city._attributes.name},{' '}
					{this.props.weatherInfo.city.country._text}
				</p>
				<p className="weather-value">
					{this.props.weatherInfo.weather._attributes.value}
				</p>
				<p className="last-updated-value">
					Updated: {this.props.weatherInfo.lastupdate._attributes.value}{' '}
					UTC
				</p>
				<div className="temperature-container">
					<p className="side-temperature" undertext="low">
						{this.renderLowTemperature()}
					</p>
					<p className="main-temperature" undertext="current">
						{this.renderCurrentTemperature()}
						<span className="temperature-control">
							&#176; {this.renderTemperatureControl()}
						</span>
					</p>
					<p className="side-temperature" undertext="high">
						{this.renderHighTemperature()}
					</p>
				</div>
				<div className="info-container">
					<div className="info-row">
						<p>Wind:</p>
						<p>
							{this.props.weatherInfo.wind.speed._attributes.value}{' '}
							miles/s{' '}
							{this.props.weatherInfo.wind.direction._attributes.code}
						</p>
					</div>
					<div className="info-row">
						<p>Humidity:</p>
						<p>{this.props.weatherInfo.humidity._attributes.value}%</p>
					</div>
					<div className="info-row">
						<p>Pressure:</p>
						<p>
							{this.props.weatherInfo.pressure._attributes.value}
							{this.props.weatherInfo.pressure._attributes.unit}
						</p>
					</div>
					<div className="info-row">
						<p>Sunrise:</p>
						<p>{this.props.weatherInfo.city.sun._attributes.rise} UTC</p>
					</div>
					<div className="info-row">
						<p>Sunset:</p>
						<p>{this.props.weatherInfo.city.sun._attributes.set} UTC</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	weatherInfo: state.getWeather.weatherInfo
});

export default connect(
	mapStateToProps,
	null
)(Layout);
