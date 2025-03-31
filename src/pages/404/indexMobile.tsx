import { FunctionComponent, useCallback } from 'react';
import styles from './M.module.css';


const M:FunctionComponent = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.m404}>
      			<div className={styles.header}>
        				<img className={styles.logoIcon} alt="" src=".LOGO.svg" />
        				<div className={styles.nav}>
          					<div className={styles.home} onClick={onHomeTextClick}>Home</div>
          					<div className={styles.home} onClick={onHomeTextClick}>About</div>
        				</div>
      			</div>
      			<div className={styles.div}>
        				<b className={styles.b}>404</b>
      			</div>
      			<div className={styles.oopsThePage}>Oops! The page you’re looking for doesn’t exist.</div>
      			<div className={styles.returnToHome}>Return to home page</div>
      			<div className={styles.dFooter}>
        				<img className={styles.logoIcon1} alt="" src=".LOGO.svg" />
        				<div className={styles.kasaAllRights}>© 2020 Kasa. All rights reserved</div>
      			</div>
    		</div>);
};

export default M;
