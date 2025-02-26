import { useLanguage } from "../../context/LanguageContext.jsx";
import styles from "./styles.module.css"

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className={styles.switch_btn} onClick={toggleLanguage}>
            <span className={styles.slider}>{language === "En" ? "En" : "Es"}</span>

        </div>
    );
}
