import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "آرتي للخدمات البرمجية | حلول ذكية للأعمال الحديثة",
  description: "تقدم آرتي للخدمات البرمجية أنظمة ERP متميزة، وتطوير مواقع مخصصة، وتطبيقات جوال، وحلول سحابية. برمجيات مستقبلية لنمو عملك.",
  keywords: ["ERP", "تطوير برمجيات", "تطوير مواقع", "تطبيقات جوال", "حلول سحابية", "آرتي للبرمجيات"],
  authors: [{ name: "آرتي للخدمات البرمجية" }],
  openGraph: {
    title: "آرتي للخدمات البرمجية",
    description: "حلول برمجية ذكية للأعمال الحديثة",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ paddingTop: 'var(--nav-height)' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
