import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATCDL — Digital Engineering & AI Solutions",
  description:
    "ATCDL (Azaan Trading Contracting Digital Lab) builds AI systems, business software, automation platforms, and digital products for organizations with complex operational needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: `[data-reveal]{opacity:1 !important;transform:none !important;}`,
            }}
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Navbar />
        <main className="flex-1 pt-[var(--nav-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
