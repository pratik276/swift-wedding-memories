
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
      <div className="container px-4">
        <p className="mb-2">© {currentYear} Pratik & Ashma. Made with 
          <span className="text-rose-light animate-pulse mx-1">❤️</span>
        </p>
        <p className="text-gray-300">Thank you for being a part of our journey.</p>
      </div>
    </footer>
  );
};

export default Footer;
