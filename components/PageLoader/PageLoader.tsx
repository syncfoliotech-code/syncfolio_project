import Image from 'next/image';
import styles from './PageLoader.module.css';

const PageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.logoWrapper}>
        <Image src="/sync2.png" alt="Loading Logo" width={200} height={50} priority />
      </div>
    </div>
  );
};

export default PageLoader;