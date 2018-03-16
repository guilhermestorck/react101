import React, { Component } from 'react';

export class PoorlyControlledInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initialValue || ''
		};
	}
	render() {
		return <input type='text' value={this.state.value} />;
	}
}

export class UncontrolledInput extends Component {
	render() {
		return <input type='text' defaultValue={this.props.initialValue}/>;
	}
}

export class ControlledInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initialValue || ''
		};
	}
	render() {
		return (
			<input
				type='text'
				value={this.state.value} 
				onChange={ (evt) => {
					console.log(`Updating Controlled Input with ${evt.target.value}`);
					this.setState({value: evt.target.value});
				} }
			/>
		);
	}
}