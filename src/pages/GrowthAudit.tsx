import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Users, 
  Target, 
  TrendingUp,
  Check,
  Lightbulb,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import SEO from "@/components/shared/SEO";
import { serviceBundles } from "@/lib/services";

interface AuditData {
  companyName: string;
  teamSize: string;
  industry: string;
  challenges: string[];
  goals: string[];
  timeline: string;
  budget: string;
}

interface AuditResult {
  problem: string;
  bundle: typeof serviceBundles[0];
  steps: string[];
  quickWin: string;
}

const GrowthAudit = () => {
  const [step, setStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [data, setData] = useState<AuditData>({
    companyName: "",
    teamSize: "",
    industry: "",
    challenges: [],
    goals: [],
    timeline: "",
    budget: ""
  });

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      runAnalysis();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const runAnalysis = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      let recommendedBundle = serviceBundles[0];
      let problem = "";
      let steps: string[] = [];
      let quickWin = "";

      // Simple logic to determine recommendation
      const teamSizeNum = parseInt(data.teamSize) || 1;
      const budgetRange = data.budget;

      if (teamSizeNum >= 11 || budgetRange === "high") {
        recommendedBundle = serviceBundles[1]; // Growth Engine
        problem = "Your growing team needs streamlined operations and automation to scale efficiently.";
        steps = [
          "Implement full ERPNext for unified operations",
          "Set up cloud infrastructure with auto-scaling",
          "Deploy n8n workflows for process automation",
          "Launch performance marketing campaigns"
        ];
        quickWin = "Automate your lead capture and follow-up process to increase conversion by 25%";
      } else if (teamSizeNum >= 50 || data.challenges.includes("cloud-costs")) {
        recommendedBundle = serviceBundles[2]; // Enterprise FinOps
        problem = "Your cloud infrastructure costs are scaling faster than your business.";
        steps = [
          "Deploy Prodory for comprehensive cost monitoring",
          "Rightsize your cloud resources",
          "Implement reserved instance strategy",
          "Set up automated cost alerts and governance"
        ];
        quickWin = "Identify and eliminate idle resources to save 20-30% immediately";
      } else {
        recommendedBundle = serviceBundles[0]; // Digital Foundation
        problem = "You need a solid digital foundation to establish your online presence.";
        steps = [
          "Build a professional website",
          "Set up Google Business Profile",
          "Configure professional email",
          "Implement basic ERPNext for operations"
        ];
        quickWin = "Optimize your Google Business listing to increase local visibility by 40%";
      }

      setResult({
        problem,
        bundle: recommendedBundle,
        steps,
        quickWin
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const updateData = (key: keyof AuditData, value: string | string[]) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const toggleArrayValue = (key: "challenges" | "goals", value: string) => {
    setData(prev => {
      const current = prev[key];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  if (result) {
    return (
      <>
        <SEO title="Your AI Growth Audit Results" />
        <section className="pt-24 pb-16 min-h-[calc(100vh-64px)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Your Growth Audit Results
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Based on your responses, here's our AI-powered recommendation
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Problem Diagnosis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-red-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Core Problem
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {result.problem}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recommended Bundle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Recommended Bundle
                      </h3>
                    </div>
                    <p className="text-xl font-semibold text-primary mb-2">
                      {result.bundle.title}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {result.bundle.description}
                    </p>
                    <a href={`/contact?bundle=${result.bundle.id}`}>
                      <Button className="gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Actionable Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Actionable Steps
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {result.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-blue-600">{idx + 1}</span>
                          </div>
                          <span className="text-slate-600 dark:text-slate-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Win */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-green-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Quick Win
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {result.quickWin}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <a href="/contact">
                <Button size="lg" className="gap-2">
                  Talk to Our Team
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="AI Growth Audit"
        description="Get a free AI-powered growth audit. Discover your biggest growth opportunities in 60 seconds."
      />

      <section className="pt-24 pb-16 min-h-[calc(100vh-64px)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="mb-4">Free Tool</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI Growth Audit
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Answer a few questions and get personalized recommendations
            </p>
          </motion.div>

          <Card>
            <CardContent className="p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <span>Step {step + 1} of {totalSteps}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {isAnalyzing ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Analyzing Your Business...
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our AI is processing your responses to generate personalized recommendations
                  </p>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  {/* Step 1: Basic Info */}
                  {step === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Tell us about your business
                      </h2>

                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          value={data.companyName}
                          onChange={(e) => updateData("companyName", e.target.value)}
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Team Size</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {["1-10", "11-50", "51-200", "200+"].map((size) => (
                            <button
                              key={size}
                              onClick={() => updateData("teamSize", size)}
                              className={`p-3 rounded-lg border text-left transition-colors ${
                                data.teamSize === size
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                              }`}
                            >
                              <Users className="w-5 h-5 mb-1" />
                              <span className="text-sm font-medium">{size} people</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Industry</Label>
                        <select
                          value={data.industry}
                          onChange={(e) => updateData("industry", e.target.value)}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                        >
                          <option value="">Select industry</option>
                          <option value="technology">Technology</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance</option>
                          <option value="logistics">Logistics</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Challenges */}
                  {step === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                        What challenges are you facing?
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400">
                        Select all that apply
                      </p>

                      <div className="grid gap-3">
                        {[
                          { id: "online-presence", label: "Limited online presence" },
                          { id: "operations", label: "Inefficient operations" },
                          { id: "cloud-costs", label: "High cloud infrastructure costs" },
                          { id: "lead-generation", label: "Difficulty generating leads" },
                          { id: "automation", label: "Manual processes taking too much time" },
                          { id: "scaling", label: "Challenges scaling technology" }
                        ].map((challenge) => (
                          <button
                            key={challenge.id}
                            onClick={() => toggleArrayValue("challenges", challenge.id)}
                            className={`p-4 rounded-lg border text-left flex items-center gap-3 transition-colors ${
                              data.challenges.includes(challenge.id)
                                ? "border-primary bg-primary/10"
                                : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                            }`}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                              data.challenges.includes(challenge.id)
                                ? "bg-primary border-primary"
                                : "border-slate-300 dark:border-slate-600"
                            }`}>
                              {data.challenges.includes(challenge.id) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className={data.challenges.includes(challenge.id) ? "text-primary" : ""}>
                              {challenge.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Goals */}
                  {step === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                        What are your goals?
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400">
                        Select your top priorities
                      </p>

                      <div className="grid gap-3">
                        {[
                          { id: "increase-revenue", label: "Increase revenue" },
                          { id: "reduce-costs", label: "Reduce operational costs" },
                          { id: "improve-efficiency", label: "Improve efficiency" },
                          { id: "scale-operations", label: "Scale operations" },
                          { id: "better-online", label: "Establish better online presence" },
                          { id: "automate", label: "Automate manual processes" }
                        ].map((goal) => (
                          <button
                            key={goal.id}
                            onClick={() => toggleArrayValue("goals", goal.id)}
                            className={`p-4 rounded-lg border text-left flex items-center gap-3 transition-colors ${
                              data.goals.includes(goal.id)
                                ? "border-primary bg-primary/10"
                                : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                            }`}
                          >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                              data.goals.includes(goal.id)
                                ? "bg-primary border-primary"
                                : "border-slate-300 dark:border-slate-600"
                            }`}>
                              {data.goals.includes(goal.id) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className={data.goals.includes(goal.id) ? "text-primary" : ""}>
                              {goal.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Timeline & Budget */}
                  {step === 3 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Timeline & Budget
                      </h2>

                      <div className="space-y-2">
                        <Label>When do you want to start?</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { id: "immediate", label: "Immediately" },
                            { id: "1-month", label: "Within 1 month" },
                            { id: "3-months", label: "Within 3 months" },
                            { id: "planning", label: "Just planning" }
                          ].map((timeline) => (
                            <button
                              key={timeline.id}
                              onClick={() => updateData("timeline", timeline.id)}
                              className={`p-3 rounded-lg border text-left transition-colors ${
                                data.timeline === timeline.id
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                              }`}
                            >
                              <span className="text-sm font-medium">{timeline.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Budget Range</Label>
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { id: "low", label: "Under ₹50,000" },
                            { id: "medium", label: "₹50,000 - ₹3,00,000" },
                            { id: "high", label: "₹3,00,000+" },
                            { id: "custom", label: "Need to discuss" }
                          ].map((budget) => (
                            <button
                              key={budget.id}
                              onClick={() => updateData("budget", budget.id)}
                              className={`p-3 rounded-lg border text-left transition-colors ${
                                data.budget === budget.id
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                              }`}
                            >
                              <span className="text-sm font-medium">{budget.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Navigation */}
              {!isAnalyzing && (
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="gap-2"
                  >
                    {step === totalSteps - 1 ? (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Get Results
                      </>
                    ) : (
                      <>
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default GrowthAudit;
