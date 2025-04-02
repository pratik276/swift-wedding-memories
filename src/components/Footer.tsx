
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <div className="container px-4">
        <p className="mb-2">© {currentYear} Pratik & Ashma. Made with ❤️</p>
        <p>Thank you for being a part of our journey.</p>
      </div>
    </footer>
  );
};

export default Footer;
