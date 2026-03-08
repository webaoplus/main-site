import { motion } from "framer-motion";
import { AlertTriangle, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/shared/SEO";
import { siteConfig } from "@/lib/site";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="AO+ Solutions Terms of Service. Read our terms and conditions for using our services."
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
              Terms of Service
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
                  Agreement to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  By accessing or using the services provided by {siteConfig.legalName} 
                  ("Company", "we", "our", or "us"), you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Our Services
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We provide technology solutions including but not limited to:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Cloud infrastructure services",
                    "ERPNext implementation",
                    "Digital marketing services",
                    "Website development",
                    "AI and automation solutions",
                    "FinOps consulting"
                  ].map((service, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{service}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Accounts */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  User Accounts
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  When you create an account with us, you must provide accurate, complete, and current 
                  information. Failure to do so constitutes a breach of these Terms, which may result 
                  in immediate termination of your account.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  You are responsible for safeguarding the password and for all activities that occur 
                  under your account. You agree to notify us immediately of any unauthorized use of 
                  your account.
                </p>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Payment Terms
                </h2>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">1</span>
                    </div>
                    <span>All fees are quoted in Indian Rupees (INR) unless otherwise specified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <span>Payment is due within 15 days of invoice date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <span>Late payments may incur interest charges at 1.5% per month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">4</span>
                    </div>
                    <span>All fees are non-refundable unless otherwise agreed in writing</span>
                  </li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Intellectual Property
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  All content, features, and functionality of our services, including but not limited to 
                  text, graphics, logos, and software, are the exclusive property of {siteConfig.legalName} 
                  and are protected by Indian and international copyright, trademark, and other intellectual 
                  property laws.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  Custom work product developed specifically for you becomes your property upon full payment, 
                  unless otherwise specified in a separate agreement.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Limitation of Liability
                </h2>
                <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-slate-700 dark:text-slate-300">
                          To the maximum extent permitted by law, {siteConfig.legalName} shall not be 
                          liable for any indirect, incidental, special, consequential, or punitive damages, 
                          including without limitation, loss of profits, data, use, goodwill, or other 
                          intangible losses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Termination
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  We may terminate or suspend your account immediately, without prior notice or liability, 
                  for any reason, including without limitation if you breach these Terms.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  Upon termination, your right to use our services will immediately cease. All provisions 
                  of these Terms which by their nature should survive termination shall survive.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Governing Law
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  These Terms shall be governed and construed in accordance with the laws of India, 
                  without regard to its conflict of law provisions. Any disputes arising under these 
                  Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Changes to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  We reserve the right to modify or replace these Terms at any time. We will provide 
                  notice of any significant changes by posting the new Terms on this page and updating 
                  the "Last updated" date.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4">
                  <p className="text-slate-700 dark:text-slate-300 font-medium">{siteConfig.legalName}</p>
                  <p className="text-slate-600 dark:text-slate-400">{siteConfig.address.street}</p>
                  <p className="text-slate-600 dark:text-slate-400">{siteConfig.address.city}</p>
                  <p className="text-slate-600 dark:text-slate-400">{siteConfig.address.state} - {siteConfig.address.pincode}</p>
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline mt-2 inline-block"
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

export default Terms;
