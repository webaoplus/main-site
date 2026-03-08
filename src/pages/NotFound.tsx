import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/shared/SEO";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noIndex={true}
      />
      
      <section className="pt-24 pb-16 min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto"
          >
            {/* 404 Illustration */}
            <div className="relative mb-8">
              <div className="text-9xl font-bold text-slate-100 dark:text-slate-800 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been 
              moved, deleted, or you may have typed the URL incorrectly.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <button onClick={() => window.history.back()}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </Button>
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Popular pages you might be looking for:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Services", href: "/services" },
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Careers", href: "/careers" }
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
