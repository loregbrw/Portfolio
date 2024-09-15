import React, { useState, useEffect } from "react";

interface ILanguage {
    language: "Portuguese" | "English";
    toggleLanguage: () => void;
}

export const LanguageContext = React.createContext({} as ILanguage);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {

    const getInitialLanguage = (): "Portuguese" | "English" => {
        const savedLanguage = localStorage.getItem("Language");
        return savedLanguage === "Portuguese" || savedLanguage === "English"
            ? savedLanguage
            : "English";
    };

    const [language, setLanguage] = useState<"Portuguese" | "English">(getInitialLanguage);

    const toggleLanguage = () => {
        const newLanguage = language === "English" ? "Portuguese" : "English";
        setLanguage(newLanguage);
        localStorage.setItem("Language", newLanguage);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem("Language");
        if (savedLanguage) {
            setLanguage(savedLanguage as "Portuguese" | "English");
        }
    }, []);

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
