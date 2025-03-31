import { FunctionComponent, useCallback } from 'react';
import styles from './Thumb.module.css';


const Thumb:FunctionComponent = () => {
  	
  	const onThumbContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.thumb} onClick={onThumbContainerClick}>
      			<div className={styles.img} />
      			<div className={styles.thumbChild} />
      			<b className={styles.titleOfThe}>Title of the rental property</b>
    		</div>);
};

export default Thumb;
