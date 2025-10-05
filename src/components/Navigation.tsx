import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform mobile-stable">
            <Logo className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
            <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-gradient-gold leading-tight">
              RMC Attorneys
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            <Link
              to="/"
              className={`transition-colors text-sm lg:text-base whitespace-nowrap ${isActive("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Home
            </Link>
            <Link
              to="/practice-areas"
              className={`transition-colors text-sm lg:text-base whitespace-nowrap ${isActive("/practice-areas") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Practice Areas
            </Link>
            <Link
              to="/about"
              className={`transition-colors text-sm lg:text-base whitespace-nowrap ${isActive("/about") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              About
            </Link>
            <Link
              to="/team"
              className={`transition-colors text-sm lg:text-base whitespace-nowrap ${isActive("/team") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Attorneys
            </Link>
            <Link
              to="/testimonials"
              className={`transition-colors text-sm lg:text-base whitespace-nowrap ${isActive("/testimonials") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Testimonials
            </Link>
            <Link to="/contact">
              <Button variant="premium" size="sm" className="mobile-button-stable">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground mobile-button-stable" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in mobile-stable">
            <Link
              to="/"
              className={`transition-colors text-left py-2 mobile-text-stable ${isActive("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Home
            </Link>
            <Link
              to="/practice-areas"
              className={`transition-colors text-left py-2 mobile-text-stable ${isActive("/practice-areas") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Practice Areas
            </Link>
            <Link
              to="/about"
              className={`transition-colors text-left py-2 mobile-text-stable ${isActive("/about") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              About
            </Link>
            <Link
              to="/team"
              className={`transition-colors text-left py-2 mobile-text-stable ${isActive("/team") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Attorneys
            </Link>
            <Link
              to="/testimonials"
              className={`transition-colors text-left py-2 mobile-text-stable ${isActive("/testimonials") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Testimonials
            </Link>
            <Link to="/contact" className="mt-2">
              <Button variant="premium" size="sm" className="w-full mobile-button-stable">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;