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
			{/* <div className="screenmobileActiveaccueil">
					<img className="logoIcon3" alt="" src=".LOGO.svg" />
					<div className="nav3">
						<div className="home3">Home</div>
						<div className="about3">About</div>
					</div>
			</div> */}
		</div>
	)
}
