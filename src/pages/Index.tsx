
import Hero from "@/components/Hero";
import ThankYou from "@/components/ThankYou";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import AudioControl from "@/components/AudioControl";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <ThankYou />
      <Gallery />
      <Footer />
      <AudioControl />
    </div>
  );
};

export default Index;
