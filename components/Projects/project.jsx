// components/ItalicsName.js
"use client"

import styles from "./styles.module.css";


export default function Proyects() {


    return (
        <div className={styles.container} >

            <div className={styles.cardContainer}>
                <h2 >Card Titles</h2>
                <img src="https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png"></img>
                <h3>Tecnologies</h3>
                <div><ul><li>tec1</li><li>tec2</li><li>tec3</li><li>tec4</li></ul></div>
            </div>
            <div className={styles.cardContainer}>
                <h2 >Card Titles</h2>
                <img src="https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png"></img>
                <h3>Tecnologies</h3>
                <div><ul><li>tec1</li><li>tec2</li><li>tec3</li><li>tec4</li></ul></div>
            </div>

        </div>


    );
}
