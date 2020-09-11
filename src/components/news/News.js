import React from 'react';
import PropTypes from 'prop-types';
import styles from './News.module.scss';

export class News extends React.Component {
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
		return <h1>News {favoritecolor}</h1>;
	}
}

export default News;
