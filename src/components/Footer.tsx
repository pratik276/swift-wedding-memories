
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-[#1a120b] text-white text-center mt-auto border-t border-[#e9c46a]/10">
      <div className="container px-4 max-w-4xl mx-auto relative">
        {/* Natural decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-[#e9c46a] opacity-5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.07, 0.05]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute bottom-[10%] right-[5%] w-32 h-32 rounded-full bg-[#ddbea9] opacity-5 blur-3xl"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </div>
        
        <div className="mb-8 flex flex-col items-center">
          <h3 className="text-3xl font-playfair text-[#e9c46a] mb-4 tracking-tight">Pratik & Ashma</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-12 bg-[#ddbea9]/40"></div>
            <div className="mx-4 w-2 h-2 bg-[#e9c46a]"></div>
            <div className="h-[1px] w-12 bg-[#ddbea9]/40"></div>
          </div>
        </div>
        
        <p className="mb-6 text-lg font-light tracking-wide text-[#ddbea9]">
          © {currentYear} | Forever and Always
        </p>
        <p className="text-[#ddbea9]/70 max-w-md mx-auto font-light text-sm">
          Thank you for being a part of our journey. Your presence in our lives has made it all the more meaningful.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
