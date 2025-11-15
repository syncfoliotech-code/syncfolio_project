"use client"
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SmoothScroller from "@/components/smooth-scroller";
import PageLoader from "@/components/PageLoader/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>SyncfolioTech</title>
      </head>
      <body className={inter.className}>
        {loading ? (
          <PageLoader />
        ) : (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div style={{ overflow: 'hidden', width: '100%' }}>
              <SmoothScroller />
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}