import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2, Cloud, Building2, DollarSign, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SEO from "@/components/shared/SEO";
import { siteConfig } from "@/lib/site";

const Assessment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    cloudProvider: "",
    monthlySpend: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Try ERPNext API first
      const erpNextUrl = `${siteConfig.erpNext.baseUrl}${siteConfig.erpNext.webFormEndpoint}`;
      
      const payload = {
        web_form: siteConfig.erpNext.leadFormName,
        data: JSON.stringify({
          lead_name: formData.name,
          company_name: formData.company,
          email_id: formData.email,
          source: "Website - FinOps Assessment",
          notes: `Cloud Provider: ${formData.cloudProvider}\nMonthly Spend: ${formData.monthlySpend}\nMessage: ${formData.message}`
        })
      };

      const response = await fetch(erpNextUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback to mailto
        throw new Error("API failed");
      }
    } catch (err) {
      // Fallback to mailto
      const subject = `FinOps Assessment Request from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Cloud Provider: ${formData.cloudProvider}
Monthly Spend: ${formData.monthlySpend}

Message:
${formData.message}
      `;
      
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEO title="FinOps Assessment - Thank You" />
        <section className="pt-24 pb-16 min-h-[calc(100vh-64px)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Thank You!
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We've received your FinOps assessment request. Our team will analyze 
                your cloud infrastructure and get back to you within 48 hours with 
                a detailed savings report.
              </p>
              <Button onClick={() => window.location.href = "/"}>
                Back to Home
              </Button>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Free FinOps Assessment"
        description="Get a free cloud cost optimization assessment. Our experts will analyze your infrastructure and identify savings opportunities."
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
            <Badge className="mb-4">Free Assessment</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Free FinOps Assessment
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Discover how much you can save on your cloud infrastructure. 
              Our experts will analyze your setup and provide actionable recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                    Request Your Assessment
                  </h2>

                  {error && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          <User className="w-4 h-4 inline mr-1" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">
                        <Building2 className="w-4 h-4 inline mr-1" />
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cloudProvider">
                          <Cloud className="w-4 h-4 inline mr-1" />
                          Cloud Provider
                        </Label>
                        <select
                          id="cloudProvider"
                          name="cloudProvider"
                          value={formData.cloudProvider}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          <option value="">Select provider</option>
                          <option value="aws">AWS</option>
                          <option value="azure">Azure</option>
                          <option value="gcp">Google Cloud</option>
                          <option value="multi">Multi-cloud</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="monthlySpend">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          Monthly Cloud Spend
                        </Label>
                        <select
                          id="monthlySpend"
                          name="monthlySpend"
                          value={formData.monthlySpend}
                          onChange={handleChange}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        >
                          <option value="">Select range</option>
                          <option value="under-1l">Under ₹1 Lakh</option>
                          <option value="1l-5l">₹1-5 Lakhs</option>
                          <option value="5l-10l">₹5-10 Lakhs</option>
                          <option value="10l-50l">₹10-50 Lakhs</option>
                          <option value="over-50l">Over ₹50 Lakhs</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your current infrastructure, challenges, or specific areas you'd like us to focus on..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Request Assessment
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  What You'll Get
                </h2>
                <ul className="space-y-4">
                  {[
                    "Complete cloud spend analysis",
                    "Identification of waste and inefficiencies",
                    "Rightsizing recommendations",
                    "Reserved instance planning",
                    "Spot instance opportunities",
                    "Storage optimization tips",
                    "Implementation roadmap",
                    "ROI projection"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Average Savings: 30-40%
                  </h3>
                  <p className="opacity-90">
                    Our clients typically save 30-40% on their cloud bills after 
                    implementing our recommendations. Some have achieved savings of over 50%.
                  </p>
                </CardContent>
              </Card>

              <div className="text-sm text-slate-500 dark:text-slate-400">
                <p>
                  Your information is secure and will only be used to provide the assessment. 
                  We never share your data with third parties.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Assessment;
