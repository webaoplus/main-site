import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Sparkles,
  Check,
  Calculator,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO, { websiteStructuredData } from "@/components/shared/SEO";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import QuickStarterCard from "@/components/shared/QuickStarterCard";
import BrandCarousel from "@/components/shared/BrandCarousel";
import { siteConfig } from "@/lib/site";
import { starterKits } from "@/lib/starter-kits";

const Home = () => {
const metrics = [
  { value: 35, suffix: "%", prefix: "", label: "Avg Cost Reduction" }
];
  const features = [
    "AI-powered cloud optimization",
    "ERPNext implementation",
    "Digital marketing automation",
    "24/7 technical support"
  ];

  return (
    <>
      <SEO 
        title="Home"
        description={siteConfig.shortDesc}
        structuredData={websiteStructuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Badge className="mb-6 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                {siteConfig.tagline}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                AO+ Solutions —{" "}
                <span className="text-primary">Your Technology Partner</span>{" "}
                for Growth
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
                A corporate hub for AI-powered cloud solutions, digital marketing, 
                and enterprise infrastructure. Serving 63M+ Indian MSMEs.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/growth-audit">
                  <Button size="lg" className="gap-2">
                    <Calculator className="w-5 h-5" />
                    Get Free Assessment
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="gap-2">
                    Explore Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {metrics.map((metric, idx) => (
                <Card 
                  key={idx} 
                  className={`${idx === 0 ? "col-span-2" : ""} bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm`}
                >
                  <CardContent className="p-6">
                    <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter 
                        value={metric.value} 
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Starter Kits Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Quick Start</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Quick Starter Kits
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Launch your digital transformation in days, not months. 
              Choose the kit that fits your current stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {starterKits.map((kit, idx) => (
              <QuickStarterCard key={kit.id} kit={kit} index={idx} />
            ))}
          </div>
        </div>
      </section>


      {/* Services Overview Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Solutions</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Service Bundles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Scalable solutions for every stage of growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Digital Foundation",
                price: "₹25K-50K",
                monthly: "₹5K/mo",
                target: "Solo founders",
                features: ["Website (5 pages)", "Google Business", "Basic ERPNext", "Email setup"],
                cta: "Get Started"
              },
              {
                icon: TrendingUp,
                title: "Growth Engine",
                price: "₹1.5L-3L",
                monthly: "₹15-25K/mo",
                target: "11-50 employee MSMEs",
                features: ["Full ERPNext", "Cloud infrastructure", "n8n automation", "Marketing"],
                cta: "Scale Now",
                highlight: true
              },
              {
                icon: Building2,
                title: "Enterprise FinOps",
                price: "Custom",
                monthly: "5-10% of savings",
                target: "₹50L+/mo cloud spend",
                features: ["Full Prodory platform", "Dedicated engineer", "Multi-cloud", "24/7 SLA"],
                cta: "Request Quote"
              }
            ].map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className={`h-full ${tier.highlight ? "border-primary shadow-lg" : ""}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <tier.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                      {tier.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      {tier.target}
                    </p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">
                        {tier.price}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">
                        + {tier.monthly}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/services">
                      <Button className="w-full" variant={tier.highlight ? "default" : "outline"}>
                        {tier.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Growth Audit CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-cyan-500 p-8 sm:p-16"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-0">Free Tool</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Get Your Free AI Growth Audit
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Discover your biggest growth opportunities in 60 seconds. 
                  Our AI analyzes your business and recommends the perfect bundle.
                </p>
                <div className="flex items-center gap-4">
                  <Link to="/growth-audit">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Sparkles className="w-5 h-5" />
                      Start Assessment
                    </Button>
                  </Link>
                  <span className="text-white/60 text-sm">
                    Used by 500+ businesses
                  </span>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                  <Calculator className="w-32 h-32 text-white/30" />
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>

          <div className="text-center">
            <Link to="/investors">
              <Button variant="outline" className="gap-2">
                View Investor Relations
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
