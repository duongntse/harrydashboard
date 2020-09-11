import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HorizontalBar.module.scss';
import DropDownBasic from '../dropdowns/dropdowns_basic/DropDownBasic';

class HorizontalBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			left: [],
			right: [],
		};
	}

	buildLinks = (links) => {
		return links.map((link, ind) => {
			let { text, url, active, dropdown } = link;
			if (!dropdown) {
				return (
					<a key={ind} href={url} className={`${styles.a} `}>
						<div
							className={`${styles.div} ${
								active ? styles.active : ''
							}`}>
							{text}
						</div>
					</a>
				);
			} else {
				return (
					<DropDownBasic
						key={ind}
						{...dropdown}
						className={styles.dropdownbasic}
					/>
				);
			}
		});
	};

	componentDidMount() {
		const { children, title, links } = this.props;
		const { left, right } = links;
		// Update the document title using the browser API
		if (left && left.length > 0) {
			this.setState({ left: this.buildLinks(left) });
		}
		if (right && right.length > 0) {
			this.setState({ right: this.buildLinks(right) });
		}
		if (title && title.length > 0) {
			this.setState({ title });
		}
	}
	render() {
		const { left, right, title } = this.state;
		var horizonBar = (
			<div className={styles.horizonBar}>
				<div className={styles.main_navbar}>
					<div className={styles.left_navbar}>{left}</div>
					<div className={styles.right_navbar}>{right}</div>
				</div>
				<a href='#Home' className={`${styles.a_titlelink} ${styles.a}`}>
					<div className={`${styles.div}`}>{title}</div>
				</a>
			</div>
		);
		return horizonBar;
	}
}

HorizontalBar.defaultProps = {
	// props
	links: {
		left: [
			{ text: 'Comic', url: '#Comic', active: true },
			{ text: 'News', url: '#News', active: false },
		],
		right: [
			{ text: 'About', url: '#About', active: false },
			{ text: 'Contact', url: '#Contact', active: false },
			{
				dropdown: {
					text: 'Lastest',
					links: [
						{
							text: 'Manga',
							url: '#Link_1',
						},
						{
							text: 'Manhwa',
							url: '#Link_2',
						},
						{
							text: 'kakalot',
							url: '#Link_3',
						},
					],
				},
			},
		],
	},
	title: 'Comic',
};
HorizontalBar.propTypes = {
	links: PropTypes.object,
	title: PropTypes.string,
};
export default HorizontalBar;

/* How to use:
 */
