import React from 'react';
import styles from './DropDown_Navbar.module.scss';
import DropDownBasic from '../dropdowns_basic/DropDownBasic';
import Link from '../../button/Link';
import HorizontalBar from '../../horizontal-bar/HorizontalBar';

export const DropDown_Navbar = () => {
	const dropdown = {
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
	};
	const links = {
		left: [
			{ text: 'Comic', url: '#Comic', active: true },
			{ text: 'News', url: '#News', active: false },
		],
		right: [
			{ dropdown },
			{ text: 'About', url: '#About', active: false },
			{ text: 'Contact', url: '#Contact', active: false },
		],
	};
	return (
		// <HorizontalBar />
		<HorizontalBar links={links} title='Comic' />
	);
};
export default DropDown_Navbar;
