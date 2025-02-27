'use client'
import { useState } from "react";
import styles from "./styles.module.css";
import { useLanguage } from "@/context/LanguageContext";
import Expirience from "@/components/Expirience/expirience";
import Proyects from "@/components/Projects/project";
import Studies from "@/components/Studies/studies";



export default function NavBar() {
  const { language } = useLanguage();
  const [selectedSection, setSelectedSection] = useState("services");

  const texts = {
    En: { epirience: "Expirience", proyects: "Proyects", studies: "Studies" },
    Es: { epirience: "Experiencia", proyects: "Proyectos", studies: "Estudios" }
  };

  // Función para renderizar el componente según la opción elegida
  const renderComponent = () => {
    switch (selectedSection) {
      case "epirience":
        return <Expirience />;
      case "proyects":
        return <Proyects />;
      case "studies":
        return <Studies />;
      default:
        return <Proyects />;
    }
  };

  return (
    <div>
      <nav className={styles.container}>
        <ul className={styles.sections}>
          <li onClick={() => setSelectedSection("proyects")}>{texts[language].proyects}</li>
          <li onClick={() => setSelectedSection("epirience")}>{texts[language].epirience}</li>
          <li onClick={() => setSelectedSection("studies")}>{texts[language].studies}</li>
        </ul>
      </nav>
      <div className={styles.content}>{renderComponent()}</div>
    </div>
  );
}
