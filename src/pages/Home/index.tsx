import React from 'react';
//import '../../styles/home.scss';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import { Container, Row, Col, Image } from 'react-bootstrap';
 
export default function Home() {
  return (
    <>
    <Container fluid>
      <Row>
          <Header />
      </Row>
      <Row>
          <Banner />
      </Row>
      <Row>
          <Gallery />
      </Row>
      <Row>
          <Footer />
      </Row>
    </Container>
    </>
  )
}
