
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center mt-auto">
      <div className="container px-4">
        <p className="mb-2 flex items-center justify-center">
          © {currentYear} Pratik & Ashma. Made with 
          <Heart className="h-4 w-4 text-rose-light animate-pulse mx-1 fill-rose-light" />
        </p>
        <p className="text-gray-300">Thank you for being a part of our journey.</p>
      </div>
    </footer>
  );
};

export default Footer;
