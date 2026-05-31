"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { services, categories } from "@/data/services";
import DynamicIcon from "@/components/ui/DynamicIcon";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Clock, Tag, MessageSquare } from "lucide-react";

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const { t, isAr } = useLanguage();

  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-extrabold text-foreground">{t("الخدمة المطلوبة غير متوفرة", "Service Not Found")}</h1>
        <p className="text-sm text-muted-foreground">
          {t("عذراً، لم نتمكن من العثور على الخدمة المطلوبة. قد تكون انتقلت أو تم تعديل اسمها.", "Sorry, the service you are looking for does not exist or has been renamed.")}
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg transition-all"
        >
          {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t("العودة لجميع الخدمات", "Back to all services")}</span>
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === service.category);

  // Get similar services
  const similarServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  // Custom inclusions based on Tier
  const getInclusions = (tier: string) => {
    switch (tier) {
      case "quick":
        return [
          t("تسليم سريع جداً خلال أيام معدودة", "Express delivery within a few days"),
          t("تصميم عصري ومتجاوب بالكامل", "Fully responsive and modern design"),
          t("لوحة تحكم إدارية مبسطة وسهلة", "Simplified easy-to-use admin panel"),
          t("دعم فني واستشاري مجاني لمدة شهر", "1-month free technical support"),
        ];
      case "medium":
        return [
          t("تسليم سريع خلال 7 إلى 14 يوم عمل", "Delivery within 7 to 14 business days"),
          t("تصميم مخصص يتوافق مع الهوية البصرية", "Custom layout aligned with brand identity"),
          t("لوحة تحكم كاملة لإدارة المحتوى", "Full dashboard for complete management"),
          t("تحسين أساسي لمحركات البحث SEO", "Standard SEO and speed indexing"),
          t("دعم فني كامل لمدة 3 أشهر مجاناً", "3-month free priority technical support"),
        ];
      case "strong":
        return [
          t("بناء متكامل من الصفر بأحدث الأطر", "Complete custom build with modern framework"),
          t("بنية تحتية مرنة وقاعدة بيانات قوية", "Flexible server architecture & database"),
          t("تحسين شامل للسرعة وحماية فائقة", "Maximum speed optimization & ultimate security"),
          t("تكامل كامل مع بوابات الدفع/الـ APIs", "Full integration with payment gateways/APIs"),
          t("دعم فني طارئ وضمان الجودة 6 أشهر", "6-month premium support & quality guarantee"),
        ];
      case "enterprise":
        return [
          t("هندسة برمجية متقدمة وقابلة للتوسع الهائل", "Advanced software architecture designed for massive scale"),
          t("حلول مخصصة للشركات والمنصات الكبيرة", "Highly tailored solutions for enterprises"),
          t("أمان سيبراني كامل واختبار اختراق شامل", "Premium cybersecurity & penetration testing"),
          t("أتمتة كاملة للعمليات وربط مع الأنظمة", "Process automation & deep systems integrations"),
          t("دعم فني استراتيجي 24/7 طوال العام", "24/7 strategic support and SLA warranty"),
        ];
      default:
        return [
          t("تنفيذ احترافي بالمعايير القياسية", "Professional standard execution"),
          t("دعم كامل وتعديلات مرنة", "Flexible revisions and custom additions"),
        ];
    }
  };

  const inclusions = getInclusions(service.tier);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back Button */}
      <div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t("العودة لجميع الخدمات", "Back to Services")}</span>
        </Link>
      </div>

      {/* Main Detail Content - Original Layout with Mobile Optimizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Side: Service Details (Span 2) */}
        <div className="lg:col-span-2 space-y-6 lg:space-y-8">
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <DynamicIcon name={service.icon} size={36} />
              </div>
              <div>
                <span className="text-xs text-primary font-bold">{t(category?.nameAr || "", category?.nameEn || "")}</span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mt-1">
                  {t(service.nameAr, service.nameEn)}
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t(service.descAr, service.descEn)}
            </p>
          </div>

          {/* Inclusions Card */}
          <div className="bg-card border border-border p-5 lg:p-8 rounded-3xl space-y-4 lg:space-y-6">
            <h2 className="text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-500" />
              <span>{t("ماذا تشمل هذه الخدمة؟", "What's Included in This Service?")}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span className="text-sm font-semibold text-muted-foreground leading-relaxed">{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags / Tech used */}
          <div className="space-y-3 lg:space-y-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
          </div>

          <div className="mb-5">
            <div className="text-xs text-muted-foreground mb-1">{t("نطاق السعر", "Price Range")}</div>
            <div className="text-3xl sm:text-4xl font-black text-gradient-primary">
              {service.priceMin}$ - {service.priceMax}$
              {service.pricePlus && " +"}
            </div>
          </div>

          <Link
            href={`/contact?service=${service.slug}`}
            className="block w-full text-center py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
          >
            {t("اطلب الخدمة الآن", "Order Now")}
          </Link>
        </div>
      </div>

      {/* Inclusions Card */}
      <div className="bg-card border border-border p-5 sm:p-6 rounded-3xl space-y-5">
        <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
          <span>{t("مزايا الخدمة", "Service Features")}</span>
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {inclusions.map((inc, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
              <span className="text-sm font-medium text-foreground leading-relaxed">{inc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags / Tech used */}
      <div className="bg-card border border-border p-5 sm:p-6 rounded-3xl space-y-4">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Tag className="w-4 h-4 text-indigo-500" />
          {t("التقنيات المستخدمة", "Technologies Used")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-muted border border-border rounded-lg text-xs font-medium text-muted-foreground flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Custom Requirements Card */}
      <div className="bg-gradient-to-tr from-indigo-600/5 to-cyan-500/5 border border-border p-5 sm:p-6 rounded-3xl space-y-3">
        <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-500" />
          <span>{t("تخصيص الخدمة؟", "Custom Requirements?")}</span>
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t(
            "يمكننا تخصيص الخدمة حسب احتياجاتك. تواصل معنا لمناقشة التفاصيل.",
            "We can customize the service to your needs. Contact us to discuss details."
          )}
        </p>
        <Link
          href={`/contact?service=${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
        >
          {t("تواصل معنا", "Contact Us")} →
        </Link>
      </div>
    </div>

      {/* Similar Services - Horizontal Scroll on Mobile */ }
  {
    similarServices.length > 0 && (
      <div className="space-y-6 pt-6 border-t border-border">
        <h2 className="text-lg sm:text-2xl font-extrabold text-foreground">
          {t("خدمات مشابهة", "Similar Services")}
        </h2>

        {/* Horizontal Scroll for Mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
          {similarServices.map((sim) => (
            <div
              key={sim.id}
              className="bg-card border border-border p-5 rounded-2xl glow-card flex flex-col justify-between min-w-[280px] sm:min-w-0 sm:flex-1"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-xl">
                    <DynamicIcon name={sim.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground">
                    {sim.priceMin}$ - {sim.priceMax}$
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground line-clamp-2">
                  {t(sim.nameAr, sim.nameEn)}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {t(sim.descAr, sim.descEn)}
                </p>
              </div>
              <div className="pt-3 border-t border-border mt-4">
                <Link
                  href={`/services/${sim.slug}`}
                  className="flex items-center justify-between text-xs font-bold text-primary"
                >
                  <span>{t("عرض التفاصيل", "View Details")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
    </div >
  );
}
