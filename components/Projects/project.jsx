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
        title: { En: "Hotel - Web Page", Es: "Pagina Web - Hotel" },
        description: {
            En: "HTML || Javascript || CSS || React",
            Es: "HTML || Javascript || CSS || React",
        },
        image: "/images/Captura de pantalla (176).png",
        details: {
            En: `Modern and responsive website for a hotel, built with HTML, CSS, and React. The site includes a contact form that allows users to send emails directly. It features a fully responsive design and interactive visual effects developed with JavaScript to deliver a smooth and engaging user experience.`,
            Es: `Sitio web moderno y responsivo para un hotel, desarrollado con HTML, CSS y React. La página permite a los usuarios enviar correos electrónicos de contacto directamente desde el formulario integrado. Cuenta con un diseño adaptable a diferentes dispositivos y efectos visuales interactivos implementados con JavaScript para una experiencia de usuario fluida y atractiva.`,
        },
        slack: {
            En: `Technological stack: Javascript||React||Tailwind||Bccrypt||Express|| Node `,
            Es: `Stack tecnologico: Javascript||React||Tailwind||Bccrypt||Express|| Node
`,
        },
        repositorio: {
            En: `https://github.com/romansalom/hotel/tree/master`,
            Es: `https://github.com/romansalom/hotel/tree/master`
        },
        view: {
            En: `https://hotel-8q2nhhfzd-romansaloms-projects.vercel.app/`,
            Es: `https://hotel-8q2nhhfzd-romansaloms-projects.vercel.app/`
        },
    }, {
        title: { En: "Desing - Web Page", Es: "Pagina Web - Desing" },
        description: {
            En: "HTML || Javascript || CSS || React",
            Es: "HTML || Javascript || CSS || React",
        },
        image: "/images/Screenshot 2024-07-10 135028.png",
        details: {
            En: `Responsive website for a furnished rental business, built with HTML, CSS, and React. It includes a contact form that allows users to send emails directly. The site features a modern design, fully adaptable to all devices, with interactive effects and functionality developed in JavaScript to enhance the user experience.`,
            Es: `Página web responsiva para una empresa de amueblados, desarrollada con HTML, CSS y React. Permite a los usuarios enviar correos electrónicos de contacto a través de un formulario integrado. El sitio cuenta con un diseño moderno, adaptable a todo tipo de dispositivos, e incluye efectos y funcionalidades interactivas implementadas con JavaScript para mejorar la experiencia del usuario.`,
        },
        slack: {
            En: `Technological stack: Javascript||React||Tailwind||Bccrypt||Express|| Node `,
            Es: `Stack tecnologico: Javascript||React||Tailwind||Bccrypt||Express|| Node
`,
        },
        repositorio: {
            En: `https://github.com/romansalom/KTS/tree/main`,
            Es: `https://github.com/romansalom/KTS/tree/main`
        },
        view: {
            En: `https://kts-liard.vercel.app/`,
            Es: `https://kts-liard.vercel.app/`
        },
    }
    , {
        title: { En: "Web Scrapping", Es: "Extracción de datos web" },
        description: {
            En: "HTML || Javascript || CSS || React || Chronium || Express || Node ",
            Es: "HTML || Javascript || CSS || React || Chronium || Express || Node ",
        },
        image: "/images/Captura de pantalla (145) (1).png",
        details: {
            En: `Interactive web app built with React, Node.js, and Puppeteer to compare sneaker prices in real time from sites like Grid, Moov, and Digital Sport. It features automated web scraping, a responsive UI styled with Tailwind CSS, and a robust backend with Express to help users find the best deals available.`,
            Es: `Aplicación web interactiva desarrollada con React, Node.js y Puppeteer para comparar precios de zapatillas en tiempo real desde sitios como Grid, Moov y Digital Sport. Utiliza scraping automatizado, una interfaz responsiva con Tailwind CSS y un backend robusto con Express para ofrecer al usuario las mejores ofertas disponibles.

`,
        },
        slack: {
            En: `Technological stack: Javascript||React||Tailwind||Bccrypt||Express|| Node `,
            Es: `Stack tecnologico: Javascript||React||Tailwind||Bccrypt||Express|| Node
`,
        },
        repositorio: {
            En: `https://github.com/romansalom/WebScraping-Comparacion-de-precios`,
            Es: `https://github.com/romansalom/WebScraping-Comparacion-de-precios`
        },
        view: {
            En: `https://drive.google.com/file/d/1fWVmFUGBjRxX30wxZD1tDrLSjisX2SWy/view`,
            Es: `https://drive.google.com/file/d/1fWVmFUGBjRxX30wxZD1tDrLSjisX2SWy/view`
        },
    }, {
        title: { En: "Tincol - Web Page", Es: "Tincol - Pagina Web" },
        description: {
            En: "HTML || Javascript || CSS || React ",
            Es: "HTML || Javascript || CSS || React ",
        },
        image: "/images/LAva1.png",
        details: {
            En: `Responsive website for a fabric store, built with HTML, CSS, and React. It includes a contact form that lets users send emails directly. The site features a modern, device-adaptive design with visual effects and interactions developed in JavaScript to enhance user experience.`,
            Es: `Sitio web responsivo para una tienda de telas, desarrollado con HTML, CSS y React. Permite a los usuarios enviar correos de contacto a través de un formulario integrado. El diseño es moderno y adaptable a cualquier dispositivo, con efectos visuales e interacciones desarrolladas en JavaScript para mejorar la experiencia del usuario.`,
        },
        slack: {
            En: `Technological stack: Javascript||React||Tailwind||Bccrypt||Express|| Node `,
            Es: `Stack tecnologico: Javascript||React||Tailwind||Bccrypt||Express|| Node
`,
        },
        repositorio: {
            En: `https://github.com/romansalom/web-page-tincol-HTML-CSS`,
            Es: `https://github.com/romansalom/web-page-tincol-HTML-CSS`
        },
        view: {
            En: `http://www.tincol.com.ar/`,
            Es: `http://www.tincol.com.ar/`
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
                                <p><a href={project.repositorio[language]}>Github </a></p>
                                <p><a href={project.view[language]}> Deploy</a></p>

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
