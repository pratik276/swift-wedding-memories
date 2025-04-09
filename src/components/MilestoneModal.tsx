
import { Milestone } from "@/types/milestone";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface MilestoneModalProps {
  milestone: Milestone;
  onClose: () => void;
}

const MilestoneModal = ({ milestone, onClose }: MilestoneModalProps) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-gradient-to-b from-slate-800 to-slate-900 max-w-md w-full mx-4 rounded-lg overflow-hidden shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={milestone.image} 
            alt={milestone.title} 
            className="w-full h-64 object-cover"
          />
          <button 
            className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-playfair text-gold mb-1">
            {milestone.title}
          </h3>
          <p className="text-sm text-gray-300 mb-4">{milestone.date}</p>
          <p className="text-white">{milestone.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MilestoneModal;
