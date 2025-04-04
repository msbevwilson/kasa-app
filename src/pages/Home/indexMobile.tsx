import { FunctionComponent, useCallback } from 'react';
import styles from './MHome.module.css';


const MHome:FunctionComponent = () => {
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.mHome}>
      			<div className={styles.header}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home}>Home</div>
          					<div className={styles.about} onClick={onAboutTextClick}>About
</div>
        				</div>
      			</div>
      			<div className={styles.body}>
        				<div className={styles.section1}>
          					<img className={styles.maskGroupIcon} alt="" src="Mask Group.png" />
          					<b className={styles.atHomeEverywhereContainer}>
            						<p className={styles.atHomeEverywhere}>At home, everywhere,</p>
            						<p className={styles.atHomeEverywhere}>and anywhere</p>
          					</b>
        				</div>
        				<div className={styles.section2}>
          					<div className={styles.thumb} onClick={onAboutTextClick}>
            						<div className={styles.img} />
            						<div className={styles.thumbChild} />
            						<b className={styles.titleOfThe}>Title of the rental property</b>
          					</div>
          					<div className={styles.thumb1} onClick={onAboutTextClick}>
            						<div className={styles.img} />
            						<div className={styles.thumbChild} />
            						<b className={styles.titleOfThe}>Title of the rental property</b>
          					</div>
          					<div className={styles.thumb2} onClick={onAboutTextClick}>
            						<div className={styles.img} />
            						<div className={styles.thumbChild} />
            						<b className={styles.titleOfThe}>Title of the rental property</b>
          					</div>
        				</div>
      			</div>
      			<div className={styles.dFooter}>
        				<img className={styles.logoIcon1} alt="" src=".LOGO.svg" />
        				<div className={styles.kasaAllRights}>© 2020 Kasa. All rights reserved</div>
      			</div>
    		</div>);
};

export default MHome;
