import { motion } from "framer-motion";
import { Award, Target, Users2, TrendingUp, Globe, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Unwavering commitment to the highest standards of legal practice and client service.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to detail in every matter, ensuring optimal outcomes.",
  },
  {
    icon: Users2,
    title: "Partnership",
    description: "Building lasting relationships founded on trust, transparency, and mutual success.",
  },
];

const stats = [
  { icon: TrendingUp, value: "500+", label: "Cases Won" },
  { icon: Users2, value: "95%", label: "Client Satisfaction" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Clock, value: "25+", label: "Years Experience" },
];

const AboutPage = () => {

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight"
          >
            About <span className="text-gradient-gold">RMC Attorneys</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Distinguished legal excellence serving the world's most discerning clients since 1998.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 luxury-white-soft-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-dark-blue mx-auto" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gradient-gold mb-2 break-words">{stat.value}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 bg-image-stable"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1759698607/legal-5293006_1280_mok8ur.jpg')"
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight break-words">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed break-words">
                Founded with a commitment to excellence, RMC Attorneys has established itself as a trusted choice for sophisticated legal counsel in South Africa and beyond. Our journey began with a simple yet profound mission: to serve our clients with pride and deliver legal services of unparalleled excellence.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed break-words">
                Today, our team of accomplished attorneys brings deep expertise across diverse practice areas, serving multinational corporations, high-net-worth individuals, and prestigious institutions that demand nothing less than exceptional legal representation.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">
                We combine traditional values of integrity and professionalism with innovative approaches to complex legal challenges, consistently delivering results that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-dark-blue" />
                  </motion.div>
                  <div className="relative flex-1">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 text-foreground leading-tight break-words">{value.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;