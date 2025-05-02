import React from 'react';
import '../../styles/propertycard.scss';
import StarActive from  '../../images/StarActive.svg';
import StarInactive from  '../../images/StarInactive.svg';
import { properties } from '../../utility/data';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import { useLocation } from 'react-router-dom';
import Details from '../../components/Details';

export default function RentalPropertyCard() {
    let location = useLocation();
    let { id } = location.state || {}; // Destructure the passed state

	let property = properties.find((property) => property.id === id);
	
		// If no property is found, return a fallback
		if (!property) {
			return <p>Property not found</p>;
		}
	
		let propertyLocation = property.location;
		let title = property.title;
		let hostName = property.host.name;
		let hostPicture = property.host.picture;
		let rating = Math.floor(Number(property.rating));
		let tags = property.tags;


    return (
		<div className='property'>
			<div>
				<Header />
			</div>
			<div className='property-card-body'>
					<Carousel 
						id={id}	
					/>
					<div className='properties1'>
						<div className='property-card-title'>
							<div className='title'>{title}</div>
							<div className='subtitle'>{propertyLocation}</div>
						</div>
						<div>
							<div className='property-card-host'>
								<div className='host'>{hostName}</div>
									<img className='hostImage' src={hostPicture} />
							</div>
							<div className='rating'>
								{Array.from({ length: 5 }, (_, index) => (
									<span key={index} className="star">
										{index < rating ? <img className='starIcon' src={StarActive} alt="Star" /> : <img className='starIcon' src={StarInactive} alt="Star" />}
									</span>
								))}
							</div>
						</div>
					</div>
					<div className='properties2'>
						<div className='tags'>
							{tags.map((tag, index) => (
								<span className='tag' key={index}>
									{tag}
								</span>
							))}
						</div>
					</div>
					<Details
						id={id} 
					/>
			</div>
			<div>
				<Footer />
			</div>
		</div>
    );
}