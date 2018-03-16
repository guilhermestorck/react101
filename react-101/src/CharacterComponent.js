import React, { Component } from 'react';
import './CharacterComponent.css';

class CharacterComponent extends Component {
	render() {
		const { name, image, description } = this.props;

		let imageComponent = null;
		if(image) {
			imageComponent = <img src={image} alt={name}/>;
		}
		
		return (
			<div className='CharacterComponent'>
				{ imageComponent }
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
		);
	}
}

export default CharacterComponent;