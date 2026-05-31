import type { Metadata } from "next";
import { Tajawal, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-tajawal",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "إنما سوفت | حلول تقنية متكاملة وذكية - Inma Soft",
  description: "شركة إنما سوفت تقدم حلولاً تقنية متكاملة من تصميم مواقع الويب، المتاجر الإلكترونية، الأنظمة الإدارية ERP/CRM، حلول الذكاء الاصطناعي، الأمن السيبراني، وأتمتة العمليات.",
  keywords: ["إنما سوفت", "Inma Soft", "برمجة مواقع", "متاجر الكترونية", "أنظمة ERP", "ذكاء اصطناعي", "أتمتة", "أمن سيبراني"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${plusJakartaSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground bg-mesh-glow bg-no-repeat bg-cover">
        <LanguageProvider>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-20">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
