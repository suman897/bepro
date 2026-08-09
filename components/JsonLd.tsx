import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.beprobranding.co.in/#organization",
    name: "BEPRO Branding",
    alternateName: "BEPRO Experiential Marketing & BTL Agency",
    url: "https://www.beprobranding.co.in",
    logo: "https://www.beprobranding.co.in/logo-new-theme.png",
    image: "https://www.beprobranding.co.in/og-image.png",
    description:
      "BEPRO helps top brands engage audiences across India through BTL activations, ATL campaigns, experiential marketing pop-ups, custom stall fabrication, and tech marketing.",
    telephone: "+91-7875835070",
    email: "info@beprobranding.co.in",
    sameAs: [
      "https://www.linkedin.com/company/bepro-branding/",
      "https://www.instagram.com/bepro_branding",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://www.beprobranding.co.in/#localbusiness",
    name: "BEPRO Branding",
    alternateName: "BEPRO Experiential Marketing & BTL Agency",
    url: "https://www.beprobranding.co.in",
    logo: "https://www.beprobranding.co.in/logo-new-theme.png",
    image: "https://www.beprobranding.co.in/og-image.png",
    description:
      "BEPRO is a leading BTL activation, experiential marketing, stall fabrication, and tech-driven branding agency executing nationwide campaigns across India.",
    telephone: "+91-7875835070",
    email: "info@beprobranding.co.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi NCR",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6139",
      longitude: "77.2090",
    },
    areaServed: [
      { "@type": "City", name: "Delhi NCR" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Pune" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.linkedin.com/company/bepro-branding/",
      "https://www.instagram.com/bepro_branding",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brand Activation & Experiential Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BTL Activations",
            description:
              "On-ground mall activations, transit hub takeovers, and interactive product sampling across Indian metro cities.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ATL Campaigns",
            description:
              "High-impact billboard advertising, outdoor media rollouts, and broadcast integrations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exhibition Stall Fabrication",
            description:
              "3D spatial design, timber, metal and modular stall construction for trade shows and corporate expos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tech Marketing & AR/VR Activations",
            description:
              "Interactive touchscreens, motion-sensor gamification, AI photobooths, and RFID lead capture setups.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Experiential Marketing",
            description:
              "Immersive multi-sensory brand pop-ups, mobile roadshows, and launch event management.",
          },
        },
      ],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.beprobranding.co.in/#website",
    url: "https://www.beprobranding.co.in",
    name: "BEPRO Branding | Experiential Marketing & BTL Agency",
    publisher: {
      "@id": "https://www.beprobranding.co.in/#organization",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does BEPRO specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BEPRO specializes in BTL activations, experiential marketing, custom exhibition stall fabrication, and tech-driven marketing solutions that turn audience attention into measurable brand growth.",
        },
      },
      {
        "@type": "Question",
        name: "Which cities in India does BEPRO operate in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BEPRO executes nationwide campaigns across India, with primary execution hubs in Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, Ahmedabad, Kolkata, and Chennai.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical BEPRO project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Setup timelines range from 48 hours for rapid pop-ups and mall activations to 2-3 weeks for large-scale custom exhibition stall fabrication and multi-city roadshows.",
        },
      },
      {
        "@type": "Question",
        name: "Can BEPRO integrate technology into physical setups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! BEPRO embeds cutting-edge brand tech including AI photobooths, AR/VR product demos, touchscreen gamification, and RFID lead capture systems into physical event spaces.",
        },
      },
      {
        "@type": "Question",
        name: "What is required to get started with BEPRO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get started, clients simply share campaign goals, target locations, estimated budget, and timeline. The BEPRO team prepares a customized proposal and 3D concept layout within 24-48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "How does BEPRO ensure execution quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BEPRO provides turnkey end-to-end management with dedicated on-ground supervisors, stringent fabrication quality checks, real-time footfall tracking, and post-campaign performance reporting.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
