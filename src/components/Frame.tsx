import { FunctionComponent } from 'react';
import styles from './Frame.module.css';


const Frame:FunctionComponent = () => {
  	return (
    		<div className={styles.carrouselParent}>
      			<div className={styles.carrousel}>
        				<img className={styles.section1Icon} alt="" src="_Section 1.png" />
        				<img className={styles.backgroundIcon} alt="" src="Background.png" />
        				<div className={styles.div}>1/4</div>
        				<img className={styles.arrowBackIos24px1Icon} alt="" src="arrow_back_ios-24px 1.svg" />
        				<img className={styles.arrowForwardIos24px1Icon} alt="" src="arrow_forward_ios-24px 1.svg" />
      			</div>
      			<img className={styles.carrouselMIcon} alt="" src="Carrousel-m.svg" />
    		</div>);
};

export default Frame;
