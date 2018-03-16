import React, { Component } from 'react';
import CharacterComponent from './CharacterComponent';
import NewCharacterForm from './NewCharacterForm';
import './CharactersList.css';

class CharactersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characters: [
				{
					name: 'Saitama',
					description: 'Also known as Caped Baldy, he is a class C hero. Not impressive.',
					image: 'https://myanimelist.cdn-dena.com/r/23x32/images/characters/11/294388.jpg?s=5cedf0bf18f09a7244365a605d829860'
				},
				{
					name: 'Edward Elric',
					description: 'Chibi brat',
					image: null
				}
			]
		}
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