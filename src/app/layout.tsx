import type { Metadata } from "next";
import localFont from "next/font/local";
import { AnalyticsEvents } from "@/components/layout/AnalyticsEvents";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = localFont({src: "../../public/fonts/geist-latin.woff2", variable: "--font-geist-sans", display:"swap"});
const geistMono = localFont({src: "../../public/fonts/geist-mono-latin.woff2", variable: "--font-geist-mono", display:"swap"});

export const metadata: Metadata = {
  title: {
    default: "ATC Digital Labs | AI, Software & Enterprise Technology Solutions",
    template: "%s | ATC Digital Labs",
  },
  description:
    "ATC Digital Labs builds AI systems, enterprise software, integrations and managed technology services that help organizations automate operations, connect systems and make better use of their data.",
  openGraph: {
    title: "ATC Digital Labs | AI, Software & Enterprise Technology Solutions",
    description:
      "ATC Digital Labs builds AI systems, enterprise software, integrations and managed technology services that help organizations automate operations, connect systems and make better use of their data.",
    siteName: "ATC Digital Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATC Digital Labs | AI, Software & Enterprise Technology Solutions",
    description:
      "ATC Digital Labs builds AI systems, enterprise software, integrations and managed technology services that help organizations automate operations, connect systems and make better use of their data.",
  },
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
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <AnalyticsEvents />
        <main id="main-content" tabIndex={-1} className="flex-1 pt-[var(--nav-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
