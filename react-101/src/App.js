import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PoorlyControlledInput, UncontrolledInput, ControlledInput } from './Inputs';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div className="App-intro">
					<h4> PoorlyControlledInput </h4>
					<PoorlyControlledInput initialValue='Bla'/>

					<h4> UncontrolledInput </h4>
					<UncontrolledInput initialValue='Bla'/>

					<h4> ControlledInput </h4>
					<ControlledInput initialValue='Bla'/>
				</div>
			</div>
		);
	}
}

export default App;
