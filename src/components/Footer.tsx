import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="luxury-gradient border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3 mb-6 hover:scale-105 transition-transform">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-serif font-bold text-gradient-gold">
                RMC Attorneys
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0">
              <span className="text-red-accent font-semibold">We serve with pride</span> - Distinguished legal excellence serving discerning clients across South Africa and internationally.
            </p>
          </div>

          {/* Location Card */}
          <div className="flex justify-center">
            <Card className="p-6 luxury-white-bg border-border/30 hover:border-primary/30 transition-all duration-300 w-full max-w-sm luxury-shadow">
              <div className="text-center">
                <div className="w-12 h-12 dark-blue-soft-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-dark-red mb-3">Our Location</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="font-medium text-gray-800">Kempton Park Office</p>
                  <p>The White House, 1st Floor</p>
                  <p>Kerk Street, Cnr Monument Rd</p>
                  <p>Kempton Park, 1619</p>
                  <p>Johannesburg, South Africa</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Card */}
          <div className="flex justify-center">
            <Card className="p-6 luxury-white-bg border-border/30 hover:border-primary/30 transition-all duration-300 w-full max-w-sm luxury-shadow">
              <div className="text-center">
                <div className="w-12 h-12 dark-blue-soft-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-dark-red mb-3">Contact Us</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={16} className="text-dark-blue" />
                    <span>010 023 4711</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={16} className="text-dark-blue" />
                    <span>065 954 2950 (WhatsApp)</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail size={16} className="text-dark-blue" />
                    <span>advice@rmcattorneys.co.za</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RMC Attorneys. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex gap-4">
                <button className="text-muted-foreground hover:text-blue-accent transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="text-muted-foreground hover:text-blue-accent transition-colors">
                  <Twitter size={20} />
                </button>
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-right">
                Coded by <a href="https://www.lunexweb.com" target="_blank" rel="noopener noreferrer" className="text-blue-accent font-medium hover:underline transition-colors">lunexweb</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
