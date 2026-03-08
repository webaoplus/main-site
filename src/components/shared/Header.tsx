import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  ChevronDown, 
  Sun, 
  Moon, 
  ExternalLink,
  Calendar
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { brands } from "@/lib/brands";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    return location.pathname === href;
  };

  const navLinks = siteConfig.navLinks.filter(link => !link.external);
  const externalLinks = siteConfig.navLinks.filter(link => link.external);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AO+</span>
            </div>
            <span className="font-semibold text-lg text-slate-900 dark:text-white hidden sm:block">
              Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
                }}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Brands Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                  Our Brands
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {brands.map((brand) => (
                  <DropdownMenuItem key={brand.id} asChild>
                    <a
                      href={brand.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span>{brand.name}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link to="/brands" className="cursor-pointer text-primary">
                    View All Brands
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* CTA Button - Desktop */}
            <Link to="/assessment" className="hidden lg:block">
              <Button className="gap-2">
                <Calendar className="w-4 h-4" />
                Book Assessment
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Nav Links */}
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                          isActive(link.href)
                            ? "text-primary bg-primary/10"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Brands Section */}
                  <div className="px-4">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                      Our Brands
                    </h3>
                    <div className="flex flex-col gap-2">
                      {brands.map((brand) => (
                        <a
                          key={brand.id}
                          href={brand.domain}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                        >
                          {brand.name}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile External Links */}
                  <div className="flex flex-col gap-2">
                    {externalLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <Link
                    to="/assessment"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-4"
                  >
                    <Button className="w-full gap-2">
                      <Calendar className="w-4 h-4" />
                      Book Assessment
                    </Button>
                  </Link>

                  {/* Mobile Theme Toggle */}
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => {
                      toggleTheme();
                    }}
                  >
                    {resolvedTheme === "dark" ? (
                      <>
                        <Sun className="w-4 h-4" />
                        Switch to Light
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" />
                        Switch to Dark
                      </>
                    )}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
