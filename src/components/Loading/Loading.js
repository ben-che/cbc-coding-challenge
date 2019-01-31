import React, { Component } from 'react';
import './Loading.css';

export default function Loading() {
	return (
		<div className="loading-container">
			<div class="lds-spinner">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
			<p>Retrieving weather information...</p>
			<p>
				If you haven't, please allow the app to access your location -
				otherwise I can't tell the weather!
			</p>
		</div>
	);
}
