import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.scss';

export class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = { favoriteColor: 'red' };
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: 'yellow' });
		}, 1000);
	}
	render() {
		const { favoriteColor } = this.state;
		
		
		return <h1>About {favoriteColor}</h1>;
	}
}

export default About;
