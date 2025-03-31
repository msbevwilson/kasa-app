import React from 'react';
import '../../styles/404.scss'
 
export default function D404() {
  	return (
<>
<div className="d404">
<div className="header">
<img className="logoIcon" alt="" src=".LOGO.svg" />
<div className="nav">
<div className="home" onClick={onHomeTextClick}>Home</div>
<div className="about" onClick={onHomeTextClick}>About</div>
</div>
</div>
<div className="div">
<b className="b">404</b>
</div>
<div className="oopsThePage">Oops! The page you’re looking for doesn’t exist.</div>
<div className="returnToHome">Return to home page</div>
<div className="dFooter">
<img className="logoIcon1" alt="" src=".LOGO.svg" />
<div className="kasaAllRights">© 2020 Kasa. All rights reserved</div>
</div>
</div>
</>
	)
}