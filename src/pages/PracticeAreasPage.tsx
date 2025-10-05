import { motion } from "framer-motion";
import { Scale, Building2, Briefcase, Users, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Strategic legal counsel for mergers, acquisitions, corporate governance, and commercial transactions.",
    details: "Our corporate law practice provides comprehensive guidance on complex business matters, ensuring compliance and strategic advantage.",
  },
  {
    icon: Scale,
    title: "Litigation & Dispute Resolution",
    description: "Aggressive representation in complex commercial litigation and alternative dispute resolution.",
    details: "Experienced trial attorneys with a proven track record in high-stakes commercial disputes and arbitration proceedings.",
  },
  {
    icon: TrendingUp,
    title: "Wealth Management & Tax",
    description: "Sophisticated estate planning, asset protection, and tax optimization strategies.",
    details: "Tailored solutions for high-net-worth individuals and families seeking to preserve and grow their wealth across generations.",
  },
  {
    icon: Briefcase,
    title: "Real Estate & Property",
    description: "Expert guidance on high-value property transactions, development, and investment structures.",
    details: "Comprehensive legal support for commercial and residential real estate transactions, development projects, and property portfolios.",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description: "Comprehensive IP protection, licensing, and enforcement for innovative enterprises.",
    details: "Strategic counsel on patents, trademarks, copyrights, and trade secrets to protect your competitive advantage.",
  },
  {
    icon: Users,
    title: "Employment & Labor Law",
    description: "Strategic counsel on executive agreements, labor relations, and workplace compliance.",
    details: "Expert guidance on employment contracts, workforce restructuring, and labor dispute resolution.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const PracticeAreasPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1759698672/hammer-802298_1280_sctxpn.jpg')"
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight break-words"
          >
            Practice <span className="text-gradient-gold">Areas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words"
          >
            Comprehensive legal expertise across diverse practice areas, delivering exceptional results for our most discerning clients.
          </motion.p>
        </motion.div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {practiceAreas.map((area) => (
            <motion.div key={area.title} variants={itemVariants}>
              <Card className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 group h-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <area.icon className="w-12 h-12 sm:w-14 sm:h-14 text-primary mb-4 sm:mb-6" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 text-foreground leading-tight break-words">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base break-words">{area.description}</p>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed break-words">{area.details}</p>
                <motion.div
                  className="mt-4 sm:mt-6 text-primary font-medium text-xs sm:text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAreasPage;