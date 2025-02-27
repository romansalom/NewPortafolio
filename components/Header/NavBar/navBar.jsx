import styles from './styles.module.css';
import { useLanguage } from "@/context/LanguageContext";

export default function NavBar() {
  const { language } = useLanguage();
  const texts = {
    En: {
      services: "Services",
      about: "About",
      contact: "Contact",
      portfolio: "Portfolio"
    },
    Es: {
      services: "Servicios",
      about: "Acerca de",
      contact: "Contacto",
      portfolio: "Portafolio"
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.sections}>
        <li><a>{texts[language].services}</a></li>
        <li><a>{texts[language].about}</a></li>
        <li><a>{texts[language].contact}</a></li>
        <li><a>{texts[language].portfolio}</a></li>
      </ul>
    </div>
  );
}
