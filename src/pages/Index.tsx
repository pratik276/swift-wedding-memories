
import { useState } from "react";
import TreasureMap from "@/components/TreasureMap";
import Footer from "@/components/Footer";
import AudioControl from "@/components/AudioControl";
import Confetti from "@/components/Confetti";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleMilestoneClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      {showConfetti && <Confetti />}
      
      <div className="flex flex-col items-center justify-center p-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl text-gold mb-4 font-playfair">
          Our Journey Together
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Follow the treasure map of our life milestones and memories together
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            onClick={() => navigate("/gallery")}
            className="bg-gold hover:bg-amber-400 text-black transition-colors"
          >
            Photo Gallery
          </Button>
          <Button 
            onClick={() => navigate("/videos")}
            className="bg-white hover:bg-rose text-black hover:text-white transition-colors"
          >
            Watch Videos
          </Button>
          <Button 
            onClick={() => navigate("/blog")}
            className="bg-rose hover:bg-rose-light text-white transition-colors"
          >
            Read Our Stories
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto px-4">
        <TreasureMap onMilestoneClick={handleMilestoneClick} />
      </div>
      
      <Footer />
      <AudioControl />
    </div>
  );
};

export default Index;
