import React, { Component } from 'react';
import './NewCharacterForm.css';

class NewCharacterForm extends Component {
	render() {
		return (
			<form className='NewCharacterForm' onSubmit={(evt) => this.handleSubmit.bind(this)(evt)}>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name'/>

				<label htmlFor='image'>Image</label>
				<input type='text' name='image'/>

				<label htmlFor='description'>Description</label>
				<textarea name='description'/>

				<button type='submit'>
					Submit
				</button>
			</form>
		);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		var data = {};
		for(var i=0; i < evt.target.length; ++i) {
			if(evt.target[i].type !== 'submit' && evt.target[i].type !== 'button') {
				data[evt.target[i].name] = evt.target[i].value;
			}
		}
		if(this.props.onSubmit) {
			this.props.onSubmit(data);
		}
	}
}

export default NewCharacterForm;