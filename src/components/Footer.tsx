
import { ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-black text-white text-center mt-auto border-t border-white/5">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col items-center">
          <h3 className="text-3xl font-playfair text-white mb-4 tracking-tight">Pratik & Ashma</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <div className="mx-4 w-2 h-2 bg-gold"></div>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
        </div>
        
        <p className="mb-6 text-lg font-light tracking-wide">
          © {currentYear} | Forever and Always
        </p>
        <p className="text-gray-500 max-w-md mx-auto font-light text-sm">
          Thank you for being a part of our journey. Your presence in our lives has made it all the more meaningful.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
