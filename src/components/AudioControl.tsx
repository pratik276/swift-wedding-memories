
import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Create audio element programmatically to avoid initial loading of the file
    const audio = new Audio();
    audio.preload = 'none'; // Don't preload the audio file
    audio.src = '/audio/wedding-music-compressed.mp3';
    audio.loop = true;
    
    audio.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });
    
    audioRef.current = audio;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Start loading the audio when user clicks play for the first time
      if (audioRef.current.preload === 'none') {
        audioRef.current.preload = 'auto';
      }
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, handle accordingly
          setIsPlaying(false);
        });
      }
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full",
        "bg-white/80 text-black shadow-lg backdrop-blur-sm transition-all duration-300",
        "hover:bg-rose hover:text-white"
      )}
      disabled={!isLoaded && !isPlaying}
    >
      {isPlaying ? (
        <>
          <Pause size={16} />
          <span className="text-sm">Pause Music</span>
        </>
      ) : (
        <>
          <Music size={16} />
          <span className="text-sm">Play Music</span>
        </>
      )}
    </button>
  );
};

export default AudioControl;
