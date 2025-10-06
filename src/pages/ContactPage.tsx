import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    title: "Kempton Park Office",
    details: ["The White House, 1st Floor", "Kerk Street, Cnr Monument Rd", "Kempton Park, 1619", "Johannesburg, South Africa"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["010 023 4711", "065 954 2950 (WhatsApp)"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["advice@rmcattorneys.co.za"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Consultation Request Received",
      description: "Our team will contact you within 24 hours to schedule your consultation.",
    });
    
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 bg-image-stable"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1759698885/buildings-205986_1280_sqhcg4.jpg')"
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight break-words"
          >
            Contact <span className="text-gradient-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words"
          >
            Schedule a confidential consultation with our distinguished legal team.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 container mx-auto px-4 sm:px-6 lg:px-8 luxury-white-soft-bg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 sm:p-6 luxury-white-bg border-border/30 hover:border-primary/50 transition-all duration-500 group h-full luxury-shadow">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4"
                >
                  <info.icon className="w-8 h-8 sm:w-10 sm:h-10 text-dark-blue" />
                </motion.div>
                <h3 className="font-semibold text-dark-red mb-3 text-sm sm:text-base leading-tight break-words">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-xs sm:text-sm text-gray-600 leading-relaxed break-words">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-full overflow-hidden"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 sm:mb-6 leading-tight break-words">
              Schedule Your <span className="text-gradient-gold">Consultation</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed break-words">
              Whether you're facing a complex legal challenge or seeking strategic counsel, our team of distinguished attorneys is ready to provide you with exceptional service.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed break-words">
              Complete the form and one of our senior partners will personally review your inquiry and respond within 24 hours.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <div className="w-2 h-2 dark-blue-bg rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base break-words">Confidential consultation</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <div className="w-2 h-2 dark-blue-bg rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base break-words">No obligation assessment</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <div className="w-2 h-2 dark-blue-bg rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base break-words">24-hour response time</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-full overflow-hidden"
          >
            <Card className="p-6 sm:p-8 lg:p-10 luxury-white-bg border-2 border-primary/20 relative overflow-hidden luxury-shadow group hover:border-primary/40 transition-all duration-500">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/8 via-gold-subtle/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ opacity: 0 }}
              />
              
              {/* Luxury Header */}
              <div className="relative mb-6 sm:mb-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block w-full"
                >
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-gold-subtle mx-auto mb-4"></div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gradient-gold mb-2 leading-tight break-words">Request Consultation</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm break-words">Complete the form below for a confidential consultation</p>
                </motion.div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 relative w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full"
                  >
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-dark-red mb-2 sm:mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="break-words">Full Name *</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-10 sm:h-12 bg-white/80 border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40 text-sm sm:text-base"
                      disabled={isSubmitting}
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full"
                  >
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-dark-red mb-2 sm:mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="break-words">Email Address *</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-10 sm:h-12 bg-white/80 border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40 text-sm sm:text-base"
                      disabled={isSubmitting}
                      placeholder="your.email@company.com"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full"
                  >
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-dark-red mb-2 sm:mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="break-words">Phone Number</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-10 sm:h-12 bg-white/80 border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40 text-sm sm:text-base"
                      disabled={isSubmitting}
                      placeholder="+27 (0) XX XXX XXXX"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full"
                  >
                    <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-dark-red mb-2 sm:mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="break-words">Company / Organization</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-10 sm:h-12 bg-white/80 border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/40 text-sm sm:text-base"
                      disabled={isSubmitting}
                      placeholder="Your company name"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full"
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-dark-red mb-2 sm:mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="break-words">Message *</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/80 border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all duration-300 hover:border-primary/40 text-sm sm:text-base"
                    disabled={isSubmitting}
                    placeholder="Please describe your legal matter or consultation requirements..."
                  />
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="pt-4 w-full"
                >
                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-gold-subtle hover:from-primary/90 hover:to-gold-subtle/90 mobile-button-stable overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin flex-shrink-0"></div>
                        <span className="text-sm sm:text-base truncate">Processing Request...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
                        <span className="text-sm sm:text-base truncate">Request Confidential Consultation</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      </div>
                    )}
                  </Button>
                  
                  {/* Luxury Footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-4 sm:mt-6"
                  >
                    <p className="text-xs text-muted-foreground/80 leading-relaxed break-words">
                      <span className="font-semibold text-primary">Confidentiality Assured</span> • 
                      Response within 24 hours • 
                      <span className="text-gold-subtle">No obligation consultation</span>
                    </p>
                  </motion.div>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;