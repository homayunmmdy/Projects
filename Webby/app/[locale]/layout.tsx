import type { Metadata } from "next";
import SiteConfig from "@/config/site";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import "./globals.css";
import Navbar from "@/components/layout/navbar/NavBar";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SiteConfig.siteName,
  description: SiteConfig.description,
};
interface RootLayoutPage {
  children: React.ReactNode;
  params: { locale: string };
}
export default function RootLayout({ children, params }: RootLayoutPage) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
