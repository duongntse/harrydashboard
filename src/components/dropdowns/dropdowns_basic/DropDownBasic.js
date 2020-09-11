import React from 'react';
import PropTypes from 'prop-types';
import styles from './DropDownBasic.module.scss';

export const DropDownBasic = (props) => {
	// let { text, links } = dropdown;
	// links=[{text: '', url: ''}]
	/* <DropdownLink text={dropdown.text} links={dropdown.links} />; */

	const { text, links, className } = props;
	const li_links = links.map((link, ind) => (
		<a key={ind} href={link.url} className={styles.a}>
			<div className={styles.div}>{link.text}</div>
		</a>
	));

	return (
		<div className={`${styles.container} ${className}`}>
			<div className={styles.dropdown}>
				<div className={styles.title}>
					{text}
					<i
						className={`fa fa-angle-down ${styles.fa_angle_down}`}
						aria-hidden='true'></i>
				</div>
				<div className={styles.drop}>{li_links}</div>
			</div>
		</div>
	);
};

DropDownBasic.propTypes = {
	text: PropTypes.string,
	links: PropTypes.arrayOf(PropTypes.object),
};

DropDownBasic.defaultProps = {
	text: 'Dropdown',
	links: [
		{ url: '#Link1', text: 'Link To a' },
		{ url: '#Link2', text: 'Link To b' },
		{ url: '#Link3', text: 'Link To c' },
	],
};

export default DropDownBasic;
