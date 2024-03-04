import Providers from "@/components/Providers";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codepen v2",
  description: "Test HTML, CSS and JS code with live preview.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + "min-h-screen transition-colors"}>
        <Providers>
          <div className="main antialiased dark:bg-gray-900/25 "></div>

          <main className="app">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
