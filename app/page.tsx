"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { categories, services } from "@/data/services";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Zap, Code, Shield, Brain } from "lucide-react";

export default function Home() {
  const { t, isAr } = useLanguage();

  // Get featured services (limit to 6)
  const featuredServices = services.filter((s) => s.featured).slice(0, 6);

  const stats = [
    { value: "180+", labelAr: "خدمة تقنية متخصصة", labelEn: "Specialized Services" },
    { value: "22", labelAr: "تصنيف خدمات متكامل", labelEn: "Service Categories" },
    { value: "24/7", labelAr: "دعم فني واستشاري", labelEn: "Tech & Consulting Support" },
    { value: "100%", labelAr: "ضمان جودة وأمان", labelEn: "Quality & Security Guarantee" },
  ];

  const clientReviews = [
    {
      nameAr: "المهندس أحمد الشهري",
      nameEn: "Eng. Ahmed Al-Shehri",
      roleAr: "المدير التقني، شركة نجد",
      roleEn: "CTO, Najd Corp",
      textAr: "تعاملنا مع إنما سوفت لبناء نظام ERP مخصص لشركتنا. جودة الكود، سرعة التنفيذ، وفهمهم لاحتياجات العمل كانت استثنائية.",
      textEn: "We worked with Inma Soft to build a custom ERP. Code quality, speed, and understanding of business needs were exceptional.",
    },
    {
      nameAr: "سارة القحطاني",
      nameEn: "Sara Al-Qahtani",
      roleAr: "مؤسسة منصة هب التعليمية",
      roleEn: "Founder, Hub EdTech",
      textAr: "خدمات الذكاء الاصطناعي ودمج الشات بوت الذكي غيّرت تماماً تجربة خدمة العملاء في منصتنا الرقمية. أنصح بهم بشدة!",
      textEn: "AI chatbot integrations completely transformed our customer service experience. Highly recommend them!",
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-500 text-xs font-bold animate-fade-in">
            <Zap className="w-3.5 h-3.5" />
            <span>{t("شريكك التقني الرقمي المتكامل", "Your All-in-One Digital Tech Partner")}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
            {t("نصنع المستقبل التقني لـ ", "We Shape the Tech Future of ")}
            <span className="text-gradient-primary">{t("أعمالك ونشاطك التجاري", "Your Business & Brand")}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "نحن في إنما سوفت نبني برمجيات فائقة القوة، مواقع ويب عصرية، متاجر إلكترونية عالية التحويل، وحلول ذكاء اصطناعي ذكية مخصصة لنمو شركتك وسرعة أدائها.",
              "At Inma Soft, we build powerful software, modern websites, high-converting e-commerce shops, and smart custom AI solutions to accelerate your growth."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-white bg-primary hover:bg-primary/95 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>{t("استكشف الخدمات (100+)", "Explore Services (100+)")}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-xl border border-border bg-card/50 hover:bg-muted transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{t("اطلب عرض سعر مباشر", "Request a Quote")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-card/50 border border-border p-6 rounded-2xl text-center glow-card backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {t(stat.labelAr, stat.labelEn)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {t("تصنيفات الخدمات الرقمية المتكاملة", "Our Digital Service Categories")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              "نحن نغطي كافة المجالات التقنية من الصفر حتى الاحتراف الكامل لمساعدتك في أتمتة وإدارة نشاطك بذكاء.",
              "We cover all technical areas from scratch to full scale to help automate and manage your business smartly."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/services?category=${category.slug}`}
              className="group bg-card border border-border p-6 rounded-2xl glow-card block hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${category.color}`}>
                <DynamicIcon name={category.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {t(category.nameAr, category.nameEn)}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t(category.descAr, category.descEn)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-3xl font-extrabold">
              {t("الخدمات الأكثر طلباً وتميزاً", "Our Featured Services")}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t(
                "مجموعة مختارة من أفضل الخدمات التي ساعدت مئات الشركات في تسريع أعمالهم وزيادة إيراداتهم.",
                "Handpicked popular services that helped hundreds of businesses accelerate operations and boost revenue."
              )}
            </p>
          </div>
          <Link
            href="/services"
            className="text-primary font-bold text-sm hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{t("عرض جميع الخدمات", "View All Services")}</span>
            {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between glow-card relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                    <DynamicIcon name={service.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/10">
                    {t(`${service.priceMin}-${service.priceMax}$`, `Starts from $${service.priceMin}`)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{t(service.nameAr, service.nameEn)}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {t(service.descAr, service.descEn)}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border mt-6 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-primary hover:underline"
                >
                  {t("تفاصيل الخدمة", "Service Details")}
                </Link>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="px-4 py-2 bg-primary hover:bg-primary/95 text-white text-xs font-bold rounded-lg shadow-md transition-all duration-200"
                >
                  {t("اطلب الآن", "Order Now")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-card/30 border-y border-border py-20 relative">
        <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {t("لماذا يختار العملاء شركة إنما سوفت؟", "Why Do Clients Choose Inma Soft?")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "نحن لا نقدم مجرد كود برمجي، بل نبني معك شراكة تقنية كاملة تضمن لك الأمان البنيوي، سرعة الأداء المطلقة، والتوافقية الكاملة لضمان عوائد استثمارية هائلة ونمو أعمالك الرقمية بلا حدود.",
                "We don't just deliver code. We build a full technical partnership that guarantees architecture security, absolute performance speed, and seamless integrations to drive high ROI."
              )}
            </p>
            <div className="space-y-4 pt-4">
              {[
                { titleAr: "أقوى الكفاءات البرمجية والخبرات الطويلة", titleEn: "Expert developers with extensive experience" },
                { titleAr: "أمان سيبراني مدمج وحماية كاملة للبيانات", titleEn: "Built-in cybersecurity and complete data protection" },
                { titleAr: "التزام كامل بالمواعيد وجودة المعايير العالمية", titleEn: "Full compliance with deadlines and international standards" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-bold text-foreground">{t(item.titleAr, item.titleEn)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-2xl glow-card text-center space-y-4">
              <Code className="w-8 h-8 text-indigo-500 mx-auto" />
              <h3 className="font-bold text-sm">{t("تقنيات حديثة", "Modern Tech")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t("نعمل بأحدث الأطر والأدوات العالمية لضمان السرعة الأكبر.", "We work with top modern frameworks.")}</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl glow-card text-center space-y-4">
              <Shield className="w-8 h-8 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-sm">{t("أمان فائق", "High Security")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t("تأمين كامل للمشاريع ضد الاختراقات وتسريب البيانات.", "Ultimate security protection.")}</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl glow-card text-center space-y-4">
              <Brain className="w-8 h-8 text-pink-500 mx-auto" />
              <h3 className="font-bold text-sm">{t("ذكاء اصطناعي", "AI Native")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t("ندمج الذكاء والذكاء الاصطناعي التوليدي بأعمالك.", "We integrate smart generative AI.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t("ماذا يقول شركاء نجاحنا؟", "What Our Clients Say")}</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            {t("نفتخر بثقة كبار الشركات والمؤسسات التقنية والأفراد الذين كانوا شركاءنا في رحلة التطور الرقمي.", "We are proud of the trust given by leading organizations and innovators who joined our digital journey.")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientReviews.map((review, idx) => (
            <div key={idx} className="bg-card border border-border p-8 rounded-3xl glow-card space-y-6 relative">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{t(review.textAr, review.textEn)}"
              </p>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-foreground">{t(review.nameAr, review.nameEn)}</h4>
                  <p className="text-xs text-muted-foreground">{t(review.roleAr, review.roleEn)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-tr from-indigo-600 via-indigo-700 to-cyan-500 rounded-3xl p-12 overflow-hidden shadow-2xl text-center space-y-6">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl -z-10" />

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {t("هل أنت جاهز لتحويل فكرتك إلى واقع تقني؟", "Ready to Turn Your Idea into a Tech Reality?")}
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {t(
              "تواصل مع مهندسينا ومستشارينا الآن لمناقشة مشروعك والحصول على خطة عمل ودراسة تقنية مجانية بالكامل للبدء فوراً.",
              "Contact our engineers and consultants now to discuss your project and get a full technical roadmap for free."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-white text-indigo-700 hover:bg-indigo-50 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              {t("تواصل معنا عبر واتساب", "WhatsApp Chat Support")}
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              {t("احجز استشارتك المجانية", "Book Free consultation")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
