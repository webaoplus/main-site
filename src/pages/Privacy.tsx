import { motion } from "framer-motion";
import { Database, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/shared/SEO";
import { siteConfig } from "@/lib/site";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="AO+ Solutions Privacy Policy. Learn how we collect, use, and protect your personal information."
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
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: March 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert max-w-none"
          >
            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Introduction
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {siteConfig.legalName} ("we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  By accessing or using our services, you agree to the collection and use of information 
                  in accordance with this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Information We Collect
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Personal Information</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li>• Name and contact details</li>
                        <li>• Email address</li>
                        <li>• Phone number</li>
                        <li>• Company information</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">Usage Data</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li>• IP address and browser type</li>
                        <li>• Pages visited and time spent</li>
                        <li>• Device information</li>
                        <li>• Referral sources</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  How We Use Your Information
                </h2>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">1</span>
                    </div>
                    <span>To provide and maintain our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <span>To notify you about changes to our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <span>To provide customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">4</span>
                    </div>
                    <span>To gather analysis and improve our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">5</span>
                    </div>
                    <span>To send marketing communications (with your consent)</span>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Data Security
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments</li>
                  <li>• Access controls and authentication</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Your Rights
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Under applicable data protection laws, you have the following rights:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Access", desc: "Request copies of your personal data" },
                    { title: "Rectification", desc: "Request correction of inaccurate data" },
                    { title: "Erasure", desc: "Request deletion of your personal data" },
                    { title: "Restriction", desc: "Request limitation of processing" },
                    { title: "Portability", desc: "Request transfer of your data" },
                    { title: "Objection", desc: "Object to processing of your data" }
                  ].map((right, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{right.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{right.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Helper component for the User icon
const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default Privacy;
