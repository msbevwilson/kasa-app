import React from 'react';
import '../../styles/home.scss';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
 
export default function Home() {
  return (
    <div className='dHome'>
      <Header />
      <div className='body'>
          <Banner />
          <Gallery />
      </div>
          <Footer />
    </div>
  )
}
