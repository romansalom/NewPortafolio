// components/ItalicsName.js
"use client"
import Link from "next/link";
import styles from "./styles.module.css";
import { useLanguage } from "@/context/LanguageContext";


export default function Expirience() {
    const { language } = useLanguage();

    const texts = {
        En: { title: `Web Developer`, paragraph: 'parrafo ingles Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores, cumque, et provident delectus unde consectetur, impedit neque sequi placeat doloribus repellendus mollitia eius adipisci sed illo nemo enim non.' },
        Es: {
            title: `Desarrollador Web`, paragraph: 'parrafo espanol Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores, cumque, et provident delectus unde consectetur, impedit neque sequi placeat doloribus repellendus mollitia eius adipisci sed illo nemo enim non.'
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
                        <h3 className={styles.subTitulo}>Proyect 1</h3>
                        <p className={styles.parrafo}>Descritpion</p>
                        <h3 className={styles.subTitulo}>Proyect 2</h3>
                        <p className={styles.parrafo}>Descritpion</p>
                        <h3 className={styles.subTitulo}>Proyect 3</h3>
                        <p className={styles.parrafo}>Descritpion</p>
                    </div>
                    <div className={styles.derecha}>
                        <Link href={'https://www.happyagencies.com/'}><img className={styles.img} src="/images/download.jpeg" width={100} height={100} /></Link>

                    </div>
                </div>
            </div>
        </div >


    );
}
