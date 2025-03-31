import { FunctionComponent } from 'react';
import styles from './DropdownOpen.module.css';


const DropdownOpen:FunctionComponent = () => {
  	return (
    		<div className={styles.dropdownOpen}>
      			<div className={styles.airConditioningWiFiKitchenWrapper}>
        				<div className={styles.airConditioningWiFi}>{`Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). `}</div>
      			</div>
      			<div className={styles.topBar}>
        				<b className={styles.amenities}>Description</b>
        				<img className={styles.arrowBackIos24px2Icon} alt="" src="arrow_back_ios-24px 2.png" />
      			</div>
    		</div>);
};

export default DropdownOpen;
