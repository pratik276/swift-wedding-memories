
import { useState, useEffect } from "react";
import TreasureMap from "@/components/TreasureMap";
import Footer from "@/components/Footer";
import AudioControl from "@/components/AudioControl";
import Confetti from "@/components/Confetti";
import NepalWindow from "@/components/NepalWindow";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Image, BookOpen, Play } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showInitialScreen, setShowInitialScreen] = useState(true);

  const handleMilestoneClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleEnterSite = () => {
    setShowInitialScreen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {showInitialScreen ? (
        <NepalWindow onEnterSite={handleEnterSite} />
      ) : (
        <>
          {showConfetti && <Confetti />}
          
          {/* Hero Section - more natural and warm */}
          <div className="h-[80vh] relative bg-gradient-to-b from-[#1a120b] to-[#3c2a21] flex flex-col items-center justify-center overflow-hidden">
            {/* Natural texture overlay */}
            <div className="absolute inset-0 opacity-10" 
                style={{backgroundImage: "url('/images/natural-paper-texture.jpg')", backgroundSize: "cover"}}></div>
            
            {/* Warm light effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
              <div className="w-full h-full bg-[#e9c46a] opacity-5 blur-3xl rounded-full"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center p-6 z-10"
            >
              <h1 className="text-6xl md:text-7xl text-[#e9c46a] font-playfair mb-8 tracking-tight">
                Our Journey Together
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl font-light text-[#ddbea9] tracking-wide">
                Follow the timeline of our moments and memories
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <Button 
                  onClick={() => navigate("/gallery")}
                  className="bg-transparent border border-[#e9c46a]/30 text-[#e9c46a] hover:bg-[#e9c46a]/10 transition-all px-8 py-6 rounded-sm flex items-center gap-3"
                >
                  <Image className="w-5 h-5" />
                  <span className="text-lg">Gallery</span>
                </Button>
                <Button 
                  onClick={() => navigate("/videos")}
                  className="bg-transparent border border-[#e9c46a]/30 text-[#e9c46a] hover:bg-[#e9c46a]/10 transition-all px-8 py-6 rounded-sm flex items-center gap-3"
                >
                  <Play className="w-5 h-5" />
                  <span className="text-lg">Videos</span>
                </Button>
                <Button 
                  onClick={() => navigate("/blog")}
                  className="bg-transparent border border-[#e9c46a]/30 text-[#e9c46a] hover:bg-[#e9c46a]/10 transition-all px-8 py-6 rounded-sm flex items-center gap-3"
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="text-lg">Stories</span>
                </Button>
              </div>
            </motion.div>

            {/* Natural elements - floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute top-[20%] left-[10%] w-3 h-3 rounded-full bg-[#ddbea9] opacity-20"
                animate={{ 
                  y: [0, 30, 0], 
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute top-[40%] right-[15%] w-2 h-2 rounded-full bg-[#e9c46a] opacity-30"
                animate={{ 
                  y: [0, -20, 0], 
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              />
              <motion.div 
                className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-full bg-[#ddbea9] opacity-20"
                animate={{ 
                  y: [0, -40, 0], 
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
              />
            </div>
          </div>

          {/* Map Title Section - warmer and more natural */}
          <div className="py-20 bg-[#1a120b]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto text-center px-4"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-[1px] w-16 bg-[#e9c46a] opacity-40"></div>
                <div className="mx-4 w-2 h-2 bg-[#e9c46a]"></div>
                <div className="h-[1px] w-16 bg-[#e9c46a] opacity-40"></div>
              </div>
              <h2 className="text-4xl md:text-5xl text-[#e9c46a] font-playfair mb-6 tracking-tight">Discover Our Story</h2>
              <p className="text-lg text-[#ddbea9] max-w-2xl mx-auto font-light">
                Explore the interactive map below to witness the moments that have defined our journey
              </p>
            </motion.div>
          </div>

          {/* Treasure Map Section */}
          <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 bg-[#1a120b]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <TreasureMap onMilestoneClick={handleMilestoneClick} />
            </motion.div>
          </div>
          
          <Footer />
          <AudioControl />
        </>
      )}
    </div>
  );
};

export default Index;
