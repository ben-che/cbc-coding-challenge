import React, { Component } from 'react';
import './Loading.css';

export default function Loading() {
	return (
		<div className="loading-container">
			<div className="lds-spinner">
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
		</div>
	);
}
