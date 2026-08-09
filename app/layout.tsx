import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beprobranding.co.in"),
  title: "BEPRO | BTL Activations, Experiential Marketing & Branding Agency",
  description:
    "BEPRO helps top brands engage audiences across India through BTL activations, ATL campaigns, experiential marketing pop-ups, custom stall fabrication, and tech marketing.",
  keywords: [
    "BTL Activations Agency India",
    "BTL Marketing Agency Delhi NCR",
    "Experiential Marketing Agency India",
    "Exhibition Stall Fabrication Services",
    "Custom Stall Design & Build",
    "Tech Driven Brand Activations",
    "ATL Campaigns & Billboards",
    "Brand Promotion & Mall Activations",
    "Event Management Agency India",
    "Roadshow Marketing Activations",
  ],
  authors: [{ name: "BEPRO Agency", url: "https://www.beprobranding.co.in" }],
  creator: "BEPRO Branding",
  publisher: "BEPRO Branding",
  alternates: {
    canonical: "https://www.beprobranding.co.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "_fePa6wKGHcc3B--hIvhAcnYPyVZxlr1Xb9Fg34ALec",
  },
  openGraph: {
    title: "BEPRO | BTL Activations, Experiential Marketing & Branding Agency",
    description:
      "Engaging audiences across India through BTL activations, experiential pop-ups, custom stall fabrication, and tech-driven marketing.",
    url: "https://www.beprobranding.co.in",
    siteName: "BEPRO Branding",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BEPRO Experiential Marketing & BTL Activations Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEPRO | BTL Activations & Experiential Marketing Agency",
    description:
      "Creating experiences that build brands. Nationwide BTL activations, custom stall fabrication, and tech marketing across India.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <JsonLd />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0276LY8Q49"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0276LY8Q49');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className="antialiased text-[#202124] bg-[#F9FAFC] selection:bg-[#6C63FF]/20 selection:text-[#6C63FF]"
      >
        {children}
      </body>
    </html>
  );
}

