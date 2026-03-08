export interface StarterKit {
  id: string;
  name: string;
  label: string;
  price: number;
  delivery: string;
  target: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
  growthPath: string;
  icon: string;
  color: string;
}

export const starterKits: StarterKit[] = [
  {
    id: "digital-starter",
    name: "Digital Starter",
    label: "Quick Launch",
    price: 10000,
    delivery: "3-5 days",
    target: "Solo founders, freelancers",
    features: [
      "Single-page website",
      "Google Business Profile",
      "3 Professional email accounts",
      "Basic SEO setup",
      "Mobile responsive",
      "Social media links"
    ],
    cta: {
      label: "Start Now",
      href: "/contact?kit=digital-starter"
    },
    growthPath: "Upgrade to Digital Foundation → Growth Engine",
    icon: "Rocket",
    color: "#0B7DF0"
  },
  {
    id: "marketing-launchpad",
    name: "Marketing Launchpad",
    label: "Lead Generation",
    price: 25000,
    delivery: "7-10 days",
    target: "Businesses ready to scale marketing",
    features: [
      "Landing page design",
      "Google Ads setup (₹10K credit)",
      "Facebook/Instagram Ads",
      "SEO audit & optimization",
      "Lead capture forms",
      "Analytics dashboard"
    ],
    cta: {
      label: "Launch Campaign",
      href: "/contact?kit=marketing-launchpad"
    },
    growthPath: "Add Growth Engine for full automation",
    icon: "Megaphone",
    color: "#06B6D4"
  },
  {
    id: "cloud-migration",
    name: "Cloud Migration",
    label: "Infrastructure",
    price: 50000,
    delivery: "14-21 days",
    target: "Businesses moving from on-premise",
    features: [
      "AWS/Hetzner cloud setup",
      "Server migration",
      "Data backup & recovery",
      "SSL & security config",
      "Performance optimization",
      "30-day monitoring"
    ],
    cta: {
      label: "Migrate Now",
      href: "/contact?kit=cloud-migration"
    },
    growthPath: "Add Prodory for cost optimization",
    icon: "Cloud",
    color: "#10B981"
  },
  {
    id: "erp-quickstart",
    name: "ERP Quickstart",
    label: "Operations",
    price: 75000,
    delivery: "21-30 days",
    target: "Businesses streamlining operations",
    features: [
      "ERPNext installation",
      "5 user licenses",
      "Accounting module",
      "Inventory management",
      "CRM setup",
      "User training (2 hrs)"
    ],
    cta: {
      label: "Streamline Ops",
      href: "/contact?kit=erp-quickstart"
    },
    growthPath: "Upgrade to Growth Engine for automation",
    icon: "Database",
    color: "#8B5CF6"
  }
];

export const freeAssessment = {
  id: "free-assessment",
  name: "Free FinOps Assessment",
  label: "No Cost",
  price: 0,
  delivery: "48 hours",
  target: "Enterprises with cloud infrastructure",
  features: [
    "Cloud spend analysis",
    "Cost optimization report",
    "Savings recommendations",
    "Implementation roadmap",
    "No obligation quote"
  ],
  cta: {
    label: "Get Assessment",
    href: "/assessment"
  },
  growthPath: "Proceed to Enterprise FinOps engagement",
  icon: "ClipboardCheck",
  color: "#F59E0B"
};

export const getStarterKitById = (id: string): StarterKit | undefined => {
  return starterKits.find(kit => kit.id === id);
};
