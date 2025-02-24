
import styles from './styles.module.css';

export default function Logos() {
    return (
        <div className={styles.container}>
            <img src="logo1.png" alt="Logo 1" className={styles.logo1} />
            <img src="logo2.png" alt="Logo 2" className={styles.logo2} />
            <img src="logo3.png" alt="Logo 3" className={styles.logo3} />
            <img src="logo4.png" alt="Logo 4" className={styles.logo4} />
            <img src="logo5.png" alt="Logo 5" className={styles.logo5} />
            <img src="logo6.png" alt="Logo 6" className={styles.logo6} />
        </div>
    );
}
