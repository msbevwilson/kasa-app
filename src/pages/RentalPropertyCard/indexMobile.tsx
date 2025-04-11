import { FunctionComponent, useCallback } from 'react';
import styles from './MRentalPropertyCard.module.css';


const MRentalPropertyCard:FunctionComponent = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.mRentalPropertyCard}>
      			<div className={styles.header}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home} onClick={onHomeTextClick}>Home</div>
          					<div className={styles.home} onClick={onHomeTextClick}>About</div>
        				</div>
      			</div>
      			<div className={styles.body}>
        				<div className={styles.details}>
          					<div className={styles.dropdownOpen}>
            						<div className={styles.airConditioningWiFiKitchenWrapper}>
              							<div className={styles.airConditioningWiFi}>{`Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). `}</div>
            						</div>
            						<div className={styles.topBar}>
              							<b className={styles.amenities}>Description</b>
              							<img className={styles.arrowBackIos24px2Icon} alt="" src="arrow_back_ios-24px 2.png" />
            						</div>
          					</div>
          					<div className={styles.dropdownOpen}>
            						<div className={styles.airConditioningWiFiKitchenWrapper}>
              							<div className={styles.airConditioningWiFiContainer}>
                								<p className={styles.airConditioning}>Air conditioning</p>
                								<p className={styles.airConditioning}>Wi-Fi</p>
                								<p className={styles.airConditioning}>Kitchen</p>
                								<p className={styles.airConditioning}>Working area</p>
                								<p className={styles.airConditioning}>Iron</p>
                								<p className={styles.airConditioning}>Coat rack</p>
              							</div>
            						</div>
            						<div className={styles.topBar}>
              							<b className={styles.amenities}>Amenities</b>
              							<img className={styles.arrowBackIos24px2Icon} alt="" src="arrow_back_ios-24px 2.png" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.title}>
          					<div className={styles.parisCenterOnContainer}>
            						<span className={styles.parisCenterOnContainer1}>
              							<p className={styles.airConditioning}>{`Paris center, on the romantic `}</p>
              							<p className={styles.airConditioning}>Canal Saint-Martin</p>
            						</span>
          					</div>
          					<div className={styles.parisLeDeFrance}>Paris, Île-de-France</div>
        				</div>
        				<div className={styles.tag}>
          					<div className={styles.tagChild} />
          					<b className={styles.cozy}>Cozy</b>
        				</div>
        				<div className={styles.tag1}>
          					<div className={styles.tagChild} />
          					<b className={styles.canal}>Canal</b>
        				</div>
        				<div className={styles.tag2}>
          					<div className={styles.tagChild} />
          					<b className={styles.paris10}>Paris 10</b>
        				</div>
        				<img className={styles.carrouselMIcon} alt="" src="Carrousel-m.svg" />
        				<div className={styles.hostParent}>
          					<div className={styles.host} />
          					<div className={styles.alexandreDumas}>
            						<span className={styles.alexandreDumasTxtContainer}>
              							<p className={styles.airConditioning}>Alexandre</p>
              							<p className={styles.airConditioning}>Dumas</p>
            						</span>
          					</div>
        				</div>
        				<img className={styles.rateIcon} alt="" src="_Rate.svg" />
      			</div>
      			<div className={styles.dFooter}>
        				<img className={styles.logoIcon1} alt="" src=".LOGO.svg" />
        				<div className={styles.kasaAllRights}>© 2020 Kasa. All rights reserved</div>
      			</div>
    		</div>);
};

export default MRentalPropertyCard;
