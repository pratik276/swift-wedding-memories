import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { createPath } from '@/utils/paths';

// Define the gallery image data
const galleryImages = [
  { id: 1, src: createPath('/images/optimized/wedding1.jpg'), alt: 'Pratik & Ashma Wedding Photo 1' },
  { id: 2, src: createPath('/images/optimized/wedding2.jpg'), alt: 'Pratik & Ashma Wedding Photo 2' },
  { id: 3, src: createPath('/images/optimized/wedding3.jpg'), alt: 'Pratik & Ashma Wedding Photo 3' },
  { id: 4, src: createPath('/images/optimized/wedding4.jpg'), alt: 'Pratik & Ashma Wedding Photo 4' },
  { id: 5, src: createPath('/images/optimized/wedding5.jpg'), alt: 'Pratik & Ashma Wedding Photo 5' },
  { id: 6, src: createPath('/images/optimized/wedding6.jpg'), alt: 'Pratik & Ashma Wedding Photo 6' },
  { id: 7, src: createPath('/images/optimized/wedding7.jpg'), alt: 'Pratik & Ashma Wedding Photo 7' },
  { id: 8, src: createPath('/images/optimized/wedding8.jpg'), alt: 'Pratik & Ashma Wedding Photo 8' },
  { id: 9, src: createPath('/images/optimized/wedding9.jpg'), alt: 'Pratik & Ashma Wedding Photo 9' },
  { id: 10, src: createPath('/images/optimized/wedding10.jpg'), alt: 'Pratik & Ashma Wedding Photo 10' },
  { id: 11, src: createPath('/images/optimized/wedding11.jpg'), alt: 'Pratik & Ashma Wedding Photo 11' },
  { id: 12, src: createPath('/images/optimized/wedding12.jpg'), alt: 'Pratik & Ashma Wedding Photo 12' },
  { id: 13, src: createPath('/images/optimized/wedding13.jpg'), alt: 'Pratik & Ashma Wedding Photo 13' },
  { id: 14, src: createPath('/images/optimized/wedding14.jpg'), alt: 'Pratik & Ashma Wedding Photo 14' },
  { id: 15, src: createPath('/images/optimized/wedding15.jpg'), alt: 'Pratik & Ashma Wedding Photo 15' },
];

// Image Placeholder component
const ImagePlaceholder = () => (
  <div className="bg-gray-200 rounded-lg animate-pulse h-64 w-full"></div>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<Map<number, HTMLImageElement>>(new Map());

  useEffect(() => {
    // Set up intersection observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            if (id && !loadedImages[id]) {
              const img = entry.target as HTMLImageElement;
              img.src = galleryImages.find(image => image.id === id)?.src || '';
              img.onload = () => {
                setLoadedImages(prev => ({ ...prev, [id]: true }));
              };
              // Unobserve after loading
              observerRef.current?.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: '100px 0px' }
    );

    // Observe all image elements
    imageRefs.current.forEach((imgEl) => {
      if (observerRef.current) {
        observerRef.current.observe(imgEl);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loadedImages]);

  // Handle image click to show full size
  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl text-center mb-12">Our Wedding Memories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {!loadedImages[image.id] && <ImagePlaceholder />}
              <img
                ref={(el) => {
                  if (el) imageRefs.current.set(image.id, el);
                }}
                data-id={image.id}
                src={image.src} // Start with thumbnail
                alt={image.alt}
                className={cn(
                  "w-full h-64 object-cover rounded-lg gallery-image cursor-pointer",
                  !loadedImages[image.id] && "opacity-0 absolute",
                  loadedImages[image.id] && "opacity-100"
                )}
                onClick={() => handleImageClick(image.src)}
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
    </section>
  );
};

export default Gallery;
