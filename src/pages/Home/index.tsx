import { FunctionComponent, useCallback } from 'react';
import styles from './DHome.module.css';


const DHome:FunctionComponent = () => {
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.dHome}>
      			<div className={styles.header}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home}>Home</div>
          					<div className={styles.about} onClick={onAboutTextClick}>About</div>
        				</div>
      			</div>
      			<div className={styles.body}>
        				<div className={styles.gallery}>
          					<div className={styles.background} />
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
          					<div className={styles.thumb3} onClick={onAboutTextClick}>
            						<div className={styles.img} />
            						<div className={styles.thumbChild} />
            						<b className={styles.titleOfThe}>Title of the rental property</b>
          					</div>
          					<div className={styles.thumb4} onClick={onAboutTextClick}>
            						<div className={styles.img} />
            						<div className={styles.thumbChild} />
            						<b className={styles.titleOfThe}>Title of the rental property</b>
          					</div>
          					<div className={styles.thumb5} onClick={onAboutTextClick}>
            						<div className={styles.img} />
            						<div className={styles.thumbChild} />
            						<b className={styles.titleOfThe}>Title of the rental property</b>
          					</div>
        				</div>
        				<div className={styles.section1}>
          					<img className={styles.maskGroupIcon} alt="" src="Mask Group.png" />
          					<b className={styles.atHomeEverywhere}>At home, everywhere, and anywhere</b>
        				</div>
      			</div>
      			<div className={styles.dFooter}>
        				<img className={styles.logoIcon1} alt="" src=".LOGO.svg" />
        				<div className={styles.kasaAllRights}>© 2020 Kasa. All rights reserved</div>
      			</div>
    		</div>);
};

export default DHome;
