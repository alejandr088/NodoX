import { absoluteUrl, SITE_NAME } from "../config/seo";

const contactPoints = [
  {
    "@type": "ContactPoint",
    telephone: "+598-91-741-147",
    contactType: "customer support",
    areaServed: "UY",
    availableLanguage: ["es", "en"],
  },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/nodoxred.png"),
    email: "nodoxsolutions@gmail.com",
    contactPoint: contactPoints,
    sameAs: [
      "https://instagram.com/nodoxuy.reparacionpc",
      "https://facebook.com/nodoxsolutionsuy",
      "https://www.tiktok.com/@nodoxuy",
      "https://threads.com/@nodoxuy.reparacionpc",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    name: SITE_NAME,
    image: absoluteUrl("/nodoxred.png"),
    url: absoluteUrl("/"),
    telephone: "+598-91-741-147",
    email: "nodoxsolutions@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Solano Lopez 1740A",
      addressLocality: "Montevideo",
      addressCountry: "UY",
    },
    areaServed: ["Montevideo", "Uruguay"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    sameAs: [
      "https://instagram.com/nodoxuy.reparacionpc",
      "https://facebook.com/nodoxsolutionsuy",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/products")}?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    areaServed: {
      "@type": "Country",
      name: "Uruguay",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(path),
      servicePhone: "+598-91-741-147",
    },
  };
}
