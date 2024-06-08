import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:'DijiAspir ',
    template:'%s | Tasarım - Seo - Medya'
  },
  description: "DijiAspir Ajans olarak Kurumsal Web Tasarım, Sosyal Medya Yönetimi, Kurumsal Kimlik Grafik Tasarımı, Dijital Performans, Medya, Dijital Reklam PR Hizmetleri Ajansı",
  icons:{
    icon:'/icon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}><Navbar/> {children} <Footer/></body>
    </html>
  );
}
