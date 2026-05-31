"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "rtl" | "ltr";
  t: (ar: string, en: string) => string;
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "ar" || savedLang === "en") {
      setLanguageState(savedLang);
    } else {
      // Default to Arabic or browser language
      const isArabicBrowser = typeof navigator !== "undefined" && navigator.language.startsWith("ar");
      setLanguageState(isArabicBrowser ? "ar" : "ar"); // Default is Arabic as per user preferences
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language]);

  const dir = language === "ar" ? "rtl" : "ltr";
  const isAr = language === "ar";

  const t = (ar: string, en: string) => {
    return language === "ar" ? ar : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t, isAr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
