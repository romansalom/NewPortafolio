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
                , image: '/images/coderhouse-aprende-haciendo.jpg'
            },
            Es: {
                title: `Desarrollador Full Stack`,
                paragraph: 'Formación intensiva orientada al desarrollo de aplicaciones web completas, desde el frontend hasta el backend, siguiendo metodologías ágiles como Scrum. El curso incluyó la creación de proyectos reales, trabajo en equipo, control de versiones y testing. Se trabajaron tecnologías modernas y herramientas clave del ecosistema JavaScript.',
                assosiation: "Coder House",
                tecnologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Sequelize', 'Git', 'GitHub', ' Testing', 'Webpack', 'Trello', 'Scrum', 'WebSocket', ' Socket.io', 'Postman', 'Jira'],
                image: '/images/coderhouse-aprende-haciendo.jpg'
            }
        },
        {
            En: {
                title: `Full Stack Developer`,
                paragraph: `800 hours of intensive, hands-on training in full stack web development.Completed a rigorous, real-world oriented program with a strong focus on both frontend and backend technologies. During the bootcamp, I contributed to a collaborative workflow project that allowed me to strengthen my skills in building scalable web applications. Gained valuable experience using React, Redux, Node.js, Express, PostgreSQL, Tailwind CSS, and Bootstrap—while applying agile methodologies like Scrum and version control with Git.`,
                assosiation: "Henry",
                tecnologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', ' Node.js', 'Express.js', 'MySQL', 'Sequelize', ' PostgreSQL', 'Git', 'GitHub', 'Tailwind', 'CSS', 'Bootstrap', 'Testing', 'Webpack', 'Trello', 'Scrum'],
                image: '/images/original.png',
            },
            Es: {
                title: `Desarrollador Full Stack`,
                paragraph: '800 horas de formación intensiva teórico-práctica en desarrollo web full stack.Completé un programa riguroso enfocado en la aplicación de tecnologías modernas tanto del frontend como del backend. Durante el bootcamp, participé en un proyecto colaborativo tipo workflow, lo que me permitió fortalecer mis habilidades en la construcción de aplicaciones web escalables. Adquirí experiencia práctica con herramientas como React, Redux, Node.js, Express, PostgreSQL, Tailwind CSS y Bootstrap, trabajando bajo metodologías ágiles como Scrum y utilizando control de versiones con Git.',
                assosiation: "Henry",
                tecnologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', ' Node.js', 'Express.js', 'MySQL', 'Sequelize', ' PostgreSQL', 'Git', 'GitHub', 'Tailwind', 'CSS', 'Bootstrap', 'Testing', 'Webpack', 'Trello', 'Scrum'],
                image: '/images/original.png'

            }
        },
        {
            En: {
                title: `Systems Analyst (Currently in First Year)`,
                paragraph: `Technical education focused on software development and analysis, emphasizing programming logic, database management, software quality, and modern development methodologies. Currently studying subjects such as Software Quality and Judaic Studies, with a mid-program certification as a Programming Analyst.`,
                assosiation: "ORT",
                tecnologies: ['Java', 'Eclipse'],
                image: '/images/images.png',
            },
            Es: {
                title: `Analista de sistemas (Primer año en curso)`,
                paragraph: 'Formación técnica orientada al desarrollo y análisis de software, con enfoque en lógica de programación, bases de datos, calidad de software y metodologías de desarrollo. Actualmente cursando materias como Calidad de Software y Estudios Judaicos, con una proyección hacia certificación intermedia como Analista Programador.',
                assosiation: "ORT",
                tecnologies: ['Java', 'Eclipse'],
                image: '/images/images.png'

            }
        }
    ];

    return (
        <>
            {texts.reverse().map((item, index) => (
                <div key={index} className={styles.container}>
                    <h2 className={styles.titulo}>{item[language].assosiation}</h2>

                    <div className={styles.section}>
                        <h3 className={styles.subTitulo}>{item[language].title}</h3>
                        <p className={styles.parrafo}>{item[language].paragraph}</p>

                        <div className={styles.contenedorDoble}>
                            <div className={styles.izquierda}>
                                <h4 className={styles.subTitulo}>Tecnologías:</h4>
                                <div className={styles.tecnologiesContainer}>
                                    {item[language].tecnologies.map((tech, techIndex) => (
                                        <h3 key={techIndex} className={styles.subTitulo}>{tech}</h3>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.derecha}>
                                <img src={item[language].image} alt={item[language].assosiation} width={100} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}


