import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Send,
  ArrowRight,
  Briefcase,
  Heart,
  GraduationCap,
  Coffee,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/shared/SEO";
import { jobs, departments } from "@/lib/careers";

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  const filteredJobs = selectedDepartment === "all" 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Salary packages that match industry standards with regular reviews"
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family"
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Hybrid work options and flexible hours"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and certifications"
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Collaborative environment with regular team events"
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Clear career paths and promotion opportunities"
    }
  ];

  return (
    <>
      <SEO 
        title="Careers"
        description="Join AO+ Solutions. Build the future of Indian MSME technology. Open positions in engineering, marketing, sales, and more."
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
            <Badge className="mb-4">Join Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Build the Future of Indian MSME Tech
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Join a team that's democratizing enterprise-grade technology for 63M+ Indian MSMEs. 
              We're always looking for passionate people who want to make an impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Perks</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Work at AO+?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We take care of our team so they can take care of our customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
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

      {/* Open Positions */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4" variant="secondary">Open Positions</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {jobs.length} open positions across {departments.length} departments
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedDepartment("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDepartment === "all"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          {job.salary && (
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              ₹{(job.salary.min / 100000).toFixed(1)}L - ₹{(job.salary.max / 100000).toFixed(1)}L
                            </span>
                          )}
                        </div>
                      </div>

                      <a 
                        href={`mailto:${job.applyEmail}?subject=Application for ${job.title}`}
                        className="flex-shrink-0"
                      >
                        <Button className="gap-2">
                          <Send className="w-4 h-4" />
                          Apply Now
                        </Button>
                      </a>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                No open positions in this department currently. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* General Application CTA */}
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
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your resume 
              and we'll reach out when a suitable position opens up.
            </p>
            <a href="mailto:careers@aoplus.in?subject=General Application">
              <Button size="lg" variant="secondary" className="gap-2">
                Send Resume
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;
