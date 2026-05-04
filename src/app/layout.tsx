import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://arti-6go.pages.dev'),
  title: "آرتي للخدمات البرمجية | حلول ذكية للأعمال الحديثة",
  description: "تقدم آرتي للخدمات البرمجية أنظمة ERP متميزة، وتطوير مواقع مخصصة، وتطبيقات جوال، وحلول سحابية. برمجيات مستقبلية لنمو عملك.",
  keywords: ["ERP", "تطوير برمجيات", "تطوير مواقع", "تطبيقات جوال", "حلول سحابية", "آرتي للبرمجيات"],
  authors: [{ name: "آرتي للخدمات البرمجية" }],
  openGraph: {
    title: "آرتي للخدمات البرمجية | حلول ذكية للأعمال الحديثة",
    description: "تقدم آرتي للخدمات البرمجية أنظمة ERP متميزة، وتطوير مواقع مخصصة، وتطبيقات جوال، وحلول سحابية.",
    url: "https://arti-6go.pages.dev",
    siteName: "آرتي للخدمات البرمجية",
    locale: "ar_IQ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "آرتي للخدمات البرمجية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "آرتي للخدمات البرمجية",
    description: "حلول برمجية ذكية للأعمال الحديثة",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body style={{ paddingTop: 'var(--nav-height)' }} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
