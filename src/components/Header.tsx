import { FunctionComponent, useCallback } from 'react';
import styles from './HeaderSet.module.css';


const HeaderSet:FunctionComponent = () => {
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.header}>
      			<div className={styles.screendesktopActiveaccueil}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home}>Home</div>
          					<div className={styles.about} onClick={onAboutTextClick}>About</div>
        				</div>
      			</div>
      			<div className={styles.screendesktopActiveaccueil}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home1} onClick={onAboutTextClick}>Home</div>
          					<div className={styles.about1}>About</div>
        				</div>
      			</div>
      			<div className={styles.screendesktopActiveaccueil}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home1} onClick={onAboutTextClick}>Home</div>
          					<div className={styles.about} onClick={onAboutTextClick}>About</div>
        				</div>
      			</div>
      			<div className={styles.screenmobileActiveaccueil}>
        				<img className={styles.logoIcon3} alt="" src=".LOGO.svg" />
        				<div className={styles.nav3}>
          					<div className={styles.home3}>Home</div>
          					<div className={styles.about3} onClick={onAboutTextClick}>About
</div>
        				</div>
      			</div>
      			<div className={styles.screenmobileActiveaccueil}>
        				<img className={styles.logoIcon3} alt="" src=".LOGO.svg" />
        				<div className={styles.nav3}>
          					<div className={styles.about3} onClick={onAboutTextClick}>Home</div>
          					<div className={styles.home3}>About</div>
        				</div>
      			</div>
      			<div className={styles.screenmobileActiveaccueil}>
        				<img className={styles.logoIcon3} alt="" src=".LOGO.svg" />
        				<div className={styles.nav3}>
          					<div className={styles.about3} onClick={onAboutTextClick}>Home</div>
          					<div className={styles.about3} onClick={onAboutTextClick}>About</div>
        				</div>
      			</div>
    		</div>);
};

export default HeaderSet;
