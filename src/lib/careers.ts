export interface Job {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  postedAt: string;
  applyEmail: string;
}

export const jobs: Job[] = [
  {
    id: "senior-devops-engineer",
    title: "Senior DevOps Engineer",
    location: "Palava City, Dombivali (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description: "We're looking for an experienced DevOps Engineer to join our Prodory team and help build scalable cloud infrastructure solutions for enterprise clients.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure on AWS, Azure, and GCP",
      "Implement Infrastructure as Code using Terraform",
      "Optimize cloud costs and performance",
      "Ensure security and compliance standards",
      "Mentor junior team members"
    ],
    requirements: [
      "5+ years of DevOps experience",
      "Strong knowledge of Kubernetes and Docker",
      "Experience with AWS/Azure/GCP",
      "Proficiency in Terraform or CloudFormation",
      "Strong scripting skills (Python/Bash)",
      "Experience with monitoring tools"
    ],
    niceToHave: [
      "FinOps certification",
      "Experience with ERPNext",
      "Knowledge of Indian compliance requirements"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Learning budget",
      "Stock options"
    ],
    salary: {
      min: 1500000,
      max: 2500000,
      currency: "INR",
      period: "annum"
    },
    postedAt: "2024-03-01",
    applyEmail: "careers@aoplus.in"
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    location: "Palava City, Dombivali (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description: "Join our engineering team to build innovative web applications and internal tools across our brand ecosystem.",
    responsibilities: [
      "Develop and maintain web applications",
      "Build RESTful APIs and GraphQL endpoints",
      "Implement responsive UI components",
      "Write clean, maintainable code",
      "Collaborate with design and product teams",
      "Participate in code reviews"
    ],
    requirements: [
      "3+ years of full-stack development",
      "Proficiency in React/Next.js",
      "Experience with Node.js/Python",
      "Knowledge of SQL and NoSQL databases",
      "Understanding of web security best practices",
      "Git version control"
    ],
    niceToHave: [
      "Experience with ERPNext/Frappe",
      "Knowledge of AI/ML integration",
      "Open source contributions"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work options",
      "Conference attendance",
      "Professional development"
    ],
    salary: {
      min: 800000,
      max: 1500000,
      currency: "INR",
      period: "annum"
    },
    postedAt: "2024-03-05",
    applyEmail: "careers@aoplus.in"
  },
  {
    id: "digital-marketing-manager",
    title: "Digital Marketing Manager",
    location: "Palava City, Dombivali (On-site)",
    type: "Full-time",
    department: "Marketing",
    description: "Lead digital marketing initiatives for DigiAds.click and our internal brands. Drive growth through data-driven marketing strategies.",
    responsibilities: [
      "Develop and execute marketing strategies",
      "Manage SEO, PPC, and social media campaigns",
      "Analyze campaign performance and optimize",
      "Create content calendars and oversee production",
      "Manage marketing budget and ROI",
      "Lead and mentor marketing team"
    ],
    requirements: [
      "4+ years of digital marketing experience",
      "Proven track record in PPC and SEO",
      "Experience with marketing automation tools",
      "Strong analytical skills",
      "Excellent communication skills",
      "Team management experience"
    ],
    niceToHave: [
      "Google Ads certification",
      "Experience with Indian MSME market",
      "Content creation skills"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Health insurance",
      "Flexible hours",
      "Learning opportunities"
    ],
    salary: {
      min: 700000,
      max: 1200000,
      currency: "INR",
      period: "annum"
    },
    postedAt: "2024-03-08",
    applyEmail: "careers@aoplus.in"
  },
  {
    id: "finops-engineer",
    title: "FinOps Engineer",
    location: "Palava City, Dombivali (Hybrid)",
    type: "Full-time",
    department: "Cloud Operations",
    description: "Help enterprise clients optimize their cloud spend as part of our Prodory FinOps team. Combine financial acumen with technical expertise.",
    responsibilities: [
      "Analyze cloud spend patterns",
      "Identify cost optimization opportunities",
      "Implement cost-saving measures",
      "Create financial reports and dashboards",
      "Collaborate with engineering teams",
      "Educate clients on FinOps best practices"
    ],
    requirements: [
      "3+ years of cloud experience",
      "Strong understanding of AWS/Azure/GCP pricing",
      "Experience with cost management tools",
      "Analytical mindset",
      "Excellent client communication",
      "Financial analysis skills"
    ],
    niceToHave: [
      "FinOps Foundation certification",
      "Experience with cloud financial management",
      "Knowledge of Indian accounting practices"
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Health insurance",
      "Certification support",
      "Flexible work arrangements"
    ],
    salary: {
      min: 1000000,
      max: 1800000,
      currency: "INR",
      period: "annum"
    },
    postedAt: "2024-03-07",
    applyEmail: "careers@aoplus.in"
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    location: "Palava City, Dombivali (On-site)",
    type: "Full-time",
    department: "Sales",
    description: "Drive revenue growth by selling our service bundles and solutions to Indian MSMEs. Build relationships and close deals.",
    responsibilities: [
      "Generate and qualify leads",
      "Conduct product demonstrations",
      "Prepare proposals and quotes",
      "Negotiate and close deals",
      "Maintain CRM records",
      "Achieve monthly sales targets"
    ],
    requirements: [
      "2+ years of B2B sales experience",
      "Experience selling technology solutions",
      "Strong presentation skills",
      "Goal-oriented mindset",
      "Excellent communication in English and Hindi",
      "Self-motivated and driven"
    ],
    niceToHave: [
      "Experience with MSME market",
      "Knowledge of cloud/ERP solutions",
      "Existing network of business contacts"
    ],
    benefits: [
      "Competitive base salary",
      "Attractive commission structure",
      "Health insurance",
      "Sales incentives",
      "Career growth opportunities"
    ],
    salary: {
      min: 400000,
      max: 800000,
      currency: "INR",
      period: "annum"
    },
    postedAt: "2024-03-06",
    applyEmail: "careers@aoplus.in"
  },
  {
    id: "content-writer",
    title: "Content Writer",
    location: "Remote (India)",
    type: "Contract",
    department: "Marketing",
    description: "Create compelling content for our brands, blogs, and marketing materials. Help us tell our story to the world.",
    responsibilities: [
      "Write blog posts and articles",
      "Create website copy",
      "Develop social media content",
      "Write email newsletters",
      "Research industry topics",
      "Edit and proofread content"
    ],
    requirements: [
      "2+ years of content writing experience",
      "Excellent English writing skills",
      "Understanding of SEO principles",
      "Ability to write for B2B audiences",
      "Research skills",
      "Meet deadlines consistently"
    ],
    niceToHave: [
      "Experience with technology topics",
      "Knowledge of Indian business landscape",
      "Multilingual capabilities"
    ],
    benefits: [
      "Competitive per-word rates",
      "Flexible schedule",
      "Regular work pipeline",
      "Performance bonuses"
    ],
    postedAt: "2024-03-08",
    applyEmail: "careers@aoplus.in"
  }
];

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};

export const getJobsByDepartment = (department: string): Job[] => {
  return jobs.filter(job => job.department === department);
};

export const departments = Array.from(new Set(jobs.map(job => job.department)));
