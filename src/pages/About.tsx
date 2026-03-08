import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Target, Lightbulb, Shield, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/shared/SEO";
import { siteConfig } from "@/lib/site";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that solve real business problems."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in transparent pricing, honest communication, and delivering on our promises."
    },
    {
      icon: Heart,
      title: "Customer-Centricity",
      description: "Our customers' success is our success. We go above and beyond to ensure their growth."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    }
  ];

  const milestones = [
    { year: "2019", event: "AO+ Solutions founded in Palava City, Dombivali" },
    { year: "2020", event: "Launched Prodory cloud optimization platform" },
    { year: "2021", event: "Expanded to 6 owned brands across multiple verticals" },
    { year: "2022", event: "Crossed ₹50 Cr cloud spend managed milestone" },
    { year: "2023", event: "Achieved 250% YoY growth" },
    { year: "2024", event: "Targeting ₹12.5 Cr ARR" }
  ];

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about AO+ Solutions - an Indian technology holding company building intelligent infrastructure for MSMEs since 2019."
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
            <Badge className="mb-4">Our Story</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Building Intelligent Infrastructure for India
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Since 2019, AO+ Solutions has been at the forefront of digital transformation 
              for Indian MSMEs, combining cutting-edge technology with deep local expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="secondary">Who We Are</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                A Technology Holding Company with a Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                AO+ Solutions Pvt Ltd (CIN: {siteConfig.cin}) is an Indian technology holding 
                company based in Palava City, Dombivali, Maharashtra. Founded in 2019, we serve 
                as a corporate hub for a portfolio of owned digital-first brands.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Our mission is to democratize access to enterprise-grade technology for Indian 
                MSMEs. We believe that every business, regardless of size, deserves access to 
                the tools and infrastructure that drive growth and efficiency.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-300">Founded {siteConfig.foundingYear}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-300">Palava City, Maharashtra</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-300">Growing Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-slate-700 dark:text-slate-300">6 Owned Brands</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                    <span className="text-white text-4xl font-bold">AO+</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">Solutions</p>
                  <p className="text-slate-600 dark:text-slate-400">{siteConfig.tagline}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Journey</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <Card className="inline-block">
                      <CardContent className="p-4">
                        <p className="text-lg font-bold text-primary">{milestone.year}</p>
                        <p className="text-slate-600 dark:text-slate-300">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-950 md:-translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="secondary">Location</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Headquarters
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We're proud to be based in Palava City, one of India's smartest cities, 
                located in Dombivali, Maharashtra. Our location reflects our commitment 
                to building technology solutions from India, for India.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Address</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}<br />
                      {siteConfig.address.state} - {siteConfig.address.pincode}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Company Details</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      CIN: {siteConfig.cin}<br />
                      Founded: {siteConfig.foundingYear}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-cyan-400/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-slate-900 dark:text-white">Palava City</p>
                  <p className="text-slate-600 dark:text-slate-400">Dombivali, Maharashtra</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
