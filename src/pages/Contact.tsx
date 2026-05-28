import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2, Mail, User, Building2, MessageSquare, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SEO from "@/components/shared/SEO";
import { siteConfig } from "@/lib/site";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
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
  const erpNextUrl =
    `${siteConfig.erpNext.baseUrl}${siteConfig.erpNext.webFormEndpoint}`;

  const payload = {
    web_form: siteConfig.erpNext.leadFormName,

    data: JSON.stringify({
      contact_name: formData.name,

      contact_email: formData.email,

      contact_company_name: formData.company,

      contact_phone_no: formData.phone,

      contact_interest: formData.interest,

      contact_message: formData.message
    })
  };

  const response = await fetch(erpNextUrl, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(payload)
  });
  const result = await response.json();

console.log("STATUS:", response.status);
console.log("RESULT:", result);

  if (response.ok) {
    setIsSubmitted(true);
  } else {
    // Fallback to mailto
    throw new Error("API failed");
  }

} catch (err) {
      // Fallback to mailto
      const subject = `Contact Form: ${formData.name} - ${formData.interest}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Interest: ${formData.interest}

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
        <SEO title="Contact - Thank You" />
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
                Message Sent!
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Thank you for reaching out. Our team will review your message and 
                get back to you within 24 hours.
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
        title="Contact Us"
        description="Get in touch with AO+ Solutions. We're here to help with your technology needs."
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
            <Badge className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a question or want to discuss your project? We'd love to hear from you. 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
                    Send Us a Message
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

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          <Building2 className="w-4 h-4 inline mr-1" />
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">
                        I'm Interested In
                      </Label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="digital-foundation">Digital Foundation Bundle</option>
                        <option value="growth-engine">Growth Engine Bundle</option>
                        <option value="enterprise-finops">Enterprise FinOps</option>
                        <option value="prodory">Prodory Platform</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="other">Something Else</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        <MessageSquare className="w-4 h-4 inline mr-1" />
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project, requirements, or questions..."
                        rows={5}
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Prefer to reach out directly? Here's how you can get in touch with us.
                </p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                      <a 
                        href={`mailto:${siteConfig.email}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-primary"
                      >
                        {siteConfig.email}
                      </a>
                      <br />
                      <a 
                        href={`mailto:${siteConfig.altEmail}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-primary"
                      >
                        {siteConfig.altEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Address</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}<br />
                        {siteConfig.address.state} - {siteConfig.address.pincode}<br />
                        {siteConfig.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Company Details</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {siteConfig.legalName}<br />
                        CIN: {siteConfig.cin}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary to-cyan-500 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="opacity-90 mb-4">
                    For urgent inquiries, please email us directly. We typically 
                    respond within 2-4 hours during business hours.
                  </p>
                  <a href={`mailto:${siteConfig.email}`}>
                    <Button variant="secondary" className="gap-2">
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
