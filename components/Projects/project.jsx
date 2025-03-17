"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
    {
        title: { En: "Project 1", Es: "Proyecto 1" },
        description: {
            En: "Technology, technology, technology...",
            Es: "Tecnología, tecnología, tecnología...",
        },
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: {
            En: "Project 1 details, extended information about the project.",
            Es: "Detalles del Proyecto 1, información extendida sobre el proyecto.",
        },
    },
    {
        title: { En: "Project 2", Es: "Proyecto 2" },
        description: {
            En: "Another tech description...",
            Es: "Otra descripción de tecnología...",
        },
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: {
            En: "Project 2 details, extended information about this other project.",
            Es: "Detalles del Proyecto 2, información extendida sobre este otro proyecto.",
        },
    },
    {
        title: { En: "Project 3", Es: "Proyecto 3" },
        description: {
            En: "More tech-related information...",
            Es: "Otra descripción de tecnología...",
        },
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: {
            En: "Project 3 details, extended information about this project.",
            Es: "Detalles del Proyecto 3, información extendida sobre este proyecto.",
        },
    },
    {
        title: { En: "Project 4", Es: "Proyecto 4" },
        description: {
            En: "Another example of a tech-related project...",
            Es: "Otra descripción de tecnología...",
        },
        image: "https://i.blogs.es/7289a5/captura-de-pantalla-2016-01-07-a-las-17.29.49/1366_2000.png",
        details: {
            En: "Project 4 details, extended information about this project.",
            Es: "Detalles del Proyecto 4, información extendida sobre este proyecto.",
        },
    },
];

export default function Projects() {
    const [showNewContent, setShowNewContent] = useState({});
    const { language } = useLanguage();

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
                                <h2>{project.title[language]} - Details</h2>
                                <p>{project.details[language]}</p>
                                <div className={styles.buttonContenedor}>
                                    <div className={styles.button} onClick={() => toggleContent(index)}>
                                        <a>{language === "Es" ? "Volver" : "Back"}</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Contenido inicial
                            <div>
                                <h2>{project.title[language]}</h2>
                                <p>{project.description[language]}</p>
                                <img src={project.image} alt={project.title[language]} />
                                <div className={styles.buttonContenedor}>
                                    <div className={styles.button} onClick={() => toggleContent(index)}>
                                        <a>{language === "Es" ? "Ver Más" : "See More"}</a>
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
