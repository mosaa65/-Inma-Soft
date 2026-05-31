"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ShieldCheck, Heart, Users, Target, Rocket } from "lucide-react";

export default function About() {
  const { t, isAr } = useLanguage();

  const values = [
    {
      titleAr: "التميز والابتكار",
      titleEn: "Innovation & Excellence",
      descAr: "نبحث دائماً عن الحلول الإبداعية والأكثر تطوراً لتقديم برمجيات متميزة ذات أداء استثنائي فائق.",
      descEn: "We pursue creative and highly advanced methods to deliver custom products with supreme speed.",
      icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    },
    {
      titleAr: "الأمان وحماية البيانات",
      titleEn: "Absolute Security",
      descAr: "حماية بياناتك وبيانات عملائك هي أولويتنا القصوى عبر دمج معايير الأمن السيبراني في كافة مراحل البناء.",
      descEn: "Data security is our primary focus, embedding strict cyber protection throughout our dev cycles.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    },
    {
      titleAr: "العميل أولاً والشفافية",
      titleEn: "Transparency & Client First",
      descAr: "نؤمن بالشراكة الكاملة مع العميل والوضوح التام في كافة مراحل التخطيط، التحليل والتنفيذ والتسليم.",
      descEn: "We believe in authentic partnership, absolute integrity, and open channels across all milestones.",
      icon: <Users className="w-6 h-6 text-cyan-500" />,
    },
  ];

  const techStack = [
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Flutter",
    "OpenAI API",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fade-in">
      {/* 1. Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          {t("من نحن | شركة إنما سوفت", "Who We Are | Inma Soft")}
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {t(
            "تعرف على رؤيتنا وقيمنا الراسخة التي تحركنا نحو ريادة التحول الرقمي وصناعة البرمجيات الفائقة لشركائنا حول العالم.",
            "Discover our vision and core principles driving digital growth and premium software engineering for our partners globally."
          )}
        </p>
      </div>

      {/* 2. Story / Mission / Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            {t("شريكك الاستراتيجي في رحلة التطور الرقمي", "Your Strategic Partner in Digital Journeys")}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t(
              "تأسست شركة إنما سوفت لتكون الذراع التقني الموثوق والأقوى للشركات، المؤسسات، ورواد الأعمال الرقميين. نحن نجمع بين الشغف البرمجي العميق والفهم الدقيق لأهداف الأعمال، لنقوم بتحويل الأفكار المعقدة إلى برمجيات وأنظمة شديدة السلاسة، القوة، والأمان.",
              "Inma Soft was founded to act as the strongest technical arm for businesses, organizations, and digital innovators. We blend deep developer passion with direct business understanding to convert complex goals into smooth, secure, and fast software."
            )}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t(
              "فريقنا يضم نخبة من المهندسين ومصممي تجربة المستخدم وخبراء الأمن السيبراني الذين يحرصون على تطبيق أعلى المعايير القياسية العالمية في كتابة الكود وتهيئة الخوادم السحابية.",
              "Our engineering team brings together professional developers, UX designers, and cybersecurity experts dedicated to standard international patterns and top cloud server architectures."
            )}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="bg-card border border-border p-8 rounded-3xl space-y-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -z-10" />

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Target className="w-5 h-5" />
              <h3 className="font-extrabold text-base">{t("رؤيتنا", "Our Vision")}</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t(
                "أن نكون الخيار العالمي الأول والأكثر موثوقية وأماناً لبناء الأنظمة المخصصة والبرمجيات المتقدمة المدعومة بالذكاء الاصطناعي لتسريع نمو وتطور الاقتصاد الرقمي.",
                "To become the world's most trusted and secure tech partner for custom systems and advanced generative AI applications."
              )}
            </p>
          </div>

          <div className="border-t border-border pt-6 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              <h3 className="font-extrabold text-base">{t("رسالتنا", "Our Mission")}</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t(
                "تقديم قيمة تقنية فائقة ذات جودة متناهية وأمان مطلق تساعد الشركات على تبسيط وأتمتة أعمالها والتفوق الرقمي الكامل في أسواقها.",
                "Deliver premium engineering and absolute safety helping companies automate processes and achieve digital superiority."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="space-y-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-foreground">
          {t("القيم الأساسية التي تحركنا", "Our Core Operating Values")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-card border border-border p-6 rounded-2xl glow-card text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-2">
                {v.icon}
              </div>
              <h3 className="font-bold text-base text-foreground">{t(v.titleAr, v.titleEn)}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{t(v.descAr, v.descEn)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Technologies We Master */}
      <div className="bg-card/40 border border-border rounded-3xl p-8 sm:p-12 text-center space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10" />
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            {t("التقنيات التي نتقن العمل بها", "Technologies We Master")}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t(
              "نحن نتابع باستمرار تطور التكنولوجيا العالمية ونعتمد أفضل وأسرع الأدوات واللغات لبناء وتجهيز مشاريعك بأقوى البنى الأساسية المعاصرة.",
              "We leverage top world-class tech, frameworks, and secure programming languages to construct scalable digital architectures."
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto pt-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-card border border-border rounded-xl text-xs font-bold text-muted-foreground hover:border-primary/45 hover:text-primary transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 5. CTA Final */}
      <div className="text-center space-y-6 max-w-2xl mx-auto pt-8">
        <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
          {t("هل تريد التعرف علينا ومناقشة مشروعك بشكل مباشر؟", "Want to Connect & Discuss Your Project Directly?")}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {t(
            "مهندسونا ومستشارونا دائماً جاهزون لمساعدتك في صياغة المتطلبات والتحليلات الفنية واقتراح أفضل الطرق للبدء الفوري بنجاح مشروعك.",
            "Our architects are ready to guide your tech spec formulation and recommend the fastest development roadmap."
          )}
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
          >
            <span>{t("احجز موعد نقاش فني مجاني", "Book Free Technical Discussion")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
