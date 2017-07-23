import React from 'react';
import '../styles/header.css'

//Header part component that displays brand name
export default () => {
	return(
			<nav className='navbar navbar-default navbar-fixed-top header-bar'>
						<h1 className='header-brand'>Daily News</h1>
			</nav>
		)
}