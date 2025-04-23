import React from 'react';
//import '../../styles/home.scss';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
 
export default function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
          <Header />
      </div>
      <div className="row">
          <Banner />
      </div>
      <div className="row">
          <Gallery />
      </div>
      <div className="row">
          <Footer />
      </div>
    </div>
    </>
  )
}
