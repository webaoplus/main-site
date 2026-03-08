import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brands } from "@/lib/brands";

const BrandCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          // Scroll back to start
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll right
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-lg bg-white dark:bg-slate-800"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-lg bg-white dark:bg-slate-800"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        onScroll={checkScrollability}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex-shrink-0 w-80 snap-start"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.name.charAt(0)}
                  </div>
                  <a
                    href={brand.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {brand.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {brand.role}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {brand.shortDesc}
                </p>

                {brand.metrics && (
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {brand.metrics.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          {metric.value}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href={brand.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Visit {brand.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicators */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {brands.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
