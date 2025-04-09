
import { useState, useEffect } from "react";
import TreasureMap from "@/components/TreasureMap";
import Footer from "@/components/Footer";
import AudioControl from "@/components/AudioControl";
import Confetti from "@/components/Confetti";
import NepalWindow from "@/components/NepalWindow";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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
          
          {/* Hero Section */}
          <div className="h-[80vh] relative bg-gradient-to-b from-slate-900 to-black flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center p-6"
            >
              <h1 className="text-6xl md:text-7xl text-gold font-playfair mb-6 tracking-tighter">
                Our Journey Together
              </h1>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light text-gray-300">
                Follow the treasure map of our life milestones and memories
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center">
                <Button 
                  onClick={() => navigate("/gallery")}
                  className="bg-gold hover:bg-amber-400 text-black px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                >
                  Photo Gallery
                </Button>
                <Button 
                  onClick={() => navigate("/videos")}
                  className="bg-white hover:bg-rose text-black hover:text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                >
                  Watch Videos
                </Button>
                <Button 
                  onClick={() => navigate("/blog")}
                  className="bg-rose hover:bg-rose-light text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                >
                  Read Stories
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Map Title Section */}
          <div className="py-16 bg-black">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="h-[1px] w-16 bg-gold"></div>
                <Heart className="mx-4 text-rose fill-rose" />
                <div className="h-[1px] w-16 bg-gold"></div>
              </div>
              <h2 className="text-4xl md:text-5xl text-gold font-playfair mb-4">Discover Our Story</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore the map below to see the milestones that have shaped our journey together
              </p>
            </motion.div>
          </div>

          {/* Treasure Map Section */}
          <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 bg-black">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
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
