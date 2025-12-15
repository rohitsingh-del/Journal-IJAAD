import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "International Journal of Applied and Allied Disciplines (IJAAD)",
  description: "A peer-reviewed, open-access journal dedicated to advancing research across applied sciences, engineering, technology, social sciences, management, humanities, and allied disciplines.",
  keywords: ["IJAAD", "applied sciences", "engineering", "technology", "social sciences", "management", "humanities", "research journal", "peer-reviewed", "open access"],
  authors: [{ name: "IJAAD Editorial Board" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "International Journal of Applied and Allied Disciplines",
    description: "Peer-reviewed, open-access journal for applied research across multiple disciplines",
    url: "https://ijaad.org",
    siteName: "IJAAD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IJAAD - International Journal of Applied and Allied Disciplines",
    description: "Peer-reviewed, open-access journal for applied research",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
