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
