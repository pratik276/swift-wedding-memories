
import Hero from "@/components/Hero";
import ThankYou from "@/components/ThankYou";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import AudioControl from "@/components/AudioControl";
import Confetti from "@/components/Confetti";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      <Confetti />
      <Hero />
      <ThankYou />
      <Gallery />
      <Footer />
      <AudioControl />
    </div>
  );
};

export default Index;
