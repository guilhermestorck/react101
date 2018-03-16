import React, { Component } from 'react';

class ClockTicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elapsedSeconds: 0
		};
		setInterval(() => {
			this.setState({ elapsedSeconds: this.state.elapsedSeconds + 1 });
		}, 1000);
	}

	render() {
		return (
			<h1>You've been staring at this page for {this.state.elapsedSeconds} seconds and counting</h1>
		);
	}
}

export default ClockTicker;