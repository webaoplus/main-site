export const siteConfig = {
  name: "AO+ Solutions",
  legalName: "AO+ Solutions Pvt Ltd",
  tagline: "Intelligent Infrastructure. Made in India.",
  shortDesc: "A corporate hub for multiple owned brands, focusing on AI, Cloud, and Digital Marketing solutions for Indian MSMEs.",
  email: "connect@aoplus.in",
  altEmail: "hello@aoplus.in",
  phone: "+91-XXXXXXXXXX",
  address: {
    street: "F-805 Riverdale, Casa Rio",
    city: "Palava City, Dombivali (E)",
    state: "Thane",
    pincode: "421204",
    country: "India"
  },
  foundingYear: 2019,
  founders: ["Founder Name"],
  cin: "U72900MH2019PTC330056",
  gstin: "27XXXXXXXXX",
  social: {
    twitter: "https://twitter.com/aoplusin",
    linkedin: "https://linkedin.com/company/aoplus-solutions",
    github: "https://github.com/aoplus"
  },
  navLinks: [
    { label: "Services", href: "/services", external: false },
    { label: "Brands", href: "/brands", external: false },
    { label: "About", href: "/about", external: false },
    { label: "Investors", href: "/investors", external: false },
    { label: "Careers", href: "/careers", external: false },
    { label: "Biz Portal", href: "https://biz.aoplus.in", external: true }
  ],
  footerLinks: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Investor Relations", href: "/investors" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" }
    ],
    brands: [
      { label: "Prodory", href: "https://prodory.com", external: true },
      { label: "DigiAds.click", href: "https://digiads.click", external: true },
      { label: "IndoMbivili.com", href: "https://indombivili.com", external: true },
      { label: "PalavaNews.com", href: "https://palavanews.com", external: true },
      { label: "SatvikCloud.com", href: "https://satvikcloud.com", external: true },
      { label: "PrimeSale.in", href: "https://primesale.in", external: true }
    ],
    resources: [
      { label: "Growth Audit", href: "/growth-audit" },
      { label: "FinOps Assessment", href: "/assessment" },
      { label: "Blog", href: "https://blog.aoplus.in", external: true },
      { label: "Documentation", href: "https://docs.aoplus.in", external: true }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" }
    ]
  },
  metrics: {
    yoyGrowth: "250%",
    cloudSpendManaged: "₹100+ Cr",
    avgCostReduction: "30-40%",
    ownedBrands: 5,
    activeVerticals: "4+",
    arrTarget: "₹12.5 Cr",
    tam: "$300B+",
    msmeTarget: "63M+"
  },
  erpNext: {
    baseUrl: "https://biz.aoplus.in",
    webFormEndpoint: "/api/method/frappe.website.doctype.web_form.web_form.accept",
    leadFormName: "lead-capture"
  },
  n8n: {
    webhookUrl: ""
  }
} as const;

export type SiteConfig = typeof siteConfig;
