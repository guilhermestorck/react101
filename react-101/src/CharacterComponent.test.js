import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import CharacterComponent from './CharacterComponent'

Enzyme.configure({ adapter: new Adapter() });

describe('<CharacterComponent />', () => {
	it('should render a character', () => {
        const wrapper = shallow(<CharacterComponent name='name' description='desc' image='img' />);
        
        expect(wrapper.find('span')).to.have.length(1);
        expect(wrapper.find('span').text()).to.equal('name');

		expect(wrapper.find('img')).to.have.length(1);
		expect(wrapper.find('img').prop('src')).to.equal('img');
        expect(wrapper.find('img').prop('alt')).to.equal('name');

        expect(wrapper.find('button')).to.have.length(1);
        
        expect(wrapper.find('p')).to.have.length(1);
        expect(wrapper.find('p').text()).to.equal('desc');
    });
    
    it('should not render image if the prop is not passed', () => {
        const wrapper = shallow(<CharacterComponent name='name' description='desc' />);
        wrapper.setState({ isFavorite: true });

		expect(wrapper.find('img')).to.have.length(0);
        
        expect(wrapper.find('p')).to.have.length(1);
        expect(wrapper.find('p').text()).to.equal('desc');
    });

    it('should render the right button name depending on the state', () => {
        const wrapper = shallow(<CharacterComponent name='name' description='desc' />);

        wrapper.setState({ isFavorite: true });
        expect(wrapper.find('button').text()).to.equal('Unfav');
        
        wrapper.setState({ isFavorite: false });
		expect(wrapper.find('button').text()).to.equal('Fav');
    })
    
    it('should toggle the favorite state if the button is clicked', () => {
        const wrapper = shallow(<CharacterComponent name='name' description='desc' />);
        wrapper.setState({ isFavorite: true });

        wrapper.find('button').simulate('click'); //toggles to false
        expect(wrapper.state('isFavorite')).to.equal(false);

        wrapper.find('button').simulate('click'); //toggles to true
        expect(wrapper.state('isFavorite')).to.equal(true);
    });
});