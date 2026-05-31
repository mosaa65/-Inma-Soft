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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 space-y-6 sm:space-y-8 lg:space-y-12">
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

      {/* ========== MOBILE LAYOUT (Modern Stacked - Enhanced) ========== */}
      <div className="lg:hidden space-y-5">
        {/* Hero Section - Enhanced */}
        <div className="bg-card border border-border p-5 rounded-3xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3.5 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl text-indigo-500 shrink-0 border border-indigo-500/20">
              <DynamicIcon name={service.icon} size={32} className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                {t(category?.nameAr || "", category?.nameEn || "")}
              </span>
              <h1 className="text-xl font-extrabold text-foreground leading-tight">
                {t(service.nameAr, service.nameEn)}
              </h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            {t(service.descAr, service.descEn)}
          </p>
        </div>

        {/* Price Box - Enhanced Premium Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNjAgTDYwIDAgTDU5IDAgTDQgNTZ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

          <div className="relative p-6 space-y-5">
            {/* Tier Badge */}
            <div className="flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/30">
                {t(`باقة ${service.tier}`, `${service.tier} plan`)}
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Clock className="w-3.5 h-3.5 text-white/80" />
                <span className="text-xs text-white/90 font-medium">
                  {service.tier === "quick" && "3-5 أيام"}
                  {service.tier === "medium" && "7-14 يوم"}
                  {service.tier === "strong" && "14-30 يوم"}
                  {service.tier === "enterprise" && "30+ يوم"}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-center py-2">
              <div className="text-white/70 text-xs mb-1 font-medium">{t("نطاق السعر", "Price Range")}</div>
              <div className="text-4xl font-black text-white tracking-tight">
                {service.priceMin}$<span className="text-2xl text-white/70"> - {service.priceMax}$</span>
                {service.pricePlus && <span className="text-xl">+</span>}
              </div>
            </div>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span className="text-[10px] text-white/90 font-medium">{t("ضمان 100%", "100% Guarantee")}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-300" />
                <span className="text-[10px] text-white/90 font-medium">{t("جودة عالية", "High Quality")}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={`/contact?service=${service.slug}`}
              className="block w-full text-center py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg transition-all active:scale-[0.97] hover:shadow-xl"
            >
              {t("اطلب الخدمة الآن", "Order Now")}
            </Link>

            {/* Disclaimer */}
            <p className="text-[10px] text-white/60 text-center leading-relaxed">
              {t("* الأسعار تقريبية حسب حجم المشروع", "* Prices are approximate based on project scope")}
            </p>
          </div>
        </div>

        {/* Inclusions Card - Enhanced */}
        <div className="bg-card border border-border p-5 rounded-3xl shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <div className="p-1.5 bg-emerald-500/10 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <span>{t("مزايا الخدمة", "Service Features")}</span>
          </h2>

          <div className="grid grid-cols-1 gap-2.5">
            {inclusions.map((inc, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground leading-relaxed">{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags / Tech used - Enhanced */}
        <div className="bg-card border border-border p-5 rounded-3xl shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <div className="p-1.5 bg-indigo-500/10 rounded-lg">
              <Tag className="w-4 h-4 text-indigo-500" />
            </div>
            {t("التقنيات المستخدمة", "Technologies Used")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-xl text-xs font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Custom Requirements Card - Enhanced */}
        <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 p-5 rounded-3xl space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/20 rounded-xl">
              <MessageSquare className="w-5 h-5 text-indigo-500" />
            </div>
            <span className="font-bold text-foreground">{t("تخصيص الخدمة؟", "Custom Requirements?")}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t(
              "يمكننا تخصيص الخدمة حسب احتياجاتك. تواصل معنا لمناقشة التفاصيل والحصول على عرض سعر دقيق.",
              "We can customize the service to your needs. Contact us to discuss details and get an accurate quote."
            )}
          </p>
          <Link
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-500 hover:text-indigo-600 transition-colors"
          >
            {t("تواصل معنا", "Contact Us")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ========== DESKTOP LAYOUT (Original Grid) ========== */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-12">
        {/* Left Side: Service Details (Span 2) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-500">
                <DynamicIcon name={service.icon} size={36} />
              </div>
              <div>
                <span className="text-xs text-primary font-bold">{t(category?.nameAr || "", category?.nameEn || "")}</span>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-1">
                  {t(service.nameAr, service.nameEn)}
                </h1>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(service.descAr, service.descEn)}
            </p>
          </div>

          {/* Inclusions Card */}
          <div className="bg-card border border-border p-8 rounded-3xl space-y-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-500" />
              <span>{t("ماذا تشمل هذه الخدمة؟", "What's Included in This Service?")}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span className="text-sm font-semibold text-muted-foreground leading-relaxed">{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags / Tech used */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
              {t("التقنيات وأدوات التنفيذ", "Technologies & Implementation Tools")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-card border border-border rounded-xl text-xs font-bold text-muted-foreground flex items-center gap-1.5"
                >
                  <Tag className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Price Box & CTA */}
        <div className="space-y-6">
          <div className="bg-card border border-border p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />

            <div className="text-center space-y-2">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider">
                {t(`باقة ${service.tier}`, `${service.tier} plan`)}
              </span>
              <div className="text-xs text-muted-foreground pt-4">{t("نطاق السعر المتوقع", "Estimated price range")}</div>
              <div className="text-3xl lg:text-4xl font-black text-gradient-primary">
                {service.priceMin}$ - {service.priceMax}$
                {service.pricePlus && " +"}
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {t(
                  "* الأسعار تقريبية وتعتمد على حجم المتطلبات البرمجية والتحليلات الخاصة بمشروعك.",
                  "* Prices are approximate and scale based on project complexity and core specifications."
                )}
              </p>
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-500 shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground">{t("مدة التنفيذ المتوقعة", "Estimated Timeline")}</div>
                  <div className="text-sm font-bold text-foreground">
                    {service.tier === "quick" && t("3 - 5 أيام عمل", "3 - 5 business days")}
                    {service.tier === "medium" && t("7 - 14 يوم عمل", "7 - 14 business days")}
                    {service.tier === "strong" && t("14 - 30 يوم عمل", "14 - 30 business days")}
                    {service.tier === "enterprise" && t("30+ يوم عمل (حسب النطاق)", "30+ business days")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground">{t("الأمان والجودة", "Security & SLA")}</div>
                  <div className="text-sm font-bold text-foreground">{t("ضمان أمان سيبراني بنسبة 100%", "100% Secure & SLA Guaranteed")}</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="block w-full text-center py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
              >
                {t("اطلب هذه الخدمة الآن", "Order This Service Now")}
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-indigo-600/5 to-cyan-500/5 border border-border p-6 rounded-3xl space-y-4">
            <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-500" />
              <span>{t("هل لديك متطلبات مخصصة؟", "Have Custom Requirements?")}</span>
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(
                "نحن نصمم ونطور الحلول البرمجية خصيصاً لتناسب طبيعة أعمالك. تواصل معنا لمناقشة المتطلبات الفنية والحصول على عرض سعر مفصل ومخصص مجاناً.",
                "We tailor technical solutions to fit your exact business goals. Contact us for a detailed technical analysis and free direct estimate."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Similar Services - Both Mobile and Desktop */}
      {similarServices.length > 0 && (
        <div className="space-y-6 lg:space-y-8 pt-6 lg:pt-12 border-t border-border">
          <h2 className="text-xl lg:text-2xl font-extrabold text-foreground">{t("خدمات مشابهة قد تهمك", "Similar Services You Might Need")}</h2>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 -mx-3 px-3 scrollbar-hide">
            {similarServices.map((sim) => (
              <div
                key={sim.id}
                className="bg-card border border-border p-5 rounded-2xl glow-card flex flex-col justify-between min-w-[280px]"
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

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {similarServices.map((sim) => (
              <div
                key={sim.id}
                className="bg-card border border-border p-6 rounded-2xl glow-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-500 rounded-xl w-fit">
                    <DynamicIcon name={sim.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">{t(sim.nameAr, sim.nameEn)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{t(sim.descAr, sim.descEn)}</p>
                </div>
                <div className="pt-6 border-t border-border mt-6 flex items-center justify-between">
                  <Link
                    href={`/services/${sim.slug}`}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    {t("التفاصيل", "View Details")}
                  </Link>
                  <span className="text-xs font-bold text-gradient-primary">
                    {sim.priceMin}$ - {sim.priceMax}$
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}