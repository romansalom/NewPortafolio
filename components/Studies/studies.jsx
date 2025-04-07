// components/ItalicsName.js
"use client"

import styles from "./styles.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Studies() {
    const { language } = useLanguage();

    const texts = [
        {
            En: {
                title: `Full Stack Developer`,
                paragraph: 'An intensive program focused on building full-stack web applications using modern JavaScript technologies. The bootcamp emphasized hands-on experience, real-world projects, team collaboration, agile methodologies (Scrum), version control, and testing practices.',
                assosiation: "Coder House",
                tecnologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Sequelize', 'Git', 'GitHub', ' Testing', 'Webpack', 'Trello', 'Scrum', 'WebSocket', ' Socket.io', 'Postman', 'Jira']
            },
            Es: {
                title: `Desarrollador Web`,
                paragraph: 'Formación intensiva orientada al desarrollo de aplicaciones web completas, desde el frontend hasta el backend, siguiendo metodologías ágiles como Scrum. El curso incluyó la creación de proyectos reales, trabajo en equipo, control de versiones y testing. Se trabajaron tecnologías modernas y herramientas clave del ecosistema JavaScript.',
                assosiation: "Coder House",
                tecnologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Sequelize', 'Git', 'GitHub', ' Testing', 'Webpack', 'Trello', 'Scrum', 'WebSocket', ' Socket.io', 'Postman', 'Jira']
            }
        },
        {
            En: {
                title: `Frontend Developer`,
                paragraph: 'A course focused on user interface design and modern front-end development...',
                assosiation: "Udemy",
                tecnologies: ["HTML", "CSS", "JavaScript"]
            },
            Es: {
                title: `Desarrollador Frontend`,
                paragraph: 'Un curso centrado en diseño de interfaces de usuario y desarrollo frontend moderno...',
                assosiation: "Udemy",
                tecnologies: ["HTML", "CSS", "JavaScript"]
            }
        }
    ];

    return (
        <>
            {texts.map((item, index) => (
                <div key={index} className={styles.container}>
                    <h2 className={styles.titulo}>{item[language].assosiation}</h2>

                    <div className={styles.section}>
                        <h3 className={styles.subTitulo}>{item[language].title}</h3>
                        <p className={styles.parrafo}>{item[language].paragraph}</p>

                        <div className={styles.contenedorDoble}>
                            <div className={styles.izquierda}>
                                <h4 className={styles.subTitulo}>Tecnologías:</h4>
                                <div>
                                    {item[language].tecnologies.map((tech, techIndex) => (
                                        <h3 key={techIndex} className={styles.subTitulo}>{tech}</h3>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.derecha}>
                                <img className={styles.img} src="/images/download.jpeg" width={100} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}


