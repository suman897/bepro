import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
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
  title: "BEPRO | Creating Experiences That Build Brands",
  description:
    "BEPRO helps brands engage audiences through ATL, BTL, experiential activations, fabrication and technology-driven marketing.",
  keywords: [
    "BTL Activations",
    "ATL Campaigns",
    "Brand Promotions",
    "Stall Fabrication",
    "Tech Marketing",
    "Experiential Marketing",
    "Event Management",
  ],
  authors: [{ name: "BEPRO Agency" }],
  verification: {
    google: "_fePa6wKGHcc3B--hIvhAcnYPyVZxlr1Xb9Fg34ALec",
  },
  openGraph: {
    title: "BEPRO | Creating Experiences That Build Brands",
    description:
      "Engaging audiences through ATL, BTL, experiential activations, stall fabrication and tech marketing.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
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
      <body
        suppressHydrationWarning
        className="antialiased text-[#202124] bg-[#F9FAFC] selection:bg-[#6C63FF]/20 selection:text-[#6C63FF]"
      >
        {children}
      </body>
    </html>
  );
}
