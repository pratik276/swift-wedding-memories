
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-black text-white text-center mt-auto border-t border-gray-800">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col items-center">
          <h3 className="text-3xl font-playfair text-gold mb-4">Pratik & Ashma</h3>
          <div className="flex items-center">
            <div className="h-[1px] w-12 bg-gray-600"></div>
            <Heart className="h-5 w-5 text-rose-light mx-3 fill-rose-light" />
            <div className="h-[1px] w-12 bg-gray-600"></div>
          </div>
        </div>
        
        <p className="mb-6 text-lg">
          © {currentYear} | Forever and Always
        </p>
        <p className="text-gray-400 max-w-md mx-auto">
          Thank you for being a part of our journey. Your presence in our lives has made it all the more meaningful.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
