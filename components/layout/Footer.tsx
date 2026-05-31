"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Sparkles, Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const { t, isAr } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border mt-auto overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Brand Profile */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                {t("إنما سوفت", "Inma Soft")}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                "شريكك التقني الموثوق لبناء البرمجيات المخصصة، مواقع الويب، المتاجر الإلكترونية، وأنظمة الذكاء الاصطناعي بأعلى جودة وأحدث المعايير العالمية.",
                "Your trusted tech partner for custom software, professional websites, e-commerce, and advanced AI solutions with high global standards."
              )}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Github"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              {t("روابط سريعة", "Quick Links")}
            </h3>
            <ul className="space-y-3">
              {[
                { nameAr: "الرئيسية", nameEn: "Home", path: "/" },
                { nameAr: "عن الشركة", nameEn: "About Us", path: "/about" },
                { nameAr: "كل الخدمات", nameEn: "Our Services", path: "/services" },
                { nameAr: "معرض الأعمال", nameEn: "Portfolio", path: "/portfolio" },
                { nameAr: "خطط الأسعار", nameEn: "Pricing Plans", path: "/pricing" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                  >
                    {t(link.nameAr, link.nameEn)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Service Categories */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              {t("الخدمات الرئيسية", "Popular Services")}
            </h3>
            <ul className="space-y-3">
              {[
                { nameAr: "مواقع وتطبيقات الويب", nameEn: "Websites & Web Apps", slug: "websites" },
                { nameAr: "المتاجر الإلكترونية", nameEn: "E-Commerce", slug: "ecommerce" },
                { nameAr: "الأنظمة المتخصصة ERP/CRM", nameEn: "Enterprise ERP/CRM", slug: "systems" },
                { nameAr: "حلول الذكاء الاصطناعي", nameEn: "AI Solutions", slug: "ai" },
                { nameAr: "الأمن السيبراني وحماية المواقع", nameEn: "Cybersecurity", slug: "security" },
              ].map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={`/services?category=${cat.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(cat.nameAr, cat.nameEn)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              {t("تواصل معنا", "Contact Info")}
            </h3>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">{t("البريد الإلكتروني", "Email Address")}</p>
                <a href="mailto:info@inmasoft.com" className="text-sm hover:text-primary transition-colors">
                  info@inmasoft.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">{t("الهاتف", "Phone Number")}</p>
                <a href="tel:+966500000000" className="text-sm hover:text-primary transition-colors" dir="ltr">
                  +966 50 000 0000
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">{t("واتساب مباشر", "WhatsApp Support")}</p>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
                  dir="ltr"
                >
                  +966 50 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t("إنما سوفت للحلول البرمجية متقدمة. جميع الحقوق محفوظة.", "Inma Soft for advanced software solutions. All rights reserved.")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              {t("سياسة الخصوصية", "Privacy Policy")}
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              {t("الشروط والأحكام", "Terms & Conditions")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
