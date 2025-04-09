
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Play } from 'lucide-react';
import Footer from '@/components/Footer';

// Define video data
const videos = [
  { 
    id: 1, 
    title: 'Our First Dance',
    thumbnail: '/images/thumbnails/video1-thumb.jpg',
    description: 'The magical moment of our first dance as husband and wife.',
    embedId: 'dQw4w9WgXcQ' // Replace with actual YouTube video IDs
  },
  { 
    id: 2, 
    title: 'Wedding Ceremony Highlights',
    thumbnail: '/images/thumbnails/video2-thumb.jpg',
    description: 'Beautiful moments from our wedding ceremony.',
    embedId: 'jNQXAC9IVRw' // Replace with actual YouTube video IDs
  },
  { 
    id: 3, 
    title: 'Wedding Reception',
    thumbnail: '/images/thumbnails/video3-thumb.jpg',
    description: 'Fun moments from our wedding reception with friends and family.',
    embedId: 'dQw4w9WgXcQ' // Replace with actual YouTube video IDs
  }
];

const Videos = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10"
          >
            <ChevronLeft size={20} className="mr-2" />
            Back to Map
          </Button>
        </div>

        <h1 className="text-4xl text-center text-gold mb-8 font-playfair">Our Wedding Videos</h1>
        
        {/* Featured Video Section */}
        <div className="mb-12">
          <div className="bg-black/20 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-t-lg"
                src={`https://www.youtube.com/embed/${activeVideo || videos[0].embedId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-black/40">
              <h3 className="text-xl text-white font-playfair">
                {activeVideo 
                  ? videos.find(v => v.embedId === activeVideo)?.title || "Video" 
                  : videos[0].title}
              </h3>
              <p className="text-gray-300">
                {activeVideo 
                  ? videos.find(v => v.embedId === activeVideo)?.description || "" 
                  : videos[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="bg-black/20 rounded-lg overflow-hidden cursor-pointer hover:bg-black/40 transition-colors"
              onClick={() => setActiveVideo(video.embedId)}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="text-white fill-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-gold font-playfair">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
