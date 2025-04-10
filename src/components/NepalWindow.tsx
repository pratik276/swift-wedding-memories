
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface NepalWindowProps {
  onEnterSite: () => void;
}

const NepalWindow = ({ onEnterSite }: NepalWindowProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isWindowHovered, setIsWindowHovered] = useState(false);
  
  const handleWindowClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      // Play sound effect
      const audio = new Audio('/sounds/wooden-door-open.mp3');
      audio.volume = 0.4;
      audio.play().catch(e => console.log("Audio playback prevented:", e));
      
      // Wait for animation to complete before transitioning
      setTimeout(onEnterSite, 1800);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#2c1810] to-[#1a0f09] z-50 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Ambient nature background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-24 h-24 bg-[#ffb70033] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-[#83c5be33] rounded-full blur-3xl"></div>
        
        {/* Subtle leaf particles floating */}
        <motion.div 
          className="absolute top-[15%] left-[25%] w-2 h-4 bg-[#a3b18a] rotate-45 opacity-20"
          animate={{ 
            y: [0, 40, 80], 
            x: [0, 5, 0, -5, 0],
            rotate: [45, 90, 180, 270, 360],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute top-[25%] right-[35%] w-3 h-5 bg-[#a3b18a] rotate-15 opacity-20"
          animate={{ 
            y: [0, 60, 120], 
            x: [0, 8, 0, -8, 0],
            rotate: [15, 80, 160, 240, 320],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>
      
      {/* Floating text above window */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-[#e9c46a] font-playfair text-xl mb-2">Welcome to Our Journey</h2>
        <p className="text-[#ddbea9] italic text-sm">Click on the window to enter</p>
      </motion.div>

      {/* Realistic Nepali-style wooden window */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full max-w-3xl aspect-[3/2] cursor-pointer"
          onClick={handleWindowClick}
          onMouseEnter={() => setIsWindowHovered(true)}
          onMouseLeave={() => setIsWindowHovered(false)}
        >
          {/* Main window frame - outer wooden frame */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513] to-[#5D2906] rounded-lg shadow-2xl overflow-hidden">
            {/* Real wood grain texture */}
            <div className="absolute inset-0 opacity-80 mix-blend-overlay" 
                style={{backgroundImage: "url('/images/wood-grain-texture.jpg')", backgroundSize: "cover"}}></div>
            
            {/* Carved decorative elements on frame */}
            <div className="absolute inset-x-0 top-0 h-8 flex justify-center items-center">
              <div className="w-1/3 h-3 bg-[#3d2314] rounded-b-xl opacity-70"></div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-8 flex justify-center items-center">
              <div className="w-2/3 h-4 bg-[#3d2314] rounded-t-md opacity-70"></div>
            </div>
            <div className="absolute inset-y-0 left-0 w-8 flex justify-center items-center">
              <div className="h-1/3 w-3 bg-[#3d2314] rounded-r-xl opacity-70"></div>
            </div>
            <div className="absolute inset-y-0 right-0 w-8 flex justify-center items-center">
              <div className="h-1/3 w-3 bg-[#3d2314] rounded-l-xl opacity-70"></div>
            </div>
            
            {/* Left window panel (will animate) */}
            <motion.div 
              className="absolute top-[8%] left-[8%] w-[40%] h-[84%] bg-gradient-to-br from-[#6b4423] to-[#5D2906] border-4 border-[#3d2314] rounded"
              style={{
                backgroundImage: "url('/images/wood-grain-texture.jpg')",
                backgroundSize: "cover",
                transformOrigin: "left",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.4)"
              }}
              animate={isOpening ? { rotateY: 85 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Window panel details */}
              <div className="absolute inset-[15%] border-[6px] border-[#3d2314] bg-transparent rounded"></div>
              
              {/* Window handle */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-14 bg-[#382A21] rounded-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#B89470] rounded-full"></div>
            </motion.div>
            
            {/* Right window panel (will animate) */}
            <motion.div 
              className="absolute top-[8%] right-[8%] w-[40%] h-[84%] bg-gradient-to-br from-[#6b4423] to-[#5D2906] border-4 border-[#3d2314] rounded"
              style={{
                backgroundImage: "url('/images/wood-grain-texture.jpg')",
                backgroundSize: "cover",
                transformOrigin: "right",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.4)"
              }}
              animate={isOpening ? { rotateY: -85 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Window panel details */}
              <div className="absolute inset-[15%] border-[6px] border-[#3d2314] bg-transparent rounded"></div>
              
              {/* Window handle */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-14 bg-[#382A21] rounded-full"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#B89470] rounded-full"></div>
            </motion.div>
            
            {/* Window view (visible when opened) */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ 
                backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/nepal-mountains.jpg')",
                backgroundSize: "cover", 
                backgroundPosition: "center",
                zIndex: -1
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isOpening ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-center px-8"
              >
                <h1 className="text-4xl md:text-5xl font-playfair text-[#e9c46a] mb-4">
                  Pratik & Ashma
                </h1>
                <p className="text-[#f1faee] text-lg md:text-xl max-w-md mx-auto font-light">
                  A journey of love through the mountains and valleys of life
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Window sill with realistic wood texture */}
          <div className="absolute -bottom-8 left-[5%] w-[90%] h-8 bg-gradient-to-b from-[#8B4513] to-[#5D2906] rounded-b-lg shadow-md">
            <div className="absolute inset-0 opacity-80 mix-blend-overlay" 
                style={{backgroundImage: "url('/images/wood-grain-texture.jpg')", backgroundSize: "cover"}}></div>
          </div>

          {/* Hover effect indicator */}
          {isWindowHovered && !isOpening && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 border-2 border-[#e9c46a] rounded-lg pointer-events-none"
            ></motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Floating text below window */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 text-[#ddbea9] text-center max-w-md italic"
      >
        "Every window opened becomes a new chapter in our story..."
      </motion.p>
    </div>
  );
};

export default NepalWindow;
