import React from 'react';
//import '../../styles/propertycard.scss';
import { properties } from '../../utility/data';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import { useLocation } from 'react-router-dom';
import Details from '../../components/Details';

export default function RentalPropertyCard() {
    let location = useLocation();
    let { id } = location.state || {}; // Destructure the passed state

    return (
		<div className="container">
			<div className="row">
				<Header />
			</div>
			<div className="row">
				<Carousel 
					id={id}	
				/>
			</div>
			<div className="row">
				<Details
					id={id} 
				/>
			</div>
			<div className="row">
				<Footer />
			</div>
		</div>
    );
}