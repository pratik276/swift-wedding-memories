
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
          
          {/* Hero Section - more futuristic and minimal */}
          <div className="h-[80vh] relative bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center overflow-hidden grid-overlay">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center p-6 z-10"
            >
              <h1 className="text-6xl md:text-7xl text-white font-playfair mb-8 tracking-tight">
                Our Journey Together
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl font-light text-gray-300 tracking-wide">
                Follow the timeline of our moments and memories
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <Button 
                  onClick={() => navigate("/gallery")}
                  className="btn-futuristic px-8 py-6 rounded-sm flex items-center gap-2"
                >
                  <Image className="w-5 h-5" />
                  <span className="text-lg">Gallery</span>
                </Button>
                <Button 
                  onClick={() => navigate("/videos")}
                  className="btn-futuristic px-8 py-6 rounded-sm flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  <span className="text-lg">Videos</span>
                </Button>
                <Button 
                  onClick={() => navigate("/blog")}
                  className="btn-futuristic px-8 py-6 rounded-sm flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="text-lg">Stories</span>
                </Button>
              </div>
            </motion.div>

            {/* Futuristic background elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-10"></div>
            </div>
          </div>

          {/* Map Title Section - more minimal */}
          <div className="py-20 bg-black">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto text-center px-4"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-[1px] w-16 bg-white opacity-20"></div>
                <div className="mx-4 w-2 h-2 bg-gold"></div>
                <div className="h-[1px] w-16 bg-white opacity-20"></div>
              </div>
              <h2 className="text-4xl md:text-5xl text-white font-playfair mb-6 tracking-tight">Discover Our Story</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                Explore the interactive map below to witness the moments that have defined our journey
              </p>
            </motion.div>
          </div>

          {/* Treasure Map Section */}
          <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 bg-black">
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
