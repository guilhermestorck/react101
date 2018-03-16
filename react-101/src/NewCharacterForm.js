import React, { Component } from 'react';
import './NewCharacterForm.css';

class NewCharacterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			image: '',
			description: ''
		}
	}
	render() {
		return (
			<form className='NewCharacterForm'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					value={this.state.name}
					onChange={(evt) => this.setState({ name: evt.target.value })}
				/>

				<label htmlFor='image'>Image</label>
				<input
					type='text'
					name='image'
					value={this.state.image}
					onChange={(evt) => this.setState({ image: evt.target.value })}
				/>

				<label htmlFor='description'>Description</label>
				<textarea
					name='name'
					value={this.state.description}
					onChange={(evt) => this.setState({ description: evt.target.value })}
				/>

				<button type='button' onClick={() => this.handleSubmit.bind(this)()}>
					Submit
				</button>
			</form>
		);
	}

	handleSubmit() {
		if(this.props.onSubmit) {
			this.props.onSubmit(this.state);
		}
	}
}

export default NewCharacterForm;