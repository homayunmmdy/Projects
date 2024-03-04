import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeStart",
  description: "Start your new feature from here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-full bg-cover bg-center bg-no-repeat`} style={{backgroundImage: "url('/bg.png')"}}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
