import { FunctionComponent, useCallback } from 'react';
import styles from './MAbout.module.css';


const MAbout:FunctionComponent = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.mAbout}>
      			<div className={styles.header}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home} onClick={onHomeTextClick}>Home</div>
          					<div className={styles.about}>About</div>
        				</div>
      			</div>
      			<div className={styles.body}>
        				<img className={styles.section1Icon} alt="" src="_Section 1.png" />
        				<div className={styles.valeurs}>
          					<div className={styles.dropdownOpen}>
            						<div className={styles.airConditioningWiFiKitchenWrapper}>
              							<div className={styles.airConditioningWiFi}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
            						</div>
            						<div className={styles.topBar}>
              							<b className={styles.amenities}>Reliability</b>
              							<img className={styles.arrowBackIos24px2Icon} alt="" src="arrow_back_ios-24px 2.png" />
            						</div>
          					</div>
          					<div className={styles.dropdownOpen}>
            						<div className={styles.airConditioningWiFiKitchenWrapper}>
              							<div className={styles.airConditioningWiFi1}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
            						</div>
            						<div className={styles.topBar}>
              							<b className={styles.amenities}>Respect</b>
              							<img className={styles.arrowBackIos24px2Icon} alt="" src="arrow_back_ios-24px 2.png" />
            						</div>
          					</div>
          					<div className={styles.dropdownOpen}>
            						<div className={styles.airConditioningWiFiKitchenWrapper}>
              							<div className={styles.airConditioningWiFi1}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
            						</div>
            						<div className={styles.topBar}>
              							<b className={styles.amenities}>Service</b>
              							<img className={styles.arrowBackIos24px2Icon} alt="" src="arrow_back_ios-24px 2.png" />
            						</div>
          					</div>
          					<div className={styles.dropdownOpen}>
            						<div className={styles.airConditioningWiFiKitchenWrapper}>
              							<div className={styles.airConditioningWiFi1}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
            						</div>
            						<div className={styles.topBar}>
              							<b className={styles.amenities}>Security</b>
              							<img className={styles.arrowBackIos24px2Icon} alt="" src="arrow_back_ios-24px 2.png" />
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.dFooter}>
        				<img className={styles.logoIcon1} alt="" src=".LOGO.svg" />
        				<div className={styles.kasaAllRights}>© 2020 Kasa. All rights reserved</div>
      			</div>
    		</div>);
};

export default MAbout;
