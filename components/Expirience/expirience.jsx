// components/ItalicsName.js
"use client"
import Link from "next/link";
import styles from "./styles.module.css";
import { useLanguage } from "@/context/LanguageContext";


export default function Expirience() {
    const { language } = useLanguage();

    const texts = {
        En: { title: `Web Developer`, paragraph: 'At Happy Agencies, I worked closely with international clients from the U.S., UK, and Australia, participating in direct meetings to gather requirements and deliver tailored solutions. My role involved building automations using Make, developing user interfaces in HubSpot, and creating custom modules, templates, custom cards, and workflows. I specialized in crafting scalable and dynamic solutions by leveraging the HubSpot API and its database, ensuring seamless integration and functionality based on each client’s specific needs.' },
        Es: {
            title: `Desarrollador Web`, paragraph: 'En Happy Agencies trabajé con clientes internacionales de EE. UU., Reino Unido y Australia, participando en reuniones directas para relevar requerimientos y ofrecer soluciones personalizadas. Mi rol incluyó la creación de automatizaciones utilizando Make, el desarrollo de interfaces dentro de HubSpot, así como la construcción de módulos personalizados, templates, custom cards y workflows. Me especialicé en diseñar soluciones escalables y dinámicas, aprovechando la API de HubSpot y su base de datos, garantizando una integración fluida y funcionalidades ajustadas a las necesidades específicas de cada cliente.'
        }
    };
    return (
        <div className={styles.container} >
            <div>
                <h2 className={styles.titulo}> Happy Agencies</h2>

            </div>
            <div className={styles.section}>
                <h3 className={styles.subTitulo}>{texts[language].title}</h3>
                <p className={styles.parrafo}>{texts[language].paragraph}</p>

                <div className={styles.contenedorDoble}>
                    <div className={styles.izquierda}>

                    </div>
                    <div className={styles.derecha}>
                        <Link href={'https://www.happyagencies.com/'}><img className={styles.img} src="/images/download.jpeg" width={100} height={100} /></Link>

                    </div>
                </div>
            </div>
        </div >


    );
}
