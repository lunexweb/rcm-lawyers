import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Scale, ArrowRight, Award, Users2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollEffects } from "@/hooks/use-scroll-effects";

const highlights = [
  {
    icon: Scale,
    title: "Unmatched Expertise",
    description: "Distinguished attorneys with decades of combined experience in complex legal matters.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Recognized internationally for outstanding client outcomes and legal innovation.",
  },
  {
    icon: Users2,
    title: "Client-Focused",
    description: "Personalized service tailored to the unique needs of discerning clients.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Solutions",
    description: "Forward-thinking legal strategies that protect and advance your interests.",
  },
];

const Index = () => {
  const { scrollProgress } = useScrollEffects();

  return (
    <div className="min-h-screen overflow-x-hidden scroll-luxury">
      <Navigation />
      <Hero />

      {/* Why Choose Us Section */}
      <section className="section-padding luxury-gradient scroll-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12 sm:mb-16 gpu-accelerated"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
              Why Choose <span className="text-gradient-gold">RMC Attorneys</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Delivering exceptional legal services with unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="gpu-accelerated"
              >
                <Card className="p-4 sm:p-6 luxury-white-bg border-border/30 hover:border-primary/50 luxury-transition group text-center h-full luxury-shadow hover:shadow-2xl hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-4 inline-block gpu-accelerated"
                  >
                    <highlight.icon className="w-10 h-10 sm:w-12 sm:h-12 text-dark-blue" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-serif font-semibold mb-3 text-gray-800 leading-tight">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-center gpu-accelerated"
          >
            <Link to="/about">
              <Button variant="premium" size="lg" className="group mobile-button-stable">
                Discover Our Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden scroll-section">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 bg-image-stable"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1759698576/lady-justice-2388500_1280_jitsfs.jpg')"
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 gpu-accelerated"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Experience <span className="text-gradient-gold">Excellence?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential consultation with our distinguished legal team today.
          </p>
          <Link to="/contact">
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button variant="premium" size="lg" className="shadow-lg mobile-button-stable luxury-transition hover:shadow-2xl">
                Contact Us Today
                <ArrowRight className="ml-2 luxury-transition group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;