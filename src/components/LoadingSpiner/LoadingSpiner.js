import Spinner from 'react-bootstrap/Spinner';
import styles from './LoadingSpiner.module.scss';

function LoadingSpiner() {
  return (
    <div className={styles.loadingCon}>
      
      <Spinner animation="border" role="status" variant="primary" />
      <span>Loading...</span>
    </div>
    
  );
}

export default LoadingSpiner;