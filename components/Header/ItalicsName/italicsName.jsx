// components/ItalicsName.js
import styles from './styles.module.css';

export default function ItalicsName() {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <p className={styles.tangerine1}>Roman Salom</p>
            </div>
            <div className={styles.left}>
                <p className={styles.tangerine1} >Switch</p>
            </div>

        </div>
    );
}
