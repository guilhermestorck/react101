import React, { Component } from 'react';
import CharacterComponent from './CharacterComponent';
import NewCharacterForm from './NewCharacterForm';
import axios from 'axios';
import './CharactersList.css';

class CharactersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: [],
			isLoading: false
		}
	}

	componentDidMount() {
		this.setState({isLoading: true});
		axios.get('https://api.jikan.me/search/anime/saku/1').then((response) => {
			const characters = response.data.result.map((character) => ({
				name: character.title,
				description: character.description,
				image: character.image_url
			}));
			this.setState({
				characters: characters,
				isLoading: false
			});
		});
	}

	render() {
		const { characters } = this.state;
		return (
			<div className='CharactersList'>
				<div className='form'>
					<NewCharacterForm 
						onSubmit={(values) => this.setState({characters: this.state.characters.concat([values]) })}
					/>
				</div>
				<div className='list'>
					{
						characters.map(this.renderCharacter)
					}
				</div>
			</div>
		)
	}

	renderCharacter(character) {
		return (
			<CharacterComponent
				name={character.name}
				image={character.image}
				description={character.description}
			/>
		)
	}
}

export default CharactersList;