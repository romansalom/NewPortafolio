"use client"
import { createContext, useContext, useState } from "react";

// Crear el contexto
const LanguageContext = createContext();

// Hook para acceder al contexto
export const useLanguage = () => useContext(LanguageContext);

// Proveedor de idioma
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("En"); // Idioma por defecto: inglés

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === "En" ? "Es" : "En")); // Alternar entre inglés y español
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
