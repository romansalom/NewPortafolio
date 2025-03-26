// components/ItalicsName.js
"use client"
import styles from "./styles.module.css";


export default function Expirience() {


    return (
        <div className={styles.container} >
            <div>
                <h2 className={styles.titulo}> Happy Agencies</h2>

            </div>
            <div className={styles.section}>
                <h3 className={styles.subTitulo}>Web Developer</h3>
                <p className={styles.parrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, ipsam officia! Eius dolor voluptas magnam alias modi totam amet sint rem suscipit quis a praesentium sed neque, incidunt doloremque laborum?</p>

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
                        <img className={styles.img} src="/images/Captura de pantalla (137).png" width={100} height={100} />

                    </div>
                </div>
            </div>
        </div>


    );
}
