import React from 'react';
import '../../styles/propertycard.scss';
import { properties } from '../../utility/data';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import { useLocation } from 'react-router-dom';

export default function RentalPropertyCard() {
    let location = useLocation();
    let { id } = location.state || {}; // Destructure the passed state

    return (
		<>
			<Header />
			<Carousel 
				id={id}	
			/>
			<Footer />
		</>
    );
}