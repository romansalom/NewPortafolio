// components/ItalicsName.js
"use client"
import LanguageSwitch from '@/components/SwitchButton/LanguageSwitch';
import styles from './styles.module.css';

export default function ItalicsName() {


    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div className={styles.tangerine1}>Roman Salom</div>
            </div>
            <div className={styles.left}>
                <div className={styles.tangerine1} ><LanguageSwitch /></div>
            </div>

        </div>
    );
}
