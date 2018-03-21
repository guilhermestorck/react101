import React, { Component } from 'react';
import './CharacterComponent.css';

class CharacterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFavorite: false
		};
	}

	render() {
		const { name, image, description } = this.props;
		const { isFavorite } = this.state;

		let imageComponent = null;
		if(image) {
			imageComponent = <img src={image} alt={name}/>;
		}
		
		return (
			<div className={`CharacterComponent ${isFavorite ? 'favorite' : ''}`}>
				{ imageComponent }
				<h3>
					<span>{name}</span>
					<button onClick={() => this.setState({ isFavorite: !isFavorite })}>
						{ isFavorite ? 'Unfav' : 'Fav' }
					</button>
				</h3>
				<p>{description}</p>
			</div>
		);
	}
}

export default CharacterComponent;