"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
    {
        title: { En: "E-Comerce", Es: "E-Comerce" },
        description: {
            En: "Node.js  || Javascript || Express || React",
            Es: "Node.js  || Javascript || Express || React",
        },
        image: "/images/Captura de pantalla (137).png",
        details: {
            En: `The e-commerce platform is developed in React and Node.js with Express. Tailwind CSS was used for a modern and
                responsive design. Security is paramount: passwords are encrypted with bcrypt and we manage the database withPgAdmin.`,
            Es: `Este e-commerce es una plataforma desarrollada en React y Node.js con Express. Utilice Tailwind CSS para un diseño moderno y
adaptable. La seguridad es primordial: contraseñas con ccrypt y gestionamos la base de datos con PgAdmin`,
        },
        slack: {
            En: `Technological stack: Javascript||React||Tailwind||Bccrypt||Express|| Node `,
            Es: `Stack tecnologico: Javascript||React||Tailwind||Bccrypt||Express|| Node
`,
        },
        repositorio: {
            En: `https://github.com/romansalom/Ecomerce`,
            Es: `https://github.com/romansalom/Ecomerce`
        },
        view: {
            En: 'https://drive.google.com/file/d/1LOfAQwbE8h3USoBd4pmRt-ji9fBUSZg0/view?usp=sharing',
            Es: 'https://drive.google.com/file/d/1LOfAQwbE8h3USoBd4pmRt-ji9fBUSZg0/view?usp=sharing'
        },
    },
    {
        title: { En: "Workflow CRM", Es: "Workflow CRM" },
        description: {
            En: "Node.js  || Express || React || Pg Admin",
            Es: "Node.js  || Express || React  || Pg Admin",
        },
        image: "/images/laqueva (1).png",
        details: {
            En: `Workflow application for the management of work teams, assignment and organization of tasks. Cloud storage of
files, videos and images. Access from multiple devices. Admin panel with user moderation, blocking and subscription
control.
`,
            Es: `Workflow aplicación para la gestión de equipos de trabajo, asignación y organización de tareas. Almacenamiento en la nube de
archivos, videos e imágenes. Acceso desde múltiples dispositivos. Panel administrador con posibilidad de moderación de usuarios,
bloqueo y control de suscripciones`,
        },
        slack: {
            En: `Technological stack: Javascript||React||Tailwind||Bccrypt||Express|| Node `,
            Es: `Stack tecnologico: Javascript||React||Tailwind||Bccrypt||Express|| Node
`,
        },
        repositorio: {
            En: ` https://acortar.link/ExRh8T`,
            Es: ` https://acortar.link/ExRh8T`
        },
        view: {
            En: `https://www.youtube.com/watch?v=_1N5Cc__mgg`,
            Es: `https://www.youtube.com/watch?v=_1N5Cc__mgg`
        },
    }, {
        title: { En: "E-Comerce", Es: "E-Comerce" },
        description: {
            En: "Node.js  || Javascript || Express || React",
            Es: "Node.js  || Javascript || Express || React",
        },
        image: "/images/Captura de pantalla (137).png",
        details: {
            En: `The e-commerce platform is developed in React and Node.js with Express. Tailwind CSS was used for a modern and
                responsive design. Security is paramount: passwords are encrypted with bcrypt and we manage the database withPgAdmin.`,
            Es: `Este e-commerce es una plataforma desarrollada en React y Node.js con Express. Utilice Tailwind CSS para un diseño moderno y
adaptable. La seguridad es primordial: contraseñas con ccrypt y gestionamos la base de datos con PgAdmin`,
        },
        slack: {
            En: `Technological stack: Javascript||React||Tailwind||Bccrypt||Express|| Node `,
            Es: `Stack tecnologico: Javascript||React||Tailwind||Bccrypt||Express|| Node
`,
        },
        repositorio: {
            En: `https://github.com/romansalom/Ecomerce`,
            Es: `https://github.com/romansalom/Ecomerce`
        },
        view: {
            En: `https://drive.google.com/file/d/1LOfAQwbE8h3USoBd4pmRt-ji9fBUSZg0/view?usp=sharing`,
            Es: `https://drive.google.com/file/d/1LOfAQwbE8h3USoBd4pmRt-ji9fBUSZg0/view?usp=sharing`
        },
    }
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
                            <div >
                                <h2>{project.title[language]} -{language === "Es" ? "Detalles" : "Details"}</h2>
                                <p>{project.details[language]}</p>
                                <br></br>
                                <p>  Github Link : <a href={project.repositorio[language]}> {project.repositorio[language]}</a></p>
                                <p>  Web Link : <a href={project.view[language]}> {project.view[language]}</a></p>

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
                                <img src={project.image} alt={project.title[language]} width={500} height={300} />
                                <div className={styles.buttonContenedor}>
                                    <div className={styles.button} onClick={() => toggleContent(index)}>
                                        <a>{language === "Es" ? "Ver Más" : "See More"}</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))
            }
        </div >
    );
}
