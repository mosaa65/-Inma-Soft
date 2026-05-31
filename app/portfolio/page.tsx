"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Globe, ShoppingCart, Cpu, Server, ExternalLink, Sparkles } from "lucide-react";

interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  category: "web" | "ecommerce" | "system" | "ai";
  tags: string[];
  color: string;
}

export default function Portfolio() {
  const { t, isAr } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", nameAr: "الكل", nameEn: "All Projects" },
    { id: "web", nameAr: "مواقع ويب", nameEn: "Websites" },
    { id: "ecommerce", nameAr: "متاجر إلكترونية", nameEn: "E-Commerce" },
    { id: "system", nameAr: "أنظمة متكاملة", nameEn: "Systems (ERP/CRM)" },
    { id: "ai", nameAr: "ذكاء اصطناعي", nameEn: "AI Solutions" },
  ];

  const projects: Project[] = [
    {
      id: "1",
      titleAr: "نظام إدارة الموارد ERP لشركة أرام للأغذية",
      titleEn: "Aram Food ERP Management System",
      descAr: "نظام ERP متكامل يربط المبيعات، المخازن، الرواتب، والمحاسبة المالية لأكثر من 50 فرع ومستودع بدقة وأمان متناهي.",
      descEn: "A robust ERP system linking sales, inventory, payroll, and financials for over 50 branches with maximum safety.",
      category: "system",
      tags: ["Next.js", "Laravel", "PostgreSQL", "Realtime Dashboard"],
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "2",
      titleAr: "منصة شوبلي للتجارة الإلكترونية المتعددة",
      titleEn: "Shopley Multi-Vendor E-Commerce Platform",
      descAr: "منصة تجوق ضخمة متعددة البائعين تدعم بوابات دفع متنوعة، كوبونات، نظام شحن ذكي، عمولات، ولوحات تحكم خاصة لكل تاجر.",
      descEn: "Large marketplace supporting major payments, custom discounts, smart shipping integrations, and seller panels.",
      category: "ecommerce",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      color: "from-emerald-600 to-teal-600",
    },
    {
      id: "3",
      titleAr: "مساعد الذكاء الاصطناعي الذكي لمنصة إثراء التعليمية",
      titleEn: "Ithra EdTech AI Intelligent Agent",
      descAr: "دمج وكيل ذكاء اصطناعي تفاعلي يتعلم من المناهج والكتب التعليمية ليقوم بشرح وتلخيص الدروس للطلاب والإجابة الفورية.",
      descEn: "Generative AI agent learning from school curricula to summarize lessons and give instant explanations to students.",
      category: "ai",
      tags: ["OpenAI API", "Vector DB", "FastAPI", "Python"],
      color: "from-pink-600 to-purple-600",
    },
    {
      id: "4",
      titleAr: "موقع تعريفي لشركة عقارية عملاقة - إتقان",
      titleEn: "Itqan Real Estate Corporate Website",
      descAr: "موقع تعريفي فاخر لعرض المشاريع العقارية والوحدات السكنية والفلل مع خريطة تفاعلية وحجز مواعيد الزيارة.",
      descEn: "Luxurious landing and presentation corporate website featuring real estate listings and booking slots.",
      category: "web",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-cyan-600 to-blue-600",
    },
    {
      id: "5",
      titleAr: "نظام إدارة العيادات والمراكز الطبية - شفا",
      titleEn: "Shifa Clinic & HIS Management System",
      descAr: "نظام سحابي لإدارة الحجوزات الطبية، ملفات المرضى الإلكترونية، الوصفات الدوائية والفوترة وتدفقات العمل الطبية.",
      descEn: "Cloud HIS managing medical appointments, electronic medical records (EMR), billing, and workflow operations.",
      category: "system",
      tags: ["Vue.js", "Django", "MySQL", "AWS S3"],
      color: "from-violet-600 to-purple-600",
    },
    {
      id: "6",
      titleAr: "نظام ذكي لأتمتة خدمة العملاء بالفيديو والدردشة",
      titleEn: "Smart Video & Chat AI Customer Support",
      descAr: "أتمتة الدعم الفني وخدمة العملاء بالاعتماد على روبوتات ذكية قادرة على قراءة وفحص مشاكل المستخدمين وتقديم حلول.",
      descEn: "Automated support system leveraging intelligent chat assistants to diagnose user issues and suggest guides.",
      category: "ai",
      tags: ["RAG Architecture", "Langchain", "Next.js"],
      color: "from-amber-600 to-orange-600",
    },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const getCatIcon = (cat: string) => {
    switch (cat) {
      case "web":
        return <Globe className="w-5 h-5" />;
      case "ecommerce":
        return <ShoppingCart className="w-5 h-5" />;
      case "system":
        return <Server className="w-5 h-5" />;
      case "ai":
        return <Cpu className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          {t("معرض أعمالنا ومشاريعنا", "Our Portfolio & Work Showcase")}
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {t(
            "نفخر باستعراض نخبة من المشاريع والحلول التقنية المتميزة التي قمنا ببنائها وتطويرها لشركاء نجاحنا في مختلف القطاعات التقنية والبرمجية.",
            "We take pride in presenting our best tech projects and systems engineered to accelerate digital success across business landscapes."
          )}
        </p>
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all ${
              filter === cat.id
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/10"
                : "bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {t(cat.nameAr, cat.nameEn)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col justify-between glow-card"
          >
            {/* Visual Header Mockup */}
            <div className={`h-48 bg-gradient-to-tr ${project.color} flex items-center justify-center text-white p-6 relative group/visual`}>
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl relative z-10 transition-transform duration-300 group-hover/visual:scale-110">
                {getCatIcon(project.category)}
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 bg-black/35 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                {t(
                  project.category === "web" ? "ويب" : project.category === "ecommerce" ? "متجر" : project.category === "system" ? "نظام" : "ذكاء",
                  project.category.toUpperCase()
                )}
              </span>
            </div>

            {/* Info details */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground line-clamp-1">{t(project.titleAr, project.titleEn)}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {t(project.descAr, project.descEn)}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between mt-auto">
                <span className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1">
                  <span>{t("نوع المشروع", "Project Category")}</span>
                </span>
                <Link
                  href="/contact?ref=portfolio"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>{t("اطلب مشروعاً مماثلاً", "Order similar project")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
