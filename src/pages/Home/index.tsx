import React from 'react';
import '../../styles/home.scss'
 
export default function Home() {
  return (
<>
<div className='dHome'>
<div className="header">
<img className="logoIcon" alt="" src='../../assets/images/LOGO.svg' />
<div className='nav'>
<div className='home'>Home</div>
<div className='about'>About</div>
</div>
</div>
<div className='body'>
<div className='gallery'>
<div className='background' />
</div>
<div className='section1'>
<img className='maskGroupIcon' alt="" src='../../assets/images/maskgroupicon.svg' />
<b className='atHomeEverywhere'>At home, everywhere, and anywhere</b>
</div>
</div>
<div className='dFooter'>
<img className='logoIcon1' alt="" src='../../assets/images/LOGO.svg' />
<div className='kasaAllRights'>© 2020 Kasa. All rights reserved</div>
</div>
</div>
</>
  )
}
