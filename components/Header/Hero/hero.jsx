
"use client"
import { useLanguage } from '@/context/LanguageContext';
import styles from './styles.module.css';


export default function Hero() {
    const { language } = useLanguage();

    const texts = {
        En: { title: ` " Empowering Your Business  Through Expert Consultancy "`, },
        Es: { title: `"Potenciando tu negocio a través de consultoría experta."`, }
    };
    return (
        <div>
            <div className={styles.container}>

                <h2>{texts[language].title}</h2>

            </div>
            <div className={styles.paragraph} >
                Full Stack Developer
            </div>

        </div >

    );
}
