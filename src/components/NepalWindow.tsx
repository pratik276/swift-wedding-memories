
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NepalWindowProps {
  onEnterSite: () => void;
}

const NepalWindow = ({ onEnterSite }: NepalWindowProps) => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl flex flex-col items-center">
        {/* Nepalese Window Frame */}
        <div className="relative w-full aspect-[4/3] mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 border-8 border-amber-800 rounded-t-xl overflow-hidden"
          >
            {/* Window structural elements - traditional Nepalese carved wood patterns */}
            <div className="absolute inset-0 border-8 border-amber-900/50"></div>
            
            {/* Top arch of window */}
            <div className="absolute top-0 inset-x-0 h-24 bg-amber-800 flex items-center justify-center">
              <div className="w-full h-16 bg-black border-b-8 border-amber-900 rounded-b-3xl"></div>
            </div>
            
            {/* Window lattice pattern */}
            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
              <div className="border-4 border-amber-700 rounded-lg"></div>
              <div className="border-4 border-amber-700 rounded-lg"></div>
              <div className="border-4 border-amber-700 rounded-lg"></div>
              <div className="border-4 border-amber-700 rounded-lg"></div>
            </div>
            
            {/* Carved details */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-amber-800 flex items-center justify-center">
              <div className="w-full h-4 flex space-x-4 px-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-full bg-amber-950 rounded-full"></div>
                ))}
              </div>
            </div>
            
            {/* Background image visible through window */}
            <div className="absolute inset-0 z-[-1]">
              <div className="w-full h-full bg-gradient-to-b from-amber-900/50 to-rose/30 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-5xl md:text-6xl text-gold font-playfair text-center"
                >
                  Pratik & Ashma
                </motion.h1>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Window sill with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full max-w-2xl h-16 bg-amber-800 rounded-b-lg flex items-center justify-center relative"
        >
          <div className="absolute top-0 left-0 right-0 h-4 bg-amber-900"></div>
          <div className="absolute bottom-0 left-4 right-4 h-4 bg-amber-900/50 rounded-t-md"></div>
        </motion.div>
        
        {/* Enter button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <Button 
            onClick={onEnterSite}
            className="bg-gold hover:bg-amber-400 text-black px-12 py-6 text-lg rounded-full transition-all hover:scale-105"
          >
            Enter Our Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NepalWindow;
