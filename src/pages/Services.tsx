import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Rocket, 
  TrendingUp, 
  Building2, 
  Check, 
  ArrowRight,
  Globe,
  Cloud,
  Database,
  Megaphone,
  Brain,
  Settings,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/shared/SEO";
import LocalizedPrice, { LocalizedPriceRange } from "@/components/shared/LocalizedPrice";
import { serviceBundles, coreServices } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  TrendingUp,
  Building2,
  Globe,
  Cloud,
  Database,
  Megaphone,
  Brain,
  Settings
};

const Services = () => {
  return (
    <>
      <SEO 
        title="Services"
        description="Comprehensive technology solutions for Indian MSMEs. From digital foundation to enterprise FinOps."
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
            <Badge className="mb-4">Our Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Services That Scale With You
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From digital foundation to enterprise FinOps — comprehensive technology 
              solutions designed for Indian MSMEs at every stage of growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Bundles Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Bundles</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Service Bundles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Choose the bundle that matches your business stage and goals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceBundles.map((bundle, idx) => {
              const Icon = iconMap[bundle.icon] || Rocket;
              return (
                <motion.div
                  key={bundle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className={`h-full ${bundle.highlight ? "border-primary shadow-lg ring-1 ring-primary/20" : ""}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        {bundle.highlight && (
                          <Badge className="bg-primary text-white">Most Popular</Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                        {bundle.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {bundle.subtitle}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {bundle.targetAudience}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="mb-6">
                        {bundle.pricing.custom ? (
                          <div>
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">
                              Custom
                            </span>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {bundle.pricing.commission}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">
                              {bundle.pricing.setup && (
                                <LocalizedPriceRange 
                                  min={bundle.pricing.setup.min} 
                                  max={bundle.pricing.setup.max}
                                />
                              )}
                            </span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">
                              setup
                            </span>
                            {bundle.pricing.monthly && (
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                + <LocalizedPriceRange 
                                  min={bundle.pricing.monthly.min} 
                                  max={bundle.pricing.monthly.max}
                                />/mo
                              </p>
                            )}
                          </div>
                        )}
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                          Delivered in {bundle.delivery}
                        </p>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {bundle.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {bundle.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {bundle.addons.length > 0 && (
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                          <p className="text-sm font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Popular Add-ons
                          </p>
                          <ul className="space-y-2">
                            {bundle.addons.slice(0, 3).map((addon,aidx) => (
                              <li key={aidx} className="flex items-center justify-between text-sm">
                                <span className="text-slate-600 dark:text-slate-400">{addon.name}</span>
                                <span className="font-medium text-slate-900 dark:text-white">
                                  <LocalizedPrice price={addon.price} />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Link to={bundle.cta.href}>
                        <Button className="w-full" variant={bundle.highlight ? "default" : "outline"}>
                          {bundle.cta.label}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Individual Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Core Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Individual services you can mix and match based on your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => {
              const Icon = iconMap[service.icon] || Settings;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-medium text-primary">
                        {service.pricing}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Compare</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Bundle Comparison
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Compare features across our service bundles
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">Digital Foundation</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Growth Engine</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">Enterprise FinOps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Website", df: "5 pages", ge: "Unlimited", ef: "Custom" },
                  { feature: "ERPNext Users", df: "3", ge: "20", ef: "Unlimited" },
                  { feature: "Cloud Infrastructure", df: "—", ge: "✓", ef: "✓" },
                  { feature: "Marketing Automation", df: "—", ge: "✓", ef: "✓" },
                  { feature: "AI/ML Solutions", df: "—", ge: "Basic", ef: "Advanced" },
                  { feature: "Support", df: "Email", ge: "Priority", ef: "24/7 SLA" },
                  { feature: "Dedicated Engineer", df: "—", ge: "—", ef: "✓" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-4 px-4 text-slate-700 dark:text-slate-300">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">{row.df}</td>
                    <td className="text-center py-4 px-4 text-primary font-medium">{row.ge}</td>
                    <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">{row.ef}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Not Sure Which Bundle is Right?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Take our free AI Growth Audit to get a personalized recommendation 
              based on your business needs and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/growth-audit">
                <Button size="lg" variant="secondary" className="gap-2">
                  Take Growth Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
