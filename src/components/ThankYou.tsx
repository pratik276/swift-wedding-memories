
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container px-4 max-w-3xl mx-auto text-center">
        <motion.h2 
          className="text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-light to-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thank You!
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 backdrop-blur-sm p-6 rounded-lg bg-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We are overwhelmed with love and gratitude for everyone who joined us on
          our special day. Your presence, blessings, and love made our wedding unforgettable. 
          Here's a glimpse of the magical moments we shared together.
        </motion.p>
      </div>
    </section>
  );
};

export default ThankYou;
