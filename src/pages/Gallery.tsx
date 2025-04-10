
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Footer from '@/components/Footer';

// Define the gallery image data
const galleryImages = [
  { id: 1, thumbnail: '/images/thumbnails/wedding1-thumb.jpg', full: '/images/wedding1-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
  { id: 2, thumbnail: '/images/thumbnails/wedding2-thumb.jpg', full: '/images/wedding2-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
  { id: 3, thumbnail: '/images/thumbnails/wedding3-thumb.jpg', full: '/images/wedding3-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
  { id: 4, thumbnail: '/images/thumbnails/wedding4-thumb.jpg', full: '/images/wedding4-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
  { id: 5, thumbnail: '/images/thumbnails/wedding5-thumb.jpg', full: '/images/wedding5-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
  { id: 6, thumbnail: '/images/thumbnails/wedding6-thumb.jpg', full: '/images/wedding6-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
  { id: 7, thumbnail: '/images/thumbnails/wedding7-thumb.jpg', full: '/images/wedding7-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
  { id: 8, thumbnail: '/images/thumbnails/wedding8-thumb.jpg', full: '/images/wedding8-compressed.jpg', alt: 'Pratik & Ashma Wedding Photo' },
];

// Image Placeholder component
const ImagePlaceholder = () => (
  <div className="bg-gray-200 rounded-lg animate-pulse h-64 w-full"></div>
);

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const handleNavigateToMap = () => {
    // Set localStorage flag when navigating back to map
    localStorage.setItem('hasEnteredSite', 'true');
    navigate('/');
  };

  // Handle image click to show full size
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={handleNavigateToMap}
            className="text-white hover:bg-white/10"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back to Map
          </Button>
        </div>

        <h1 className="text-4xl text-center text-gold mb-8 font-playfair">Our Photo Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {!loadedImages[image.id] && <ImagePlaceholder />}
              <img
                src={image.thumbnail}
                alt={image.alt}
                className={cn(
                  "w-full h-64 object-cover rounded-lg gallery-image cursor-pointer",
                  !loadedImages[image.id] ? "opacity-0" : "opacity-100"
                )}
                onClick={() => handleImageClick(image.full)}
                onLoad={() => setLoadedImages(prev => ({ ...prev, [image.id]: true }))}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-size image modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors"
              onClick={closeModal}
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged wedding photo" 
              className="max-h-[90vh] max-w-full object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
