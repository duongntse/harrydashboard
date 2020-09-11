import React from 'react';
import styles from './ResponsiveBar.module.scss';

export const ResponsiveBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<ul>
					<li>
						<a href='#Home'>Home</a>
					</li>
					<li>
						<a href='News'>News</a>
					</li>
					<li>
						<a href='Contact'>Contact</a>
					</li>
					<li>
						<a href='About'>About</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ResponsiveBar;
