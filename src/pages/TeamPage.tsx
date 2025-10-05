import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const directors = [
  {
    name: "Mr Wilson Tshivhasa Rambau",
    title: "Director",
    expertise: "Legal Practice, Corporate Governance",
    initials: "WR",
    bio: "Experienced legal practitioner with extensive knowledge in corporate law and legal practice management.",
    achievements: ["Director of RMC Attorneys", "Expert in corporate governance", "Dedicated to serving clients with pride"],
  },
  {
    name: "Mr Lufuno Norman Madzwara",
    title: "Director",
    expertise: "Legal Practice, Client Relations",
    initials: "LM",
    bio: "Committed legal professional focused on delivering exceptional legal services and maintaining strong client relationships.",
    achievements: ["Director of RMC Attorneys", "Specialist in client relations", "Committed to legal excellence"],
  },
  {
    name: "Mr Musa Bornfree Chauke",
    title: "Director",
    expertise: "Legal Practice, Strategic Planning",
    initials: "MC",
    bio: "Strategic legal practitioner with a focus on comprehensive legal solutions and firm development.",
    achievements: ["Director of RMC Attorneys", "Strategic planning expert", "Dedicated to firm growth and excellence"],
  },
];

const attorneys = [
  {
    name: "Mahlatse Masha",
    title: "Senior Attorney",
    expertise: "Corporate Law, Commercial Litigation",
    initials: "MM",
    bio: "Dedicated attorney committed to providing quality legal services and representing clients with integrity and professionalism.",
    achievements: ["Qualified attorney at RMC Attorneys", "Expert in corporate law", "Committed to legal excellence"],
  },
  {
    name: "Thabo Mthembu",
    title: "Attorney",
    expertise: "Criminal Defense, Civil Litigation",
    initials: "TM",
    bio: "Experienced attorney specializing in criminal defense and civil litigation with a track record of successful case outcomes.",
    achievements: ["Qualified attorney at RMC Attorneys", "Specialist in criminal defense", "Dedicated to justice and client advocacy"],
  },
  {
    name: "Nomsa Dlamini",
    title: "Attorney",
    expertise: "Family Law, Estate Planning",
    initials: "ND",
    bio: "Compassionate attorney focused on family law matters and estate planning, providing personalized legal solutions.",
    achievements: ["Qualified attorney at RMC Attorneys", "Family law specialist", "Committed to client welfare"],
  },
];

const staff = [
  {
    name: "Prince Ramanala",
    title: "Office Manager",
    expertise: "Office Administration, Client Services",
    initials: "PR",
    bio: "Experienced office manager ensuring smooth operations and excellent client service delivery.",
    achievements: ["Office Manager at RMC Attorneys", "Expert in office administration", "Dedicated to operational excellence"],
  },
  {
    name: "Sarah Johnson",
    title: "Legal Secretary",
    expertise: "Document Management, Client Communication",
    initials: "SJ",
    bio: "Detail-oriented legal secretary providing comprehensive administrative support and maintaining efficient document management systems.",
    achievements: ["Legal Secretary at RMC Attorneys", "Expert in document management", "Committed to client service excellence"],
  },
  {
    name: "David Mokoena",
    title: "Paralegal",
    expertise: "Legal Research, Case Preparation",
    initials: "DM",
    bio: "Skilled paralegal assisting attorneys with research, case preparation, and client support to ensure optimal legal outcomes.",
    achievements: ["Paralegal at RMC Attorneys", "Expert in legal research", "Dedicated to supporting legal excellence"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const TeamPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1759698992/conference-1886021_1280_ejw2ij.jpg')"
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
            Our <span className="text-gradient-gold">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words"
          >
            Dedicated legal professionals committed to serving our clients with pride and excellence.
          </motion.p>
        </motion.div>
      </section>

      {/* Directors Section */}
      <section className="py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight break-words">
            <span className="text-gradient-gold">Directors</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed break-words">
            Our leadership team guiding the firm with vision and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {directors.map((director, index) => (
            <motion.div key={director.name} variants={cardVariants}>
              <Card className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4 sm:mb-6"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-gold-subtle flex items-center justify-center text-xl sm:text-2xl font-serif font-bold text-primary-foreground shadow-lg">
                      {director.initials}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 text-foreground leading-tight break-words">{director.name}</h3>
                    <p className="text-red-accent font-medium mb-1 text-sm sm:text-base break-words">{director.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed break-words">{director.expertise}</p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm break-words">{director.bio}</p>
                    
                    <div className="space-y-2 mb-4">
                      {director.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <Award size={12} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed break-words">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Attorneys Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            <span className="text-gradient-gold">Attorneys</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our qualified legal professionals dedicated to client success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {attorneys.map((attorney, index) => (
            <motion.div key={attorney.name} variants={cardVariants}>
              <Card className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                
                <div className="relative flex flex-col md:flex-row gap-4 sm:gap-6">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-gold-subtle flex items-center justify-center text-2xl sm:text-3xl font-serif font-bold text-primary-foreground shadow-lg">
                      {attorney.initials}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-1 text-foreground leading-tight">{attorney.name}</h3>
                    <p className="text-red-accent font-medium mb-1 text-sm sm:text-base">{attorney.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{attorney.expertise}</p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{attorney.bio}</p>
                    
                    <div className="space-y-2 mb-4">
                      {attorney.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <Award size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-primary transition-colors mobile-button-stable"
                      >
                        <Mail size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-primary transition-colors mobile-button-stable"
                      >
                        <Linkedin size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Staff Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 relative"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 -z-10"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1759699102/people-2569234_1280_fuoodb.jpg')"
            }}
          ></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            <span className="text-gradient-gold">Staff</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our dedicated support team ensuring excellent service delivery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {staff.map((member, index) => (
            <motion.div key={member.name} variants={cardVariants}>
              <Card className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden h-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                
                <div className="relative flex flex-col md:flex-row gap-4 sm:gap-6">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-gold-subtle flex items-center justify-center text-2xl sm:text-3xl font-serif font-bold text-primary-foreground shadow-lg">
                      {member.initials}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-1 text-foreground leading-tight">{member.name}</h3>
                    <p className="text-red-accent font-medium mb-1 text-sm sm:text-base">{member.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{member.expertise}</p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{member.bio}</p>
                    
                    <div className="space-y-2 mb-4">
                      {member.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <Award size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-primary transition-colors mobile-button-stable"
                      >
                        <Mail size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-muted-foreground hover:text-primary transition-colors mobile-button-stable"
                      >
                        <Linkedin size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dnnwvmh3n/image/upload/v1759698530/ai-generated-8862441_1280_bccifz.jpg')"
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide our team and define our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                title: "Excellence",
                description: "We strive for the highest standards in all our legal services and client interactions.",
                icon: "⭐"
              },
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards and transparency in all our dealings.",
                icon: "⚖️"
              },
              {
                title: "Dedication",
                description: "We are committed to serving our clients with unwavering dedication and professionalism.",
                icon: "🎯"
              },
              {
                title: "Innovation",
                description: "We embrace modern legal practices and innovative solutions for our clients.",
                icon: "💡"
              }
            ].map((value, index) => (
              <motion.div key={value.title} variants={cardVariants}>
                <Card className="p-4 sm:p-6 text-center bg-card/50 border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden h-full">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                  />
                  
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{value.icon}</div>
                    <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 sm:mb-3 text-foreground leading-tight">{value.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;