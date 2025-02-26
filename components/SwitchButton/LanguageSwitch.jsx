import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import styles from "./styles.module.css";

export default function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage();
    const [blur, setBlur] = useState(false);

    const handleToggle = () => {
        setBlur(true); // Activa el blur
        setTimeout(() => {
            toggleLanguage(); // Cambia el idioma
            setBlur(false); // Desactiva el blur
        }, 500); // Duración del efecto
    };

    return (
        <>
            {/* Fondo borroso cuando cambia el idioma */}
            {blur && <div className={styles.overlay}></div>}

            {/* Botón de cambio de idioma */}
            <div className={styles.switch_btn} onClick={handleToggle}>
                <span className={styles.slider}>
                    {language === "En" ? "En" : "Es"}
                </span>
            </div>
        </>
    );
}
