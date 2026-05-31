"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { Menu, X, Globe, Sun, Moon, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t, isAr } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { nameAr: "الرئيسية", nameEn: "Home", path: "/" },
    { nameAr: "الخدمات", nameEn: "Services", path: "/services" },
    { nameAr: "أعمالنا", nameEn: "Portfolio", path: "/portfolio" },
    { nameAr: "الأسعار", nameEn: "Pricing", path: "/pricing" },
    { nameAr: "من نحن", nameEn: "About Us", path: "/about" },
    { nameAr: "اتصل بنا", nameEn: "Contact", path: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
              {t("إنما سوفت", "Inma Soft")}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(item.nameAr, item.nameEn)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-1.5 text-xs font-semibold"
              title={t("Switch to English", "التحويل للعربية")}
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "EN" : "العربية"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Quick CTA */}
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              {t("اطلب استشارة", "Get Consultation")}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Lang */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground text-xs font-bold"
            >
              {language === "ar" ? "EN" : "عربي"}
            </button>

            {/* Mobile Theme */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border text-muted-foreground"
            >
              {mounted && theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-border text-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                pathname === item.path
                  ? "bg-muted text-primary font-bold"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {t(item.nameAr, item.nameEn)}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg shadow-md"
            >
              {t("اطلب استشارة مجانية", "Get Free Consultation")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
