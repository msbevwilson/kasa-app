import React from 'react';
import Logo from "../images/LOGO.svg";
import "../styles/header.scss";

export default function Header() {
  	
  	return (
		<div className="header">
			<img className="header-logo" alt="" src={Logo} />
			<div className="nav">
				<a href="/" className="home-link">Home</a>
				<a href="/about" className="about-link">About</a>
			</div>
		</div>
	)
}
