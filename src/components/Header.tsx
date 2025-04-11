import React from 'react';
import "../styles/header.scss";
import Logo from "../images/LOGO.svg";

export default function Header() {
  	
  	return (
		<div className="header">
			<div className="screendesktopActiveaccueil">
					<img className="logoIcon" alt="" src={Logo} />
					<div className="nav">
						<div className="home">Home</div>
						<div className="about">About</div>
					</div>
			</div>
		</div>
	)
}
