import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Layout.css';

class Layout extends Component {
	state = {
		displayCelsius: true
	};

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
				this.props.weatherInfo.temperature._attributes.value - 273.15
			).toFixed(1);
		}

		return (
			(this.props.weatherInfo.temperature._attributes.value - 273.15) *
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
				<p>
					Weather in {this.props.weatherInfo.city._attributes.name},{' '}
					{this.props.weatherInfo.city.country._text}
				</p>
				<div className="temperature-container">
					<p className="main-temperature">
						{this.renderCurrentTemperature()}
						<span className="temperature-control">
							&#176; {this.renderTemperatureControl()}
						</span>
					</p>
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
