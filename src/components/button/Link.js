import React from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.scss';

export const Link = (props) => {
	const { url, value, active } = props;

	return (
		<div className={styles.link}>
			<a
				href={url}
				className={`${styles.a} ${active ? styles.active : ''}`}>
				{value}
			</a>
		</div>
	);
};

Link.url = {
	url: PropTypes.string,
	value: PropTypes.string,
	active: PropTypes.bool,
};

Link.defaultProps = {
	url: '#Link',
	value: 'Link Ack',
	active: false,
};

export default Link;
