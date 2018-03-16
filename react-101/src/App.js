import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterComponent from './CharacterComponent';
import ClockTicker from './ClockTicker';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					<ClockTicker />
					<CharacterComponent
						name='Saitama'
						description='Also known as Caped Baldy, he is a class C hero. Not impressive.'
						image='https://myanimelist.cdn-dena.com/r/23x32/images/characters/11/294388.jpg?s=5cedf0bf18f09a7244365a605d829860'
					/>
					<CharacterComponent
						name='Saitama'
						description='Also known as Caped Baldy, he is a class C hero. Not impressive.'
						image='https://myanimelist.cdn-dena.com/r/23x32/images/characters/11/294388.jpg?s=5cedf0bf18f09a7244365a605d829860'
					/>
					<CharacterComponent
						name='Saitama'
						description='Also known as Caped Baldy, he is a class C hero. Not impressive.'
					/>
					<CharacterComponent
						name='Saitama'
						description='Also known as Caped Baldy, he is a class C hero. Not impressive.'
						image='https://myanimelist.cdn-dena.com/r/23x32/images/characters/11/294388.jpg?s=5cedf0bf18f09a7244365a605d829860'
					/>
				</p>
			</div>
		);
	}
}

export default App;
