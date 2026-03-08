import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Target, 
  Globe, 
  DollarSign,
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/shared/SEO";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const Investors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const deckSlides = [
    {
      title: "AO+ Solutions",
      subtitle: "Intelligent Infrastructure. Made in India.",
      content: "A corporate hub for AI-powered cloud solutions, digital marketing, and enterprise infrastructure serving 63M+ Indian MSMEs."
    },
    {
      title: "The Problem",
      subtitle: "MSMEs Struggle with Digital Transformation",
      content: "63M+ Indian MSMEs lack access to enterprise-grade technology. High costs, complexity, and lack of local expertise prevent adoption."
    },
    {
      title: "Our Solution",
      subtitle: "Bundled, Affordable, Local",
      content: "Six specialized brands offering comprehensive technology solutions. Made in India, priced for Indian MSMEs, with local support."
    },
    {
      title: "Traction",
      subtitle: "Strong Growth Metrics",
      content: "250% YoY growth, ₹100+ Cr cloud spend managed, 30-40% average cost reduction for clients, 5 owned brands across 4+ verticals."
    },
    {
      title: "Market Opportunity",
      subtitle: "$300B+ TAM",
      content: "Indian MSME technology market is rapidly growing. Cloud adoption, digital marketing, and ERP implementation present massive opportunities."
    },
    {
      title: "Business Model",
      subtitle: "Recurring Revenue + Savings-Based",
      content: "Setup fees + monthly retainers for services. Enterprise FinOps uses savings-based pricing (5-10% of savings achieved)."
    },
    {
      title: "Financial Projections",
      subtitle: "Targeting ₹12.5 Cr ARR",
      content: "Strong unit economics with 70%+ gross margins. Path to profitability by 2025."
    },
    {
      title: "The Team",
      subtitle: "Experienced Operators",
      content: "Leadership team with deep expertise in cloud infrastructure, digital marketing, and Indian MSME market."
    },
    {
      title: "Investment Ask",
      subtitle: "Join Our Journey",
      content: "Seeking strategic partners who share our vision of democratizing technology for Indian MSMEs."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deckSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deckSlides.length) % deckSlides.length);
  };

  return (
    <>
      <SEO 
        title="Investor Relations"
        description="Investment opportunity in AO+ Solutions. 250% YoY growth, ₹100+ Cr cloud managed, targeting ₹12.5 Cr ARR."
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4">Investors</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Investor Relations
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Building the future of Indian MSME technology infrastructure. 
              Join us on our journey to democratize enterprise-grade technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Key Metrics</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Performance at a Glance
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: 250, suffix: "%", label: "YoY Growth" },
              { icon: DollarSign, value: 12.5, prefix: "₹", suffix: " Cr", label: "ARR Target" },
              { icon: Building2, value: 5, suffix: "", label: "Owned Brands" },
              { icon: Target, value: 4, suffix: "+", label: "Active Verticals" }
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <metric.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                      <AnimatedCounter 
                        value={metric.value} 
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">{metric.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="secondary">Market</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Massive Market Opportunity
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                The Indian MSME technology market represents a $300B+ TAM. With 63M+ MSMEs 
                increasingly adopting digital solutions, the opportunity is enormous and growing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">$300B+ TAM</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Total Addressable Market</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">63M+ MSMEs</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Target Customer Base</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">25% CAGR</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Market Growth Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="bg-primary text-white">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <p className="text-3xl font-bold">₹100+ Cr</p>
                  <p className="text-sm opacity-80">Cloud Managed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <PieChart className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">30-40%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Avg Cost Reduction</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <LineChart className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">250%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">YoY Growth</p>
                </CardContent>
              </Card>
              <Card className="bg-cyan-500 text-white">
                <CardContent className="p-6 text-center">
                  <Target className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <p className="text-3xl font-bold">5</p>
                  <p className="text-sm opacity-80">Owned Brands</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Deck */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Pitch Deck</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Investor Deck Preview
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Browse through our investor presentation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-primary to-cyan-500 p-8 sm:p-16 text-center text-white min-h-[400px] flex flex-col justify-center">
                <p className="text-sm opacity-80 mb-4">
                  Slide {currentSlide + 1} of {deckSlides.length}
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  {deckSlides[currentSlide].title}
                </h3>
                <p className="text-xl opacity-90 mb-6">
                  {deckSlides[currentSlide].subtitle}
                </p>
                <p className="text-lg opacity-80 max-w-xl mx-auto">
                  {deckSlides[currentSlide].content}
                </p>
              </div>

              <div className="p-4 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
                <Button variant="ghost" onClick={prevSlide} className="gap-2">
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {deckSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentSlide ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="ghost" onClick={nextSlide} className="gap-2">
                  Next
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </motion.div>

          <div className="text-center mt-8">
            <a href="mailto:connect@aoplus.in?subject=Investor Deck Request">
              <Button className="gap-2">
                <Download className="w-5 h-5" />
                Request Full Deck
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary to-cyan-500 rounded-3xl p-8 sm:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Interested in Investing?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're seeking strategic partners who share our vision of democratizing 
              technology for Indian MSMEs. Let's discuss how you can be part of our journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:connect@aoplus.in?subject=Investment Inquiry">
                <Button size="lg" variant="secondary" className="gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:connect@aoplus.in?subject=Investor Deck Request">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Request Deck
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Investors;
