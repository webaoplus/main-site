import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import SEO, { organizationStructuredData } from "@/components/shared/SEO";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Assessment from "@/pages/Assessment";
import Contact from "@/pages/Contact";
import GrowthAudit from "@/pages/GrowthAudit";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <SEO structuredData={organizationStructuredData} />
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/growth-audit" element={<GrowthAudit />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
