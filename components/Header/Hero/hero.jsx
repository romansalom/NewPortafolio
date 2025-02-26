"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./styles.module.css";

export default function Hero() {
    const { language } = useLanguage();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = '200';

        let particles = [];
        class Particle {
            constructor() {
                const startInside = Math.random() < 10; // 50% de chance de que inicie dentro del canvas

                if (startInside) {
                    // Aparece en una posición aleatoria dentro del canvas
                    this.x = Math.random() * canvas.width;
                } else {
                    // Aparece fuera del canvas, a la izquierda o derecha
                    this.x = Math.random() < 0.5 ? -10 : canvas.width + 10;
                }

                this.y = Math.random() * (canvas.height / 2) + (canvas.height * 2) / 2;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 0.8 + 0.2);
                this.speedY = Math.random() * 1 - 0.25;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Si sale de los bordes, reaparece en el lado opuesto
                if (this.x > canvas.width + 10 || this.x < -10) {
                    this.x = Math.random() < 0.5 ? -10 : canvas.width + 10;
                    this.y = Math.random() * (canvas.height / 3) + (canvas.height * 2) / 3;
                }
            }

            draw() {
                ctx.fillStyle = "rgba(114, 49, 49, 0.49)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }


        function createParticles(amount) {
            for (let i = 0; i < amount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        }
        createParticles(800);
        animate();

        return () => {
            particles = [];
        };
    }, []);

    const texts = {
        En: { title: `"Empowering Your Business Through Expert Consultancy"` },
        Es: { title: `"Potenciando tu negocio a través de consultoría experta."` }
    };

    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <h2>{texts[language].title}</h2>
            </div>
            <div className={styles.paragraph}>
                <>Full Stack Developer</>
                <canvas ref={canvasRef} className={styles.sandstorm}></canvas></div>


        </div>
    );
}
