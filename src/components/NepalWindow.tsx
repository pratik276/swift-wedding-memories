
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface NepalWindowProps {
  onEnterSite: () => void;
}

const NepalWindow = ({ onEnterSite }: NepalWindowProps) => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full max-w-4xl aspect-[3/2] mb-8"
      >
        {/* Window frame - more realistic with detailed wood texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-2xl overflow-hidden border border-amber-700">
          {/* Window detailing - wood grain texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj48cGF0aCBkPSJNMTUsMTVIMzBWMEgxNVYxNXogTTAsMzBoMTVWMTVIMFYzMHogTTAsMTVoMTVWMEgwVjE1eiBNMTUsMzBoMTVWMTVIMTVWMzB6IiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]"></div>
          
          {/* Window inner frame */}
          <div className="absolute inset-[12px] border-8 border-amber-950/40 rounded bg-black/30">
            {/* Window lattice pattern - more realistic */}
            <div className="absolute inset-0 grid grid-cols-3 gap-0">
              <div className="border-r-2 border-amber-900/80"></div>
              <div className="border-r-2 border-amber-900/80"></div>
              <div></div>
              {/* Horizontal dividers */}
              <div className="border-b-2 border-amber-900/80 col-span-3"></div>
            </div>
            
            {/* Window view */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBkPSJNMCwwIEwyMCwyMCBNMjAsMCBMMCwyMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuMyIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]"></div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 2 }}
                className="text-center px-8"
              >
                <h1 className="text-5xl md:text-6xl font-playfair text-gold mb-6 tracking-tight">
                  Pratik & Ashma
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto font-light">
                  Journey through time as we share our most cherished moments together
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Carved details - more intricate */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[95%] h-12">
            <div className="w-full h-full bg-amber-900/50 rounded-sm flex items-center justify-center p-1">
              <div className="w-full h-full border border-amber-800/30 rounded-sm bg-amber-950/30 flex items-center justify-center">
                <div className="w-[90%] flex space-x-3">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="w-full">
                      <div className="h-1.5 bg-amber-800/60 rounded-full mb-1"></div>
                      <div className="h-1 bg-amber-800/40 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Top arch details */}
          <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-amber-950 to-amber-900 flex items-center justify-center">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[3px] bg-amber-800/50"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                <div className="w-[50%] h-[2px] bg-amber-700/30"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Window sill with realistic wood texture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="w-full max-w-4xl h-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-lg mb-16"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-950/50"></div>
      </motion.div>
      
      {/* Enter button - more futuristic and minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Button 
          onClick={onEnterSite}
          className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-6 rounded-sm transition-all group flex items-center gap-2"
        >
          <span className="text-lg tracking-wider font-light">ENTER</span>
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </div>
  );
};

export default NepalWindow;
