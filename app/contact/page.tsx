"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Loader2 } from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const { t, isAr } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "general",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Pre-fill fields based on search parameters
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const planParam = searchParams.get("plan");

    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    } else if (planParam) {
      setFormData((prev) => ({ ...prev, service: `plan-${planParam}` }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "general",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          {t("تواصل معنا وابدأ مشروعك اليوم", "Contact Us & Launch Today")}
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {t(
            "تواصل مع مستشارينا وفريقنا الهندسي للحصول على تحليل تقني وتصميم خطة عمل مجانية بالكامل تناسب متطلبات نشاطك.",
            "Connect with our solutions architects to map out your specifications and receive a free technical estimate."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Column 1: Contact Details (1 col) */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">{t("معلومات الاتصال المباشر", "Direct Contact channels")}</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(
                "نحن دائماً متواجدون للرد على استفساراتك الفنية واستشاراتك المجانية على مدار الساعة.",
                "We are always ready to answer your technical questions and host free consulting calls 24/7."
              )}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl glow-card">
              <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-muted-foreground">{t("راسلنا عبر البريد الإلكتروني", "Email Address")}</div>
                <a href="mailto:info@inmasoft.com" className="text-sm font-bold hover:text-primary transition-colors">
                  info@inmasoft.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl glow-card">
              <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-muted-foreground">{t("اتصل بنا مباشرة", "Phone Support")}</div>
                <a href="tel:+966500000000" className="text-sm font-bold hover:text-primary transition-colors" dir="ltr">
                  +966 50 000 0000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl glow-card">
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl mt-0.5">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-muted-foreground">{t("تواصل معنا عبر واتساب", "WhatsApp direct")}</div>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-500 hover:text-emerald-400 transition-colors"
                  dir="ltr"
                >
                  +966 50 000 0000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl glow-card">
              <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-muted-foreground">{t("موقعنا الجغرافي", "Main HQ Office")}</div>
                <div className="text-sm font-bold text-foreground">
                  {t("المملكة العربية السعودية، الرياض", "Riyadh, Saudi Arabia")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Contact Form (2 cols) */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border p-6 sm:p-10 rounded-3xl shadow-xl relative">
            {success ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">{t("تم إرسال طلبك بنجاح!", "Your Request Sent Successfully!")}</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {t(
                    "شكراً لتواصلك مع إنما سوفت. تم استلام تفاصيل مشروعك وسيقوم أحد مهندسينا بالتواصل معك في غضون 24 ساعة لمناقشة المتطلبات الفنية.",
                    "Thank you for contacting Inma Soft. One of our system engineers will get in touch with you within 24 hours to schedule a free call."
                  )}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all"
                >
                  {t("إرسال رسالة أخرى", "Send another message")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-bold text-foreground mb-4">{t("نموذج طلب مناقشة مشروع", "Request a Technical Estimate")}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase">{t("الاسم الكامل", "Full Name")}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("ادخل اسمك هنا", "Enter your name")}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase">{t("البريد الإلكتروني", "Email Address")}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase">{t("رقم الجوال", "Phone Number")}</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 50 000 0000"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all text-left"
                      dir="ltr"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase">{t("اسم الشركة أو الجهة", "Company / Organization")}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t("اسم شركتك (اختياري)", "Your company name (Optional)")}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                {/* Service Type Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase">{t("نوع الخدمة المطلوبة", "Service Category")}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all"
                  >
                    <option value="general">{t("استشارة فنية عامة", "General Technical Discussion")}</option>
                    <option value="corporate-website">{t("موقع تعريفي للشركة", "Corporate / Business Website")}</option>
                    <option value="ecommerce-standard">{t("متجر إلكتروني متكامل", "E-Commerce Online Store")}</option>
                    <option value="erp">{t("نظام إدارة الموارد ERP", "Enterprise ERP Portal")}</option>
                    <option value="crm">{t("نظام إدارة العملاء CRM", "Client CRM Portal")}</option>
                    <option value="ai-chatbot">{t("حلول ووكلاء الذكاء الاصطناعي", "AI Assistants & Chatbots")}</option>
                    <option value="security-hardening">{t("الأمن السيبراني وتقوية الحماية", "Cybersecurity Audit & Hardening")}</option>
                    <option value="plan-basic">{t("طلب الباقة الأساسية ($199)", "Order Basic Plan ($199)")}</option>
                    <option value="plan-pro">{t("طلب الباقة المتقدمة ($499)", "Order Professional Plan ($499)")}</option>
                    <option value="plan-enterprise">{t("طلب الباقة المؤسسية ($1199+)", "Order Enterprise Plan ($1199+)")}</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase">{t("تفاصيل ومتطلبات مشروعك", "Project Details & Specs")}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t(
                      "اشرح لنا فكرتك أو أهداف مشروعك والخصائص التقنية التي ترغب بإضافتها...",
                      "Explain your technical goals, features, or preferred programming tools..."
                    )}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t("جاري إرسال طلبك...", "Sending estimate request...")}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t("أرسل الطلب واحصل على استشارة", "Send Request & Get Estimate")}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Contact...</div>}>
      <ContactContent />
    </Suspense>
  );
}
