import React from 'react';
import '../../styles/home.scss';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
 
export default function Home() {
  return (
    <div className='dHome'>
      <div>
          <Header />
      </div>
      <div className='body'>
          <Banner />
          <Gallery />
      </div>
      <div>
          <Footer />
      </div>
    </div>
  )
}
