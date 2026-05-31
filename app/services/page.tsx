"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { categories, services } from "@/data/services";
import DynamicIcon from "@/components/ui/DynamicIcon";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowRight, Grid, List, CheckCircle } from "lucide-react";

function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, isAr } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Read URL query parameter for category if exists
  useEffect(() => {
    const catParam = searchParams.get("category");
    if (catParam) {
      const match = categories.find((c) => c.slug === catParam);
      if (match) {
        setSelectedCategory(match.id);
      }
    }
  }, [searchParams]);

  // Filter services based on category & search query
  const filteredServices = services.filter((service) => {
    const matchCategory = selectedCategory === "all" || service.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchSearch =
      searchQuery === "" ||
      service.nameAr.toLowerCase().includes(searchLower) ||
      service.nameEn.toLowerCase().includes(searchLower) ||
      service.descAr.toLowerCase().includes(searchLower) ||
      service.descEn.toLowerCase().includes(searchLower) ||
      service.tags.some((tag) => tag.toLowerCase().includes(searchLower));

    return matchCategory && matchSearch;
  });

  const activeCategoryDetails = categories.find((c) => c.id === selectedCategory);

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "quick":
        return { textAr: "سريع", textEn: "Quick", color: "bg-blue-500/10 text-blue-500 border-blue-500/10" };
      case "medium":
        return { textAr: "متوسط", textEn: "Medium", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/10" };
      case "strong":
        return { textAr: "متقدم", textEn: "Strong", color: "bg-purple-500/10 text-purple-500 border-purple-500/10" };
      case "enterprise":
        return { textAr: "ضخم / مؤسسي", textEn: "Enterprise", color: "bg-rose-500/10 text-rose-500 border-rose-500/10" };
      default:
        return { textAr: "أساسي", textEn: "Basic", color: "bg-muted text-muted-foreground" };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-6 sm:space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {t("دليل الخدمات التقنية المتميزة", "Our Premium Tech Services Guide")}
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed px-2">
          {t(
            "تصفح أكثر من 100 خدمة تقنية مصممة بذكاء واحترافية فائقة لتلبية كافة متطلبات التحول الرقمي لنشاطك بأقل التكاليف وبأعلى جودة.",
            "Explore over 100 expert technical services built to power your digital transformations with high standards and flexible plans."
          )}
        </p>
      </div>

      {/* Control Panel: Search & Views - Mobile Optimized */}
      <div className="bg-card border border-border p-3 sm:p-4 rounded-2xl flex flex-col gap-3 sm:gap-4 shadow-sm">
        {/* Search - Full width on mobile */}
        <div className="relative w-full">
          <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground ${isAr ? "right-3 sm:right-4" : "left-3 sm:left-4"}`} />
          <input
            type="text"
            placeholder={t("ابحث عن خدمة، تقنية، أو كلمة مفتاحية...", "Search for a service, tag, or tech...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full py-3 sm:py-2.5 px-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all ${isAr ? "pr-10 sm:pr-11 pl-3 sm:pl-4" : "pl-10 sm:pl-11 pr-3 sm:pr-4"
              }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted-foreground hover:text-muted transition-all ${isAr ? "left-2" : "right-2"
                }`}
            >
              ×
            </button>
          )}
        </div>

        {/* Controls Row - Stacked on mobile */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Results Count - Pill style on mobile */}
          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-xs font-semibold text-muted-foreground">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{t(`${filteredServices.length} خدمة`, `${filteredServices.length} services`)}</span>
            </span>

            {/* View Toggle - Larger touch targets on mobile */}
            <div className="bg-muted border border-border rounded-lg p-1 flex items-center self-start sm:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${viewMode === "grid"
                  ? "bg-white dark:bg-card text-primary shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Grid className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">{t("شبكة", "Grid")}</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${viewMode === "list"
                  ? "bg-white dark:bg-card text-primary shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <List className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">{t("قائمة", "List")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter - Horizontal Scroll on Mobile */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
            <span className="w-1 h-4 sm:h-5 bg-primary rounded-full"></span>
            {t("التصنيفات", "Categories")}
          </h2>
          {selectedCategory !== "all" && (
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
            >
              <span>✕</span>
              {t("إلغاء الكل", "Clear all")}
            </button>
          )}
        </div>

        {/* Horizontal Scroll Container for Mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap sm:pb-0 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-xl border transition-all whitespace-nowrap shrink-0 ${selectedCategory === "all"
              ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-105"
              : "bg-card border-border hover:bg-muted hover:border-primary/30 text-muted-foreground hover:text-foreground"
              }`}
          >
            {t("الكل", "All")}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-4 py-2 text-xs font-bold rounded-xl border transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${selectedCategory === cat.id
                ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-105"
                : "bg-card border-border hover:bg-muted hover:border-primary/30 text-muted-foreground hover:text-foreground"
                }`}
            >
              <DynamicIcon name={cat.icon} size={14} />
              <span className="max-w-[120px] sm:max-w-none truncate">{t(cat.nameAr, cat.nameEn)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Banner */}
      {activeCategoryDetails && (
        <div className="bg-card border border-border p-6 rounded-2xl flex items-start gap-4">
          <div className={`p-4 bg-muted rounded-xl ${activeCategoryDetails.color} shrink-0`}>
            <DynamicIcon name={activeCategoryDetails.icon} size={28} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-foreground">{t(activeCategoryDetails.nameAr, activeCategoryDetails.nameEn)}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t(activeCategoryDetails.descAr, activeCategoryDetails.descEn)}</p>
          </div>
        </div>
      )}

      {/* Services Results */}
      {filteredServices.length === 0 ? (
        <div className="text-center py-20 bg-card border border-border rounded-3xl space-y-4">
          <SlidersHorizontal className="w-12 h-12 text-muted-foreground mx-auto animate-pulse" />
          <h3 className="text-lg font-bold text-foreground">{t("لا توجد خدمات تطابق خيارات البحث", "No Services Found")}</h3>
          <p className="text-xs text-muted-foreground">{t("حاول إدخال كلمات مفتاحية أخرى أو تغيير خيارات التصنيف.", "Try searching another phrase or resetting filters.")}</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredServices.map((service) => {
            const tierInfo = getTierBadge(service.tier);
            return (
              <div
                key={service.id}
                className="bg-card border border-border rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col justify-between glow-card relative overflow-hidden"
              >
                <div className="space-y-2 sm:space-y-3">
                  {/* Icon & Tier Badge */}
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="p-2 sm:p-2.5 bg-indigo-500/10 rounded-xl text-indigo-500 shrink-0">
                      <DynamicIcon name={service.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-bold whitespace-nowrap shrink-0 ${tierInfo.color}`}>
                      {t(tierInfo.textAr, tierInfo.textEn)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground leading-tight line-clamp-2">
                    {t(service.nameAr, service.nameEn)}
                  </h3>

                  {/* Description - Hidden on very small mobile, shown on larger screens */}
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2 hidden sm:block">
                    {t(service.descAr, service.descEn)}
                  </p>

                  {/* Tags - Limited on mobile */}
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {service.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {service.tags.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                        +{service.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="pt-3 border-t border-border mt-3 sm:mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-muted-foreground">{t("نطاق السعر", "Price Range")}</div>
                      <div className="text-xs sm:text-sm font-extrabold text-gradient-primary">
                        {service.priceMin}$ - {service.priceMax}$
                        {service.pricePlus && " +"}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-2 py-2 border border-border hover:bg-muted hover:border-primary/30 text-foreground text-[10px] sm:text-xs font-bold rounded-xl text-center transition-all flex items-center justify-center gap-1"
                    >
                      <span>{t("التفاصيل", "Details")}</span>
                    </Link>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="px-2 py-2 bg-primary hover:bg-primary/90 text-white text-[10px] sm:text-xs font-bold rounded-xl text-center shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-1"
                    >
                      <span>{t("اطلب", "Order")}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {filteredServices.map((service) => {
            const tierInfo = getTierBadge(service.tier);
            return (
              <div
                key={service.id}
                className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex flex-col gap-3 glow-card"
              >
                {/* Header: Icon, Title, Tier */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-500 shrink-0">
                    <DynamicIcon name={service.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-sm sm:text-lg font-bold text-foreground leading-tight line-clamp-2">
                        {t(service.nameAr, service.nameEn)}
                      </h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold whitespace-nowrap shrink-0 ${tierInfo.color}`}>
                        {t(tierInfo.textAr, tierInfo.textEn)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {t(service.descAr, service.descEn)}
                    </p>
                  </div>
                </div>

                {/* Tags - Limited on mobile */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                      +{service.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer: Price & Actions */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                  <div>
                    <div className="text-[10px] text-muted-foreground">{t("نطاق السعر", "Price Range")}</div>
                    <div className="text-sm font-extrabold text-gradient-primary">
                      {service.priceMin}$ - {service.priceMax}$
                      {service.pricePlus && " +"}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-3 py-2 border border-border hover:bg-muted hover:border-primary/30 text-foreground text-xs font-bold rounded-xl transition-all"
                    >
                      {t("التفاصيل", "Details")}
                    </Link>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="px-3 py-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-xl shadow-md shadow-primary/20 transition-all"
                    >
                      {t("اطلب", "Order")}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Services...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
