import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://res.cloudinary.com/dnnwvmh3n/video/upload/v1759669463/254922_small_wqoezr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight break-words"
        >
          Excellence in <span className="text-gradient-gold drop-shadow-lg">Legal Representation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed break-words"
        >
          Distinguished attorneys providing sophisticated legal solutions for discerning clients across South Africa and internationally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="premium" 
                size="lg" 
                className="group shadow-2xl w-full sm:w-auto mobile-button-stable"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
          <Link to="/practice-areas" className="w-full sm:w-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-2xl w-full sm:w-auto mobile-button-stable"
              >
                Our Expertise
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Decorative Elements - Hidden on mobile to prevent layout shifts */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/4 left-4 sm:left-10 w-2 h-2 bg-primary rounded-full animate-glow hidden sm:block"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-1/3 right-4 sm:right-16 w-3 h-3 bg-primary rounded-full animate-glow hidden sm:block"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;