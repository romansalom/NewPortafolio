"use client";
import { useState } from "react";
import styles from "./styles.module.css";

// Objeto con la información de los proyectos
const projects = [
    {
        title: "Proyecto 1",
        description: "Tecnología, tecnología, tecnología...",
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: "Detalles del Proyecto 1, información extendida sobre el proyecto.",
    },
    {
        title: "Proyecto 2",
        description: "Otra descripción de tecnología...",
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: "Detalles del Proyecto 2, información extendida sobre este otro proyecto.",
    }
    ,
    {
        title: "Proyecto 3",
        description: "Otra descripción de tecnología...",
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: "Detalles del Proyecto 2, información extendida sobre este otro proyecto.",
    }
    ,
    {
        title: "Proyecto 4",
        description: "Otra descripción de tecnología...",
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: "Detalles del Proyecto 2, información extendida sobre este otro proyecto.",
    }
];

export default function Proyects() {
    const [showNewContent, setShowNewContent] = useState({});

    const toggleContent = (index) => {
        setShowNewContent((prev) => ({
            ...prev,
            [index]: !prev[index], // Alterna el contenido de la tarjeta seleccionada
        }));
    };

    return (
        <div className={styles.container}>
            {projects.map((project, index) => (
                <div key={index} className={styles.cardContainer}>
                    <div className={styles.cardContent}>
                        {showNewContent[index] ? (
                            // Contenido extendido
                            <div>
                                <h2>{project.title} - Detalles</h2>
                                <p>{project.details}</p>
                                <div className={styles.buttonContenedor}>
                                    <div className={styles.button} onClick={() => toggleContent(index)}>
                                        <a>Volver</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Contenido inicial
                            <div>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <img src={project.image} alt={project.title} />
                                <div className={styles.buttonContenedor}>
                                    <div className={styles.button} onClick={() => toggleContent(index)}>
                                        <a>Ver Más</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
