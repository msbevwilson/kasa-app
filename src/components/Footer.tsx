import React from 'react';
import "../styles/footer.scss";
import WhiteLogo from "../images/WhiteLOGO.svg";

export default function Footer() {
	return (
		<div className="dFooter">
			  <div className="sizedesktop">
					<img className="whiteLogoIcon" alt="" src={WhiteLogo} />
					<div className="kasaAllRights">© 2020 Kasa. All rights reserved</div>
			  </div>
		</div>
	)
}
