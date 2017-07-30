import React from 'react';
import '../styles/header.css'

//Header part component that displays brand name

function handleOpen() {
	document.querySelector(".side-nav").style.width="200px";
}
export default (props) => {
	return(
			<nav ref={props.navRef} className='navbar navbar-default navbar-fixed-top header-bar'>
						<h1  ref={props.headerBrandRef} className='header-brand'><span>Daily News</span>
						<span>
							<button type="button" className="navbar-toggle" onClick={handleOpen} >
      	  						<div className="icon-bar"></div>
        						<div className="icon-bar"></div>
        						<div className="icon-bar"></div>                        
      						</button>
						</span>
						</h1>
			</nav>
		)
}