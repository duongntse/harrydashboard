import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { favoritecolor: 'red' };
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoritecolor: 'yellow' });
		}, 1000);
	}
	render() {
		const { favoritecolor } = this.state;
		return <h1>My Favorite Color is {favoritecolor}</h1>;
	}
}

export default Header;
