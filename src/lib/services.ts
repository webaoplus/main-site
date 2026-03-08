export interface ServiceBundle {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  description: string;
  features: string[];
  addons: {
    name: string;
    price: number;
    description: string;
  }[];
  pricing: {
    setup?: {
      min: number;
      max: number;
    };
    monthly?: {
      min: number;
      max: number;
    };
    custom?: boolean;
    commission?: string;
  };
  delivery: string;
  cta: {
    label: string;
    href: string;
  };
  highlight?: boolean;
  icon: string;
}

export interface CoreService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: string;
}

export const serviceBundles: ServiceBundle[] = [
  {
    id: "digital-foundation",
    title: "Digital Foundation",
    subtitle: "Essential digital presence",
    targetAudience: "Solo founders, freelancers, micro-businesses",
    description: "Establish your digital footprint with a professional website, Google Business presence, and basic business tools. Perfect for those just starting their digital journey.",
    features: [
      "Professional Website (5 pages)",
      "Google Business Profile Setup",
      "Professional Email (5 accounts)",
      "Basic ERPNext (3 users)",
      "SSL Certificate",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "1 Month Support"
    ],
    addons: [
      {
        name: "Additional Pages",
        price: 2500,
        description: "Per additional page beyond the included 5"
      },
      {
        name: "Extra Email Accounts",
        price: 500,
        description: "Per additional email account per month"
      },
      {
        name: "ERPNext Additional Users",
        price: 1000,
        description: "Per additional user per month"
      }
    ],
    pricing: {
      setup: { min: 25000, max: 50000 },
      monthly: { min: 5000, max: 5000 }
    },
    delivery: "7-14 days",
    cta: {
      label: "Get Started",
      href: "/contact?bundle=digital-foundation"
    },
    icon: "Rocket"
  },
  {
    id: "growth-engine",
    title: "Growth Engine",
    subtitle: "Scale your operations",
    targetAudience: "MSMEs with 11-50 employees",
    description: "Comprehensive digital transformation package with full ERPNext implementation, cloud infrastructure, marketing automation, and performance marketing. Designed for growing businesses ready to scale.",
    features: [
      "Full ERPNext Implementation (20 users)",
      "Cloud Infrastructure Setup (AWS/Hetzner)",
      "n8n Workflow Automation",
      "Performance Marketing (₹50K ad spend)",
      "Advanced Analytics Dashboard",
      "CRM Integration",
      "Inventory Management",
      "Accounting Module",
      "HR & Payroll",
      "3 Months Support"
    ],
    addons: [
      {
        name: "Additional ERPNext Users",
        price: 800,
        description: "Per additional user per month"
      },
      {
        name: "Extra Cloud Resources",
        price: 5000,
        description: "Additional server resources per month"
      },
      {
        name: "Marketing Ad Spend",
        price: 25000,
        description: "Additional ₹25K ad spend management"
      },
      {
        name: "Custom Workflows",
        price: 15000,
        description: "Custom n8n workflow development"
      }
    ],
    pricing: {
      setup: { min: 150000, max: 300000 },
      monthly: { min: 15000, max: 25000 }
    },
    delivery: "30-45 days",
    cta: {
      label: "Scale Now",
      href: "/contact?bundle=growth-engine"
    },
    highlight: true,
    icon: "TrendingUp"
  },
  {
    id: "enterprise-finops",
    title: "Enterprise FinOps",
    subtitle: "Full Prodory platform",
    targetAudience: "Enterprises with ₹50L+/mo cloud spend",
    description: "Complete cloud cost optimization solution with the full Prodory platform, dedicated FinOps engineer, and multi-cloud optimization. Custom pricing based on your cloud spend and savings achieved.",
    features: [
      "Full Prodory Platform Access",
      "Dedicated FinOps Engineer",
      "Multi-Cloud Optimization (AWS/Azure/GCP)",
      "AI-Powered Cost Analytics",
      "Kubernetes Cost Management",
      "Storage Optimization",
      "Reserved Instance Planning",
      "Spot Instance Management",
      "Monthly Optimization Reports",
      "24/7 Support SLA"
    ],
    addons: [
      {
        name: "Additional Cloud Accounts",
        price: 50000,
        description: "Per additional cloud account setup"
      },
      {
        name: "Custom Integrations",
        price: 100000,
        description: "Custom API and tool integrations"
      },
      {
        name: "Training Sessions",
        price: 25000,
        description: "Team training per session"
      }
    ],
    pricing: {
      custom: true,
      commission: "5-10% of savings achieved"
    },
    delivery: "Custom timeline",
    cta: {
      label: "Request Quote",
      href: "/contact?bundle=enterprise-finops"
    },
    icon: "Building2"
  }
];

export const coreServices: CoreService[] = [
  {
    id: "web-development",
    title: "Website Development",
    description: "Custom websites built with modern technologies for optimal performance and user experience.",
    icon: "Globe",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "CMS Integration"
    ],
    pricing: "From ₹25,000"
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Secure, scalable cloud infrastructure setup and management on AWS, Azure, or Hetzner.",
    icon: "Cloud",
    features: [
      "Multi-Cloud Support",
      "Auto Scaling",
      "Disaster Recovery",
      "24/7 Monitoring"
    ],
    pricing: "From ₹15,000/mo"
  },
  {
    id: "erpnext",
    title: "ERPNext Implementation",
    description: "End-to-end ERPNext implementation tailored to your business processes.",
    icon: "Database",
    features: [
      "Custom Workflows",
      "Data Migration",
      "User Training",
      "Ongoing Support"
    ],
    pricing: "From ₹75,000"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence and generate leads.",
    icon: "Megaphone",
    features: [
      "SEO & Content",
      "PPC Campaigns",
      "Social Media",
      "Analytics"
    ],
    pricing: "From ₹25,000/mo"
  },
  {
    id: "ai-ml",
    title: "AI & ML Solutions",
    description: "Custom AI and machine learning solutions to automate and optimize your business.",
    icon: "Brain",
    features: [
      "Predictive Analytics",
      "Process Automation",
      "Chatbots",
      "Data Insights"
    ],
    pricing: "Custom Quote"
  },
  {
    id: "devops",
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes with modern DevOps practices.",
    icon: "Settings",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Containerization",
      "Monitoring"
    ],
    pricing: "From ₹50,000"
  }
];

export const getBundleById = (id: string): ServiceBundle | undefined => {
  return serviceBundles.find(bundle => bundle.id === id);
};
