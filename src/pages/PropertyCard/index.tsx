import { FunctionComponent, useCallback } from 'react';
import styles from './DRentalPropertyCard.module.css';

const DRentalPropertyCard:FunctionComponent = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.dRentalPropertyCard}>
      			<div className={styles.header}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home} onClick={onHomeTextClick}>Home</div>
          					<div className={styles.about} onClick={onHomeTextClick}>About</div>
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
        				<div className={styles.tags}>
          					<div className={styles.tag}>
            						<div className={styles.tagChild} />
            						<b className={styles.canal}>Canal</b>
          					</div>
          					<div className={styles.tag1}>
            						<div className={styles.tagChild} />
            						<b className={styles.paris10}>Paris 10</b>
          					</div>
          					<div className={styles.tag2}>
            						<div className={styles.tagChild} />
            						<b className={styles.cozy}>Cozy</b>
          					</div>
        				</div>
        				<img className={styles.rateIcon} alt="" src="_Rate.svg" />
        				<div className={styles.host}>
          					<div className={styles.host1} />
          					<div className={styles.alexandreDumas}>
            						<p className={styles.airConditioning}>Alexandre</p>
            						<p className={styles.airConditioning}>Dumas</p>
          					</div>
        				</div>
        				<div className={styles.title}>
          					<div className={styles.cozyLoftOn}>Cozy loft on the Canal Saint-Martin</div>
          					<div className={styles.parisLeDeFrance}>Paris, Île-de-France</div>
        				</div>
        				<div className={styles.carrousel}>
          					<img className={styles.section1Icon} alt="" src="_Section 1.png" />
          					<img className={styles.backgroundIcon} alt="" src="Background.png" />
          					<div className={styles.div}>1/4</div>
          					<img className={styles.arrowBackIos24px1Icon} alt="" src="arrow_back_ios-24px 1.svg" />
          					<img className={styles.arrowForwardIos24px1Icon} alt="" src="arrow_forward_ios-24px 1.svg" />
        				</div>
      			</div>
      			<div className={styles.dFooter}>
        				<img className={styles.logoIcon1} alt="" src=".LOGO.svg" />
        				<div className={styles.kasaAllRights}>© 2020 Kasa. All rights reserved</div>
      			</div>
    		</div>);
};

export default DRentalPropertyCard;
