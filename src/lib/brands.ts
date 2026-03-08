export interface Brand {
  id: string;
  name: string;
  domain: string;
  role: string;
  shortDesc: string;
  fullDesc: string;
  logoImageId: string;
  linkType: "redirect" | "internal";
  features: string[];
  targetAudience: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  color: string;
}

export const brands: Brand[] = [
  {
    id: "prodory",
    name: "Prodory",
    domain: "https://prodory.com",
    role: "AI, Cloud & DevOps Solutions",
    shortDesc: "Enterprise cloud cost optimization and FinOps platform",
    fullDesc: "Prodory is AO+'s flagship SaaS platform for AI-powered cloud cost optimization. It helps enterprises manage and optimize their cloud infrastructure across AWS, Azure, and GCP with intelligent automation and predictive analytics.",
    logoImageId: "prodory-logo",
    linkType: "redirect",
    features: [
      "AI FinOps Dashboard",
      "Data FinOps Agent",
      "Kubernetes-in-a-Box",
      "Storage Autoscaler",
      "Cloud Sentinel",
      "VMware Migration Assistant"
    ],
    targetAudience: "BFSI, SaaS, Healthcare, Logistics enterprises",
    metrics: [
      { label: "Cloud Spend Managed", value: "₹100+ Cr" },
      { label: "Avg Cost Reduction", value: "30-40%" },
      { label: "Uptime SLA", value: "99.9%" }
    ],
    color: "#0B7DF0"
  },
  {
    id: "digiads",
    name: "DigiAds.click",
    domain: "https://digiads.click",
    role: "Digital Marketing Agency",
    shortDesc: "Full-service digital marketing for MSMEs",
    fullDesc: "DigiAds.click is a performance-driven digital marketing agency specializing in SEO, PPC, social media marketing, and content strategy for Indian MSMEs looking to establish and grow their online presence.",
    logoImageId: "digiads-logo",
    linkType: "redirect",
    features: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Management",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting"
    ],
    targetAudience: "Small businesses, startups, local retailers",
    metrics: [
      { label: "Clients Served", value: "200+" },
      { label: "Avg ROI", value: "4.5x" },
      { label: "Campaigns Run", value: "1000+" }
    ],
    color: "#06B6D4"
  },
  {
    id: "indombivili",
    name: "IndoMbivili.com",
    domain: "https://indombivili.com",
    role: "Real Estate Platform",
    shortDesc: "Property hunting and real estate advisory in Dombivli",
    fullDesc: "IndoMbivili.com is a hyperlocal real estate platform connecting property buyers and renters with verified listings in Dombivli and surrounding areas. Features include virtual tours, neighborhood insights, and expert advisory.",
    logoImageId: "indombivili-logo",
    linkType: "redirect",
    features: [
      "Verified Property Listings",
      "Virtual Property Tours",
      "Neighborhood Insights",
      "Expert Advisory",
      "Loan Assistance",
      "Legal Documentation"
    ],
    targetAudience: "Home buyers, renters, investors in Dombivli",
    metrics: [
      { label: "Properties Listed", value: "500+" },
      { label: "Happy Customers", value: "1000+" },
      { label: "Area Coverage", value: "Dombivli" }
    ],
    color: "#10B981"
  },
  {
    id: "palavanews",
    name: "PalavaNews.com",
    domain: "https://palavanews.com",
    role: "Hyperlocal Media",
    shortDesc: "News and updates for Palava City & Dombivli",
    fullDesc: "PalavaNews.com is a hyperlocal digital media platform delivering news, events, and community updates for residents of Palava City and Dombivli. Covering infrastructure, education, entertainment, and civic issues.",
    logoImageId: "palavanews-logo",
    linkType: "redirect",
    features: [
      "Local News Coverage",
      "Event Listings",
      "Community Forums",
      "Business Directory",
      "Classifieds",
      "Weather Updates"
    ],
    targetAudience: "Palava City and Dombivli residents",
    metrics: [
      { label: "Monthly Readers", value: "50K+" },
      { label: "Articles Published", value: "2000+" },
      { label: "Community Members", value: "25K+" }
    ],
    color: "#F59E0B"
  },
  {
    id: "satvikcloud",
    name: "SatvikCloud.com",
    domain: "https://satvikcloud.com",
    role: "Festival E-commerce",
    shortDesc: "Festival product bundles and Shubh Muhurat calendar",
    fullDesc: "SatvikCloud.com is a seasonal e-commerce platform offering curated festival product bundles, puja items, and a comprehensive Shubh Muhurat calendar for Indian festivals and auspicious occasions.",
    logoImageId: "satvikcloud-logo",
    linkType: "redirect",
    features: [
      "Festival Product Bundles",
      "Shubh Muhurat Calendar",
      "Puja Items",
      "Gift Hampers",
      "Same-Day Delivery",
      "Festival Reminders"
    ],
    targetAudience: "Households celebrating Indian festivals",
    metrics: [
      { label: "Products", value: "500+" },
      { label: "Festivals Covered", value: "25+" },
      { label: "Cities Served", value: "50+" }
    ],
    color: "#8B5CF6"
  },
  {
    id: "primesale",
    name: "PrimeSale.in",
    domain: "https://primesale.in",
    role: "E-commerce Marketplace",
    shortDesc: "Marketplace connecting sellers with buyers",
    fullDesc: "PrimeSale.in is a B2C and B2B marketplace platform connecting local sellers with buyers across India. Features include verified sellers, secure payments, logistics integration, and seller analytics.",
    logoImageId: "primesale-logo",
    linkType: "redirect",
    features: [
      "Verified Seller Network",
      "Secure Payments",
      "Logistics Integration",
      "Seller Analytics",
      "Bulk Ordering",
      "Customer Support"
    ],
    targetAudience: "Sellers and buyers across India",
    metrics: [
      { label: "Registered Sellers", value: "1000+" },
      { label: "Products", value: "10K+" },
      { label: "Cities", value: "100+" }
    ],
    color: "#EC4899"
  }
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getExternalBrands = (): Brand[] => {
  return brands.filter(brand => brand.linkType === "redirect");
};
