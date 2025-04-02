
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen hero-background flex items-center justify-center text-center relative">
      <div className="container px-4 animate-fade-in">
        <h1 className="text-5xl md:text-6xl text-gold mb-4">We're Married!</h1>
        <p className="text-xl md:text-2xl text-white mb-2">
          February 13, 2025, was the day our dreams came true.
        </p>
        <p className="text-xl md:text-2xl text-white mb-8">
          Thank you for celebrating with us!
        </p>
        <Button 
          onClick={scrollToGallery}
          className="bg-white hover:bg-rose text-black hover:text-white transition-colors px-6 py-2 text-lg rounded-md"
        >
          Relive the Memories
        </Button>
      </div>
    </section>
  );
};

export default Hero;
