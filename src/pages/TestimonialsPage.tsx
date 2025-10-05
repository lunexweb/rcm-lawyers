import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const testimonials = [
  {
    quote: "RMC Attorneys' expertise in corporate restructuring was invaluable. Their strategic counsel helped us navigate a complex merger with absolute precision and professionalism.",
    author: "Sarah Mitchell",
    position: "CEO, TechVentures Group",
    rating: 5,
    year: "2024",
  },
  {
    quote: "The litigation team's mastery of commercial law is unparalleled. They secured an outstanding outcome in our high-stakes dispute, exceeding all expectations.",
    author: "Robert Harrison",
    position: "Managing Director, Harrison Industries",
    rating: 5,
    year: "2023",
  },
  {
    quote: "Their wealth management practice provided sophisticated tax strategies that exceeded all expectations. Truly exceptional service and attention to detail.",
    author: "Catherine Du Plessis",
    position: "Private Investor",
    rating: 5,
    year: "2024",
  },
  {
    quote: "The real estate team handled our $50M commercial transaction flawlessly. Professional, responsive, and incredibly knowledgeable.",
    author: "David Chen",
    position: "CEO, Prestige Properties",
    rating: 5,
    year: "2023",
  },
  {
    quote: "Outstanding IP counsel that protected our innovations and guided our licensing strategy with exceptional expertise.",
    author: "Dr. Amara Nkosi",
    position: "CTO, InnovateTech",
    rating: 5,
    year: "2024",
  },
  {
    quote: "Their employment law expertise saved us millions during a complex restructuring. Strategic, practical, and results-oriented.",
    author: "Michael Thompson",
    position: "HR Director, Global Corp",
    rating: 5,
    year: "2023",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight break-words"
          >
            Client <span className="text-gradient-gold">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words"
          >
            Distinguished clients share their experiences with our exceptional legal services.
          </motion.p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={`${testimonial.author}-${index}`} variants={cardVariants}>
              <Card className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden h-full flex flex-col">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <div className="relative flex-1 flex flex-col">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/30 mb-4" />
                  </motion.div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic flex-1 break-words">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="font-semibold text-foreground text-sm sm:text-base leading-tight break-words">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">{testimonial.position}</p>
                    <p className="text-xs text-primary mt-1 break-words">{testimonial.year}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;