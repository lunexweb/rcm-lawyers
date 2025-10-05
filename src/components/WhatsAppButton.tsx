import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "0659542950"; // WhatsApp number without spaces
  const message = "Hello! I would like to get legal advice from RMC Attorneys.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/27${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group mobile-button-stable"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 9999
      }}
    >
      <MessageCircle size={20} className="sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Tooltip - Hidden on mobile, shown on desktop */}
      <div className="hidden sm:block absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </motion.button>
  );
};

export default WhatsAppButton;

