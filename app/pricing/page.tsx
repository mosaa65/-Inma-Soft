"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Check, HelpCircle, Zap, Shield, Sparkles, MessageSquare } from "lucide-react";

export default function Pricing() {
  const { t, isAr } = useLanguage();

  const plans = [
    {
      nameAr: "الباقة الأساسية",
      nameEn: "Basic / Quick Startup",
      price: "199",
      descAr: "مثالية للمواقع التعريفية الشخصية، صفحات الهبوط، وحلول WordPress السريعة.",
      descEn: "Ideal for personal portfolios, landing pages, and quick WordPress installations.",
      featuresAr: [
        "صفحة هبوط أو موقع تعريفي 3 صفحات",
        "تصميم متجاوب بالكامل مع الجوال والأجهزة",
        "تكامل مع نموذج تواصل أو زر واتساب",
        "إعداد الاستضافة والنطاق وشهادة SSL مجاناً",
        "تحسين أساسي لمحركات البحث (SEO)",
        "دعم فني واستشاري لمدة 30 يوم مجاناً",
      ],
      featuresEn: [
        "Up to 3 high-fidelity responsive pages",
        "Fully responsive UI design",
        "Contact form & WhatsApp integrations",
        "Domain, hosting & SSL setup support",
        "Basic search engine SEO setup",
        "30 days technical consulting support",
      ],
      ctaAr: "ابدأ مشروعك الآن",
      ctaEn: "Get Started Now",
      popular: false,
      icon: <Zap className="w-5 h-5 text-indigo-500" />,
      color: "border-border",
    },
    {
      nameAr: "الباقة المتقدمة",
      nameEn: "Professional / E-Commerce",
      price: "499",
      descAr: "الخيار الأفضل والمثالي لبناء المتاجر الإلكترونية المتكاملة وأنظمة إدارة الأعمال المتوسطة CRM.",
      descEn: "Best choice for complete e-commerce stores, custom CMS platforms, and CRM portals.",
      featuresAr: [
        "متجر إلكتروني متكامل أو نظام ويب متطور",
        "لوحة تحكم إدارية كاملة لإدارة البيانات والمنتجات",
        "ربط بوابات الدفع (مدى، فيزا) والشحن",
        "أداء فائق السرعة وتوافقية كاملة",
        "تأمين سيبراني متقدم لقواعد البيانات",
        "دعم فني متميز لمدة 90 يوم مجاناً",
      ],
      featuresEn: [
        "Full e-commerce setup or professional system",
        "Powerful dashboard for complete data control",
        "Payment gateways & shipping API integrations",
        "Ultrafast performance (Next.js/React standard)",
        "Advanced database & structural security",
        "90 days premium support with priority access",
      ],
      ctaAr: "اطلب الباقة الأكثر طلباً",
      ctaEn: "Order Best Seller Plan",
      popular: true,
      icon: <Sparkles className="w-5 h-5 text-white animate-pulse" />,
      color: "border-primary ring-2 ring-primary/20",
    },
    {
      nameAr: "الباقة المؤسسية والذكية",
      nameEn: "Enterprise / AI Native",
      price: "1199",
      descAr: "للشركات والمنصات الكبيرة التي تحتاج لأنظمة مخصصة ERP، حلول SaaS، أو دمج الذكاء الاصطناعي.",
      descEn: "Designed for enterprises needing custom ERP integrations, full SaaS, or AI models integration.",
      featuresAr: [
        "تطوير برمجي مخصص بالكامل (Next.js / Flutter)",
        "دمج وكلاء الذكاء الاصطناعي وتدريب النماذج LLM",
        "أنظمة ERP/HIS معقدة متعددة الأقسام والمستخدمين",
        "فحص ثغرات أمنية واختبار اختراق شامل للمشروع",
        "أتمتة كاملة للعمليات وتدفقات العمل",
        "اتفاقية مستوى الخدمة SLA ودعم فني 24/7 لمدة عام",
      ],
      featuresEn: [
        "Fully custom software engineering (Next/React/Flutter)",
        "Generative AI agent & LLM custom integrations",
        "Complex multi-module ERP portals & workflows",
        "Ultimate cyber security hardening & pentesting",
        "Complete enterprise process automations",
        "SLA compliance agreement & 1 year 24/7 support",
      ],
      ctaAr: "تواصل مع مهندس حلول",
      ctaEn: "Consult a Solution Engineer",
      popular: false,
      icon: <Shield className="w-5 h-5 text-indigo-500" />,
      color: "border-border",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          {t("خطط أسعار واضحة ومدروسة", "Transparent, Value-Driven Pricing")}
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {t(
            "اختر الباقة المثالية لبدء مشروعك التقني. نقدم باقات مرنة ذات قيمة عالية تضمن لك أفضل عوائد استثمارية ونمو متسارع لنشاطك التجاري.",
            "Select the perfect plan for your technical goals. We offer flexible plans centered on boosting digital productivity and solid ROI."
          )}
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-card border rounded-3xl p-8 flex flex-col justify-between relative glow-card ${plan.color} ${
              plan.popular ? "shadow-2xl shadow-primary/10" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                {t("الأكثر طلباً ومبيعاً", "BEST VALUE / POPULAR")}
              </span>
            )}

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl ${plan.popular ? "bg-primary text-white" : "bg-indigo-500/10 text-indigo-500"}`}>
                  {plan.icon}
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">{t("تبدأ من", "Starts from")}</span>
                  <div className="text-3xl font-black text-gradient-primary">
                    ${plan.price}
                    {idx === 2 && "+"}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground">{t(plan.nameAr, plan.nameEn)}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{t(plan.descAr, plan.descEn)}</p>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <div className="text-xs font-bold text-foreground uppercase tracking-wider">
                  {t("المميزات والخصائص المشمولة:", "What's Included:")}
                </div>
                <ul className="space-y-3">
                  {isAr
                    ? plan.featuresAr.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))
                    : plan.featuresEn.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href={`/contact?plan=${idx === 0 ? "basic" : idx === 1 ? "pro" : "enterprise"}`}
                className={`block w-full text-center py-4 rounded-xl font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/95 text-white shadow-primary/20 hover:shadow-primary/30"
                    : "border border-border bg-card/50 hover:bg-muted text-foreground"
                }`}
              >
                {t(plan.ctaAr, plan.ctaEn)}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Banner */}
      <div className="bg-card border border-border rounded-3xl p-8 max-w-4xl mx-auto space-y-6">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-indigo-500" />
          <span>{t("أسئلة شائعة حول خدماتنا والدفع", "Frequently Asked Questions")}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {[
            {
              qAr: "كيف تتم عملية الدفع والتعاقد؟",
              qEn: "How does the contract and payment work?",
              aAr: "نبدأ بتحليل متطلباتك وكتابة وثيقة فنية، ثم يتم الدفع على دفعات مقسمة (دفعة أولى للبدء، دفعة بعد المعاينة، ودفعة عند التسليم النهائي).",
              aEn: "We draft a specs sheet, then payments are split in stages (downpayment to start, milestone after demo, final after delivery).",
            },
            {
              qAr: "هل يمكنني إضافة ميزات أخرى لاحقاً؟",
              qEn: "Can I request custom feature additions later?",
              aAr: "بكل تأكيد، برمجياتنا تُبنى لتكون مرنة وقابلة للتوسع التام في أي وقت. يمكنك ترقية باقتك أو إضافة وحدات جديدة لاحقاً بسهولة.",
              aEn: "Absolutely. Our architectures are fully modular. You can easily upgrade modules or install new functional parts later on.",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="font-bold text-sm text-foreground">{t(item.qAr, item.qEn)}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{t(item.aAr, item.aEn)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
