import { useEffect } from "react";
import { siteConfig } from "@/lib/site";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
}

const SEO = ({
  title,
  description = siteConfig.shortDesc,
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
  structuredData
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} - ${siteConfig.tagline}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const metaTags = {
      "description": description,
      "og:title": fullTitle,
      "og:description": description,
      "og:image": ogImage,
      "og:type": "website",
      "og:site_name": siteConfig.name,
      "twitter:card": "summary_large_image",
      "twitter:title": fullTitle,
      "twitter:description": description,
      "twitter:image": ogImage
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      // Check for existing tag
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        if (name.startsWith("og:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    });

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Robots
    if (noIndex) {
      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement("meta");
        robots.setAttribute("name", "robots");
        document.head.appendChild(robots);
      }
      robots.setAttribute("content", "noindex, nofollow");
    }

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Cleanup is optional - meta tags will be overwritten on next render
    };
  }, [fullTitle, description, canonical, ogImage, noIndex, structuredData]);

  return null;
};

// Default structured data for Organization
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.legalName,
  "alternateName": siteConfig.name,
  "url": "https://aoplus.in",
  "logo": "https://aoplus.in/logo.png",
  "description": siteConfig.shortDesc,
  "foundingDate": siteConfig.foundingYear.toString(),
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.street,
    "addressLocality": siteConfig.address.city,
    "addressRegion": siteConfig.address.state,
    "postalCode": siteConfig.address.pincode,
    "addressCountry": siteConfig.address.country
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": siteConfig.email,
    "contactType": "customer service"
  },
  "sameAs": [
    siteConfig.social.twitter,
    siteConfig.social.linkedin
  ]
};

// Website structured data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.name,
  "url": "https://aoplus.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://aoplus.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default SEO;
