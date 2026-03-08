import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/shared/SEO";
import { brands } from "@/lib/brands";

const Brands = () => {
  return (
    <>
      <SEO 
        title="Our Brands"
        description="Explore the AO+ Solutions brand ecosystem. Six specialized brands serving Indian MSMEs."
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
            <Badge className="mb-4">Ecosystem</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Brand Ecosystem
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Six specialized brands, one unified vision for Indian MSMEs. 
              Each brand focuses on a specific market need while benefiting from shared infrastructure and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Network Visualization */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Network</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How Our Brands Connect
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our brands work together to provide comprehensive solutions for businesses
            </p>
          </motion.div>

          <div className="relative">
            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex justify-center mb-12"
            >
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <div className="text-center text-white">
                  <p className="text-2xl font-bold">AO+</p>
                  <p className="text-xs">Hub</p>
                </div>
              </div>
            </motion.div>

            {/* Brand Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand, idx) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                          style={{ backgroundColor: brand.color }}
                        >
                          {brand.name.charAt(0)}
                        </div>
                        <a
                          href={brand.domain}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                        {brand.name}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: brand.color }}>
                        {brand.role}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {brand.fullDesc}
                      </p>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">
                          Key Features
                        </p>
                        <ul className="space-y-1">
                          {brand.features.slice(0, 3).map((feature, fidx) => (
                            <li key={fidx} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.color }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {brand.metrics && (
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                          {brand.metrics.map((metric, midx) => (
                            <div key={midx} className="text-center">
                              <p className="text-lg font-bold text-slate-900 dark:text-white">
                                {metric.value}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <a
                        href={brand.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                        style={{ color: brand.color }}
                      >
                        Visit {brand.name}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell Benefits */}
      <section className="py-24 bg-blue-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Benefits</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The AO+ Advantage
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Working with any AO+ brand gives you access to our entire ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Shared Infrastructure",
                description: "All brands benefit from our enterprise-grade cloud infrastructure, security, and compliance frameworks."
              },
              {
                icon: Users,
                title: "Cross-Brand Synergies",
                description: "Customers of one brand get preferential pricing and seamless integration with other AO+ brands."
              },
              {
                icon: Globe,
                title: "Unified Support",
                description: "Single point of contact for all your technology needs across our brand ecosystem."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Want to Partner With Us?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for strategic partnerships that help us serve 
              Indian MSMEs better. Let's explore collaboration opportunities.
            </p>
            <a href="mailto:connect@aoplus.in">
              <Button size="lg" variant="secondary" className="gap-2">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Brands;
