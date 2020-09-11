import React from 'react';
import styles from './App.module.scss';
import HorizontalBar from './components/horizontal-bar/HorizontalBar';
import VerticalBar from './components/vertical-bar/VerticalBar';
import ResponsiveBar from './components/vertical-responsive-bar/ResponsiveBar';
import DropDownBasic from './components/dropdowns/dropdowns_basic/DropDownBasic';
import DropDownNavbar from './components/dropdowns/dropdowns_navbar/DropDown_Navbar';
import Content from './components/content/Content';

function App() {
	return (
		<div className='App'>
			{/* <HorizontalBar /> */}
			{/* <VerticalBar /> */}
			{/* <ResponsiveBar /> */}
			{/* <DropDownBasic /> */}
			<DropDownNavbar />
			<div className={styles.app_content}>
				<Content />
			</div>
		</div>
	);
}

export default App;
