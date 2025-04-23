import React from 'react';
import Logo from "../images/LOGO.svg";

export default function Header() {
  	
  	return (
		<div className="header">
			<div>
					<img className="logoIcon" alt="" src={Logo} />
					<div className="nav">
						<a href="/" className="home">Home</a>
						<a href="/about" className="about">About</a>
					</div>
			</div>
		</div>
	)
}
