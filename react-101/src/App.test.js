import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import CharactersList from './CharactersList';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
	it('should render a CharactersList', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(CharactersList)).to.have.length(1);
	});
});