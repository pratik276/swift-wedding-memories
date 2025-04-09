
import { useState } from "react";
import { motion } from "framer-motion";
import { Milestone } from "@/types/milestone";
import MilestoneModal from "./MilestoneModal";

interface TreasureMapProps {
  onMilestoneClick: () => void;
}

const TreasureMap = ({ onMilestoneClick }: TreasureMapProps) => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  // Sample milestones data - replace with your actual milestones
  const milestones: Milestone[] = [
    {
      id: 1,
      title: "First Meeting",
      date: "June 15, 2020",
      description: "The day we first met at the coffee shop downtown. You spilled your latte on my new shoes!",
      image: "/images/thumbnails/milestone-1-thumb.jpg",
      position: { x: 20, y: 80 }
    },
    {
      id: 2,
      title: "First Date",
      date: "July 10, 2020",
      description: "Our first official date at the botanical garden. We talked until they had to ask us to leave.",
      image: "/images/thumbnails/milestone-2-thumb.jpg",
      position: { x: 35, y: 55 }
    },
    {
      id: 3,
      title: "First Trip Together",
      date: "December 22, 2020",
      description: "Our weekend getaway to the mountains. Remember that tiny cabin with the leaky roof?",
      image: "/images/thumbnails/milestone-3-thumb.jpg",
      position: { x: 50, y: 30 }
    },
    {
      id: 4,
      title: "The Proposal",
      date: "March 8, 2024",
      description: "When you said yes under the stars at our favorite lookout point.",
      image: "/images/thumbnails/milestone-4-thumb.jpg",
      position: { x: 65, y: 60 }
    },
    {
      id: 5,
      title: "Wedding Day",
      date: "February 13, 2025",
      description: "The day we said 'I do' surrounded by our loved ones. The beginning of forever.",
      image: "/images/thumbnails/wedding1-thumb.jpg",
      position: { x: 80, y: 40 }
    }
  ];

  const handleOpenMilestone = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
    onMilestoneClick();
  };

  const handleCloseMilestone = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] bg-slate-800 rounded-lg overflow-hidden">
      {/* Map Background with Styling */}
      <div className="absolute inset-0 bg-[url('/images/map-background.jpg')] bg-cover bg-center opacity-40"></div>
      
      {/* Decorative Path Between Milestones */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#D4AF37" />
          </marker>
        </defs>
        <path 
          d="M20,80 Q28,67 35,55 Q42,42 50,30 Q58,45 65,60 Q73,50 80,40" 
          stroke="#D4AF37" 
          strokeWidth="0.8" 
          fill="none" 
          strokeDasharray="2"
          markerEnd="url(#arrowhead)"
        />
      </svg>
      
      {/* Milestones */}
      {milestones.map((milestone) => (
        <motion.div 
          key={milestone.id}
          className="absolute cursor-pointer"
          style={{ 
            left: `${milestone.position.x}%`, 
            top: `${milestone.position.y}%` 
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: milestone.id * 0.2 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => handleOpenMilestone(milestone)}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gold rounded-full flex items-center justify-center text-black font-bold relative">
            {milestone.id}
            <div className="absolute -bottom-8 whitespace-nowrap text-xs md:text-sm text-white bg-black/50 px-2 py-1 rounded">
              {milestone.title}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Milestone Modal */}
      {selectedMilestone && (
        <MilestoneModal 
          milestone={selectedMilestone} 
          onClose={handleCloseMilestone} 
        />
      )}
    </div>
  );
};

export default TreasureMap;
