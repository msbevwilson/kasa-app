import { useState, useEffect } from 'react';
import "../styles/footer.scss";
import WhiteLogo from "../images/WhiteLOGO.svg";

export default function Footer() {
	let [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		let handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize(); // Check on initial render
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="dFooter">
			  <div className={isMobile ? "sizemobile" : "sizedesktop"}>
					<img className="whiteLogoIcon" alt="" src={WhiteLogo} />
					<div className="kasaAllRights">© 2020 Kasa. All rights reserved</div>
			  </div>
		</div>
	)
}
